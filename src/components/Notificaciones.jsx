import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}


export default function AccessibleBadges({onClick}) {
    return (
      <IconButton aria-label={notificationsLabel(100)} onClick={onClick}>
        <Badge badgeContent={4} color="secondary">
          <NotificationsActiveIcon  sx={{ color: "white"}} />
        </Badge>
      </IconButton>
    );
  }