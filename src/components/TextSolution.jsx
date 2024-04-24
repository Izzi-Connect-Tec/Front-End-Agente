import "../styles/textsolution.css"

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

export const TextSolution = () => {
    return (
        <Box
        elevation={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 110,
          },
        }}
      >
        <Item key={1} elevation={10}>
              Reiniciar el módem con la opción de botón manual de reset.
        </Item>
        </Box>
    );
}



