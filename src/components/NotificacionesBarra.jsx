// Autor: Karla Cruz, Joahan García ok
// Componente de la barra de notificaciones

import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AccessibleBadges from "./Notificaciones";
import Notification from "./Notification";
import "../styles/notificacionesBarra.css";
import NotificationContext from "../Providers/NotificationContext";
import io from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLogInContext } from "../Providers/LogInContext";

const socket = io("http://127.0.0.1:8080");
// Dummies
// const initialData = [
//   { titulo: "TITLE 1", description: "This is notification one"},
//   { titulo: "TITLE 2", description: "This is notification two"},
//   { titulo: "TITLE 3", description: "This is notification three"},
//   { titulo: "TITLE 4", description: "This is notification four"},
//   { titulo: "TITLE 5", description: "This is notification five"},
//   { titulo: "TITLE 6 ", description: "This is notification six, test with longer text, aaaaaa hello hello test test"},
// ];

export default function TemporaryDrawer() {
  const [notifications, setNotifications] = useState([]); // Estado para las notificaciones
  const [open, setOpen] = useState(false); // Estado para abrir y cerrar el drawer
  const [notificationsLoaded, setNotificationsLoaded] = useState(false); // Estado para saber si las notificaciones ya se cargaron
  const [agente] = useLogInContext();

  const notify = useCallback(() => {
    if (!notificationsLoaded) {
      return setNotificationsLoaded(true); 
    } 
    if (notifications.length > 0 && notificationsLoaded) {
      // console.log("Notificación recibida:", notifications.at().Titulo);
      toast(notifications.at(-1).Titulo);
      // toast("hola cara de bola");
    }
  }, [notifications]);

  useEffect(() => {
    notify();
  }, [notify]);

  useEffect(() => {
    // Inicialmente cargar datos
    console.log("Cargando notificaciones...");
    fetch(`http://127.0.0.1:8080/notificacion/getNotificacionAgente/${agente.IdEmpleado}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNotifications(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));

    // Soket 
    socket.on(`notificacion_empleado_${agente.IdEmpleado}`, (notificacionEmpleado) => {
      console.log("Notificaciones recibidas:", notificacionEmpleado);
      setNotifications(notificacionEmpleado);
    });

    // Limpiar el socket al desmontar el componente
    return () => {
      socket.off(`notificacion_empleado_${agente.IdEmpleado}`);
      console.log("Socket limpiado");
    };
  }, []);

  // Función para manejar el clic en el badge
  const handleBadgeClick = () => {
    console.log("Hiciste clic en el badge");
    toggleDrawer(true)(); // Abrir el drawer
  };

  // Función para abrir y cerrar el drawer
  const toggleDrawer = (newOpen) => () => {
    console.log("FUI TOCADO");
    setOpen(newOpen); // Cambiar el estado del drawer
  };

  // Función para manejar el borrado de notificaciones
  const handleDelete = (index, IdNotificacion) => {
    fetch(  
      `http://127.0.0.1:8080/notificacion/eliminarNotificacion/${IdNotificacion}/${agente.IdEmpleado}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.ok) {
          // Si la eliminación fue exitosa, actualiza el estado
          setNotifications(notifications.filter((_, i) => i !== index));
        } else {
          console.error("Error al eliminar la notificación");
        }
      })
      .catch((error) =>
        console.error("Error al eliminar la notificación: ", error)
      );
  };

  // Contenido del drawer
  // Utiliza el componente de notificación para mostrar las notificaciones
  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <div className="bdia-agente">
        <p>¡Buen día {agente.Nombre} {agente.ApellidoP} {agente.ApellidoM}!</p>
      </div>

      <Divider />
      <List>
        {notifications.length !== 0 ? (
          notifications.map((notification, index) => {
            return (
              <Notification
                key={index}
                titulo={notification.Titulo}
                descripcion={notification.Descripcion}
                onDelete={() =>
                  handleDelete(index, notification.IdNotificacion)
                } // Pasar el idNotificacion aquí
              />
            );
          })
        ) : (
          <div className="no-notifications">No hay notificaciones</div>
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
      <ToastContainer />
    </NotificationContext.Provider>
  );
}
