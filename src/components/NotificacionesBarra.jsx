import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccessibleBadges from './Notificaciones';

export default function TemporaryDrawer() {

  const handleBadgeClick = () => {
    console.log('Hiciste clic en el badge');
    toggleDrawer(true)();
  };


  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    console.log("FUI TOCADO")
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation"  onClick={toggleDrawer(false)}>
      <List>
        {['Notificaion1', 'Notificaion2', 'Notificaion3', 'Notificaion4'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <p>{text}</p>
          </ListItem>
        ))}
      </List>
      <Divider />
      <p>¡Buen día Joahan Javier Garcia Fernandez!</p>
    </Box>
  );

  return (
    <div>
      <AccessibleBadges onClick={handleBadgeClick}/>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}