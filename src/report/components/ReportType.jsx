import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ReportType({ onIdIncidenceChange }) {
  const [idIncidence, setIdIncidence] = React.useState("");

  const handleChange = (event) => {
    setIdIncidence(event.target.value);
    console.log(event.target.value);
    onIdIncidenceChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl required sx={{ m: 1, minWidth: 250 }}>
        <InputLabel
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          id="selectLabel"
        >
          Incidence ID
        </InputLabel>
        <Select
          sx={{ fontFamily: ["Century Gothic", "Futura"].join(",") }}
          labelId="selectLabel"
          id="select"
          value={idIncidence}
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
            Telephony
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
