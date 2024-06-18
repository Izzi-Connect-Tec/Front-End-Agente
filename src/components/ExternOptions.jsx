import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FlagIcon from "@mui/icons-material/Flag";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ReportForm from "./ReportForm";
import IncidenceForm from "./IncidenceForm";
import { SupervisorEmergency } from "./SupervisorEmergency";

export default function ExternOptions() {
  const actions = [
    { icon: <FlagIcon />, name: "Report", fun: <ReportForm /> },
    {
      icon: <HomeRepairServiceIcon />,
      name: "Incidence",
      fun: <IncidenceForm />,
    },
    {
      icon: <WarningAmberIcon />,
      name: "Supervisor Help",
      fun: <SupervisorEmergency />,
    },
  ];

  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial"
        direction="left"
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={{
              "&:hover": {
                backgroundColor:
                  action.name === "Ayuda supervisor" ? "red" : "white",
                color: "#D7006D",
                border: "2px solid #D7006D",
              },
            }}
            key={action.name}
            icon={action.fun}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
