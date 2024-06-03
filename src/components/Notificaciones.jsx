// Autor: Joahan García, Karla Cruz
// Componente del ícono de notificaciones que maneja la cantidad de notificaciones que hay

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useContext } from "react";
import NotificationContext from "../Providers/NotificationContext";

// Función para manejar el texto del ícono (cantidad de notificaciones)
function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

// Componente de ícono de notificaciones
export default function AccessibleBadges({ onClick }) {
  const notifications = useContext(NotificationContext); // Obtener el contexto de las notificaciones para saber la cantidad

  return (
    <IconButton
      aria-label={notificationsLabel(notifications)}
      onClick={onClick}
      sx={{
        "&:hover": {
          background: "#ffffff33",
        },
      }}
    >
      <Badge badgeContent={notifications} color="secondary">
        <NotificationsActiveIcon sx={{ color: "white" }} />
      </Badge>
    </IconButton>
  );
}
