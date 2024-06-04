// Autor: Karla Cruz, Joahan García
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

// const socket = io("http://127.0.0.1:8080");

export default function TemporaryDrawer() {
  // Dummies
  // const initialData = [
  //   { titulo: "TITLE 1", description: "This is notification one"},
  //   { titulo: "TITLE 2", description: "This is notification two"},
  //   { titulo: "TITLE 3", description: "This is notification three"},
  //   { titulo: "TITLE 4", description: "This is notification four"},
  //   { titulo: "TITLE 5", description: "This is notification five"},
  //   { titulo: "TITLE 6 ", description: "This is notification six, test with longer text, aaaaaa hello hello test test"},
  // ];

  const [notifications, setNotifications] = useState([]); // Estado para las notificaciones
  const [open, setOpen] = useState(false); // Estado para abrir y cerrar el drawer
  
  const [url, setUrl] = useState('')
  const [data, setData] = useState(null);

  // const fecha = "2024-06-04"

  const descargar = useCallback(
    async () => {
      setUrl(`http://127.0.0.1:8080/notifications/notificaciones`);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); 
      setData(data);
    }, [url])

  useEffect(() => {
    descargar();
  }, [descargar]);

  console.log(data);

  // useEffect(() => {
    // Inicialmente cargar datos
    // console.log("Cargando notificaciones...");
    // fetch(`http://127.0.0.1:8080/notifications/notificaciones`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error("Error fetching data:", error));

    // // Configurar el socket para escuchar eventos
    // socket.on("notificacion_global", (notificacionesGlobales) => {
    //   console.log("Notificaciones globales recibidas:", notificacionesGlobales);
    //   // setNotifications(notificacionesGlobales);
    // });

    // Limpiar el socket al desmontar el componente
    // return () => {
    //   socket.off("notificacion_global");
    //   console.log("Socket limpiado");
    // };
  // }, []);

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
                titulo={notification.titulo}
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
