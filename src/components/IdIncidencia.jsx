import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelectIncidencia({ onIdIncidenciaChange }) {
  // const [age, setAge] = React.useState("");
  const [idIncidencia, setIdIncidencia] = React.useState('');

  const handleChange = (event) => {
    setIdIncidencia(event.target.value);
    console.log(event.target.value);
    onIdIncidenciaChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl required sx={{ m: 1, minWidth: 250 }}>
        <InputLabel
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(","),}}
          id="demo-simple-select-label"
        >
          Id incidencia
        </InputLabel>
        <Select
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={idIncidencia}
          label="IdIncidencia"
          onChange={handleChange}
        >
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value={1}
          >
            Internet
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value={2}
          >
            Telefonia
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value={3}
          >
            Television
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
