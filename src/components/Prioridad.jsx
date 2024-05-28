import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          id="demo-simple-select-label"
        >
          Prioridad
        </InputLabel>
        <Select
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Prioridad"
          onChange={handleChange}
        >
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value={10}
          >
            Baja
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value={20}
          >
            Media
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
            value={30}
          >
            Alta
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
