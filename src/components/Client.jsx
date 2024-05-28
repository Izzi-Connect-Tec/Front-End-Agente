import { useUserContext } from "../Providers/UserContext";
import "../styles/client.css";
import FolderList from "./HistorialCliente";
//import TextField from "@mui/material/TextField";
import { useState, useCallback, useEffect } from "react";



const Client = (props) => {

  const user = useUserContext();



  const [cliente, setCliente] = useState(""); // Valor inicial para cliente
  const [url, setUrl] = useState(""); // Valor inicial para url
  const [usuarioData, setUsuarioData] = useState(null);

  const descargar = useCallback(async () => {
    try {
      console.log("Descargando datos");
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setUsuarioData(data);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  //Mejorar lógica

  useEffect(() => { // Descargar datos cuando cambie el cliente
    if (cliente !== "" && cliente !== null) { // Asegurar que cliente no esté vacío antes de descargar
      setUrl(`http://44.209.22.101:8080/cliente/consultarCliente/${cliente}`);
      descargar();
    }
  }, [cliente, descargar]);

  useEffect(() => {
    if(user !== null){
      setCliente(user.name)
    }
  }, [user])

  const DatosClienteEncontrados = () => {
    return (
      <div>
        <p>Contrato: {usuarioData.Celular}</p>
        <p>Nombre: {usuarioData.Nombre} {usuarioData.ApellidoP} {usuarioData.ApellidoM}</p>
        <p>Localidad: {usuarioData.IdZona}</p>
        <p>Plan contratado: Izzi Basic $150</p>
      </div>
    );
  };

  return (
    <div className="client">
      <div className="titulo-cliente">
        <h2>Cliente</h2>
      </div>
      <div className="client-div">
        <div className="solucionTarjetaProblema">
        </div>
        {usuarioData ? 
        <div>
            <DatosClienteEncontrados /> 
            <FolderList />
        </div>
        : <h1>Sin cliente</h1>}
      </div>
    </div>
  );
};

export default Client;
