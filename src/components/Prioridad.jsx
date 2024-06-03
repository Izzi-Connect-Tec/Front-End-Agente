import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ onPrioridadChange }) {
  const [prioridad, setPrioridad] = React.useState('');

  const handleChange = (event) => {
    setPrioridad(event.target.value);
    onPrioridadChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(","),}}
          id="demo-simple-select-label"
        >
          Prioridad
        </InputLabel>
        <Select
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={prioridad}
          label="Prioridad"
          onChange={handleChange}
        >
          <MenuItem value="baja">Baja</MenuItem>
          <MenuItem value="media">Media</MenuItem>
          <MenuItem value="alta">Alta</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
