// Author: Joahan García
// Component that acts like a simple select component to choose the priority of a report

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ReportPriority({ onPriorityChange }) {
  const [priority, setPriority] = React.useState('');

  const handleChange = (event) => {
    setPriority(event.target.value);
    console.log(event.target.value);
    onPriorityChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl required sx={{ m: 1, minWidth: 250}} >
        <InputLabel
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(","),}}
          id="selectLabel"
        >
          Prioridad
        </InputLabel>
        <Select
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          labelId="selectLabel"
          id="select"
          value={priority}
          label="Priority"
          onChange={handleChange}
        >
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value="Baja"
          >
            Low
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value="Media"
          >
            Medium
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value="Alta"
          >
            High
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
