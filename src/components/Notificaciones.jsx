import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useContext } from 'react';
import NotificationContext from './NotificationContext';

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

export default function AccessibleBadges({ onClick }) {
  const notifications = useContext(NotificationContext);

  return (
    <IconButton aria-label={notificationsLabel(notifications)} onClick={onClick}>
      <Badge badgeContent={notifications} color="secondary">
        <NotificationsActiveIcon sx={{ color: "white" }} />
      </Badge>
    </IconButton>
  );
}
