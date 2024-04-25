import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: 'normal', // Ajusta el interlineado
  height: 'auto', // Ajusta la altura para que se ajuste al contenido
}));

export const TextSolution = () => {
  return (
    <Box
      elevation={2}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        "& > :not(style)": {
          m: 1,
          width: 300,
          height: 110,
        },
      }}
    >
      <Item key={1} elevation={10}>
        Reiniciar el módem con la configuración del manual determinada no sé qué más decir aquí jajaja
      </Item>
    </Box>
  );
}
