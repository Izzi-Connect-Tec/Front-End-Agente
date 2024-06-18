// Authors: Joahan García, Karla Cruz
// Component for the notifications icon that handles the amount of notifications there are

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useContext } from "react";
import NotificationContext from "../providers/NotificationContext";

// Functions for handling notifications icon text (quantity of notifications)
function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

// Component for the notifications icon
export default function AccessibleBadges({ onClick }) {
  const notifications = useContext(NotificationContext); // Obtaining context of notifications to know the quantity

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
