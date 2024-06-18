//Author: Maximiliano Lecona, Karla Cruz
//Notification bar component

import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import NotificationsIcon from "./NotificationsIcon";
import NotificationCard from "./NotificationCard";
import "../styles/notificationBar.css";
import NotificationContext from "../providers/NotificationContext";
import io from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("http://44.209.22.101:8080");

export default function TemporaryDrawer() {
  const [update, setUpdate] = useState(false);
  const [notifications, setNotifications] = useState([]); // State to open notifications
  const [open, setOpen] = useState(false); // Estate to open and close drawer
  const [notificationsLoaded, setNotificationsLoaded] = useState(false); // State to load notifications

  let agent = JSON.parse(window.localStorage.getItem('Agent'));

  const notify = useCallback(() => {
    if (notificationsLoaded && update) {
      toast(
        `${notifications.at(-1).Titulo} 
       ${notifications.at(-1).Descripcion}`,
        { containerId: "notifications" }
      );
      setUpdate(false);
    } else {
      console.log("Changing to loaded");
      setNotificationsLoaded(true);
    }
  }, [notifications, update]);

  useEffect(() => {
    if (notifications.length > 0) {
      notify();
    }
  }, [notify]);

  useEffect(() => {
    // Fetch notifications
    console.log("Fetching notifications...");
    let config = { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${agent.Token}`
      }
    }
    fetch(
      `http://44.209.22.101:8080/notificacion/getNotificacionAgente/${agent.IdEmpleado}`, config
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNotifications(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));

    // Socket
    socket.on(
      `notificacion_empleado_${agent.IdEmpleado}`,
      (employeeNotifications) => {
        console.log("Received notifications:", employeeNotifications);
        setUpdate(true);
        setNotifications(employeeNotifications);
      }
    );

    // Clean socket
    return () => {
      socket.off(`notificacion_empleado_${agent.IdEmpleado}`);
      console.log("Socket cleaned up");
    };
  }, [agent.IdEmpleado]);

  // Function to handle badge click
  const handleBadgeClick = () => {
    console.log("You make click to badge");
    if (toggleDrawer) {
      toggleDrawer(true)(); // Open drawer
    } else {
      console.error("ToggleDrawer is not defined");
    }
  };

  // Function to toggle the drawer
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen); // Change drawer state
  };

  // Function to handle notification delete
  const handleDelete = (index, IdNotificacion) => {
    let config = { 
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${agent.Token}`
      }
    }
    fetch(
      `http://44.209.22.101:8080/notificacion/eliminarNotificacion/${IdNotificacion}/${agent.IdEmpleado}`, config
    )
      .then((response) => {
        if (response.ok) {
          // If notification was deleted successfully
          setNotifications(notifications.filter((_, i) => i !== index));
        } else {
          console.error("Error trying to delete notification");
        }
      })
      .catch((error) =>
        console.error("Error trying to delete notification: ", error)
      );
  };

  // Drawer content
  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <div className="gdayAgent">
        <p>
          Nice day {agent.Nombre} {agent.ApellidoP} {agent.ApellidoM}!
        </p>
      </div>

      <Divider />
      <List>
        {notifications.length !== 0 ? (
          notifications.map((notification, index) => {
            return (
              <NotificationCard
                key={index}
                title={notification.Titulo}
                description={notification.Descripcion}
                onDelete={() =>
                  handleDelete(index, notification.IdNotificacion)
                }
              />
            );
          })
        ) : (
          <div className="noNotifications">No notifications available</div>
        )}
      </List>
    </Box>
  );

  return (
    <NotificationContext.Provider value={notifications.length}>
      <ToastContainer
        containerId="notifications"
        stacked
        hideProgressBar={true}
      />

      <div>
        <NotificationsIcon onClick={handleBadgeClick} />
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </NotificationContext.Provider>
  );
}
