import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WarningIcon from "@mui/icons-material/Warning";

export default function ClientHistory({ clientHistory }) {
  return (
    <section>
      {clientHistory.map((reporte, index) => (
        <List
          key={reporte.IdReporte || index}
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            fontfamily: "futura",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WarningIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={reporte.Descripcion}
              secondary={reporte.FechaHora}
            />
          </ListItem>
        </List>
      ))}
    </section>
  );
}
