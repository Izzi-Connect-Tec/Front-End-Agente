import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ onPrioridadChange }) {
  // const [age, setAge] = React.useState("");
  const [prioridad, setPrioridad] = React.useState('');

  const handleChange = (event) => {
    setPrioridad(event.target.value);
    console.log(event.target.value);
    onPrioridadChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl required sx={{ m: 1, minWidth: 250}} >
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
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value="Baja"
          >
            Baja
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value="Media"
          >
            Media
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value="Alta"
          >
            Alta
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
