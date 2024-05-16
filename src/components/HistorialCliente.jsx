import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WarningIcon from '@mui/icons-material/Warning';

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', fontfamily: "futura" }}>
        <h2>HISTORIAL DE ATENCION:</h2>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WarningIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Problemas con internet" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WarningIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sin señal" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WarningIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Problemas con internet" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}