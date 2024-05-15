// Container with the description and information of the client
import "../styles/client.css";
import FolderList from "./HistorialCliente";
import TextField from "@mui/material/TextField";

const Client = (props) => {
  return (
    <div className="client">
      <div className="titulo-cliente">
        <h2>Cliente</h2>
      </div>
      <div className="client-div">
        <div className="solucionTarjetaProblema">
          <TextField id="outlined-basic" label="Solucion" variant="outlined" />
        </div>
        <p>Nombre: Joahan Lecona</p>
        <p>Localidad: Atizapan de Zaragoza</p>
        <p>Plan contratado: Izzi Basic $150</p>
      </div>
      <div className="historial-div">
        <FolderList />
      </div>
    </div>
  );
};

export default Client;
