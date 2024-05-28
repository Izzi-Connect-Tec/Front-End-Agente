// Autor: Karla Cruz, Joahan García
// Componente de la barra de notificaciones

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AccessibleBadges from "./Notificaciones";
import Notification from "./Notification";
import "../styles/notificacionesBarra.css";
import NotificationContext from "../Providers/NotificationContext";

export default function TemporaryDrawer() {
  // Dummies
  const initialData = [
    { description: "This is notification one", sender: "Leo" },
    { description: "This is notification two", sender: "Bris" },
    { description: "This is notification three", sender: "Javi" },
    { description: "This is notification four", sender: "Javi" },
    { description: "This is notification five", sender: "Leo" },
    { description: "This is notification six, test with longer text, aaaaaa hello hello test test", sender: "Kari" }
  ];

  const [notifications, setNotifications] = useState(initialData); // Estado para las notificaciones
  const [open, setOpen] = useState(false); // Estado para abrir y cerrar el drawer

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
  const handleDelete = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index)); // Filtrar las notificaciones para borrar la seleccionada
  };

  // Contenido del drawer
  // Utiliza el componente de notificación para mostrar las notificaciones
  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <div className="bdia-agente"><p>¡Buen día Joahan Javier Garcia Fernandez!</p></div>
      
      <Divider />
      <List>
        {notifications.length !== 0 ? (
          notifications.map((notification, index) => {
            return (
              <Notification
                key={index}
                descripcion={notification.description}
                remitente={notification.sender}
                onDelete={() => handleDelete(index)}
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
    </NotificationContext.Provider>
  );
}
