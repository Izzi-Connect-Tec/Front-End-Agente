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
        "& > :not(style)": {
          m: 1,
          width: '100%',
          height: 'auto',
        },
      }}
    >
      <Item key={1} elevation={10}>
        Reiniciar el módem con la configuración del manual determinada no sé qué más decir aquí jajajavsddd
      </Item>
    </Box>
  );
}
