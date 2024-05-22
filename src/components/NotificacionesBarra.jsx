import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AccessibleBadges from "./Notificaciones";
import Notificacion from "./Notificacion";
import "../styles/notificacionesBarra.css";
import NotificationContext from "./NotificationContext";

export default function TemporaryDrawer() {
  const initialData = [
    { description: "This is notification one", sender: "Leo" },
    { description: "This is notification two", sender: "Bris" },
    { description: "This is notification three", sender: "Javi" },
    { description: "This is notification four", sender: "Javi" },
    { description: "This is notification five", sender: "Leo" },
    { description: "This is notification six, test with longer text, aaaaaa hello hello test test", sender: "Kari" }
  ];

  const [notifications, setNotifications] = useState(initialData);
  const [open, setOpen] = useState(false);

  const handleBadgeClick = () => {
    console.log("Hiciste clic en el badge");
    toggleDrawer(true)();
  };

  const toggleDrawer = (newOpen) => () => {
    console.log("FUI TOCADO");
    setOpen(newOpen);
  };

  const handleDelete = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="bdia-agente"><p>¡Buen día Joahan Javier Garcia Fernandez!</p></div>
      
      <Divider />
      <List>
        {notifications.length !== 0 ? (
          notifications.map((notification, index) => {
            return (
              <Notificacion
                key={index}
                descripcion={notification.description}
                remitente={notification.sender}
                onDelete={() => handleDelete(index)}
              />
            );
          })
        ) : (
          <div className="tarea-contenedor">No hay notificaciones</div>
        )}
      </List>
    </Box>
  );

  return (
    <NotificationContext.Provider value={notifications.length}>
      <div>
        <AccessibleBadges onClick={handleBadgeClick} />
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </NotificationContext.Provider>
  );
}
