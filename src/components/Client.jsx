
import "../styles/client.css";
import FolderList from "./HistorialCliente";
//import TextField from "@mui/material/TextField";
import { useState, useCallback, useEffect } from "react";
import { useUserContext } from "../Providers/AmazonContext";
import Chatbox from "./Chatbox";



const Client = (props) => {

  const [reportesCliente, setReportesCliente] = useState();

  const [usuario,,datosCliente,,] = useUserContext();

  const [urlDatos, setUrlDatos] = useState(null); // Valor inicial para url\

  const [urlReportes, setUrlReportes] = useState(null); // Valor inicial para url

const descargarDatosCliente = useCallback(async () => {
    try {
      console.log("Descargando datos");
      const response = await fetch(urlDatos);
      if (!response.ok) {
        throw new Error('La solicitud no pudo completarse con éxito');
      }
      const data = await response.json();
      datosCliente({Nombre: data.Nombre, ApellidoP: data.ApellidoP, ApellidoM: data.ApellidoM, IdZona: data.IdZona});
    } catch (error) {
        console.log(error);
    }
}, [urlDatos]);


const descargarReportesCliente = useCallback(async () => {
  try {
    console.log("Descargando Reportes");
    const response = await fetch(urlReportes);
    if (!response.ok) {
      throw new Error('La solicitud no pudo completarse con éxito');
    }
    const data = await response.json();
    console.log(data)
    setReportesCliente(data)
  } catch (error) {
      console.log(error);
  }
}, [urlReportes]);

  //Mejorar lógica
  //PRegunat por el useCallBack

  useEffect(() => {
    descargarDatosCliente();
    descargarReportesCliente();
  }, [descargarDatosCliente]);


  useEffect(() => {
    if(usuario.Celular){
      setUrlDatos(`http://44.209.22.101:8080/cliente/consultarCliente/${usuario.Celular}`);
      setUrlReportes(`http://44.209.22.101:8080/reporte/reportesCliente/${usuario.Celular}`)
      // setUrl(`http://localhost:8080/cliente/consultarCliente/${usuario.Celular}`);
    }
  }, [usuario.Celular])

  const DatosClienteEncontrados = () => {
    return (
      <div>
        <p>Contrato: {usuario.Celular}</p>
        <p>Nombre: {usuario.Nombre} {usuario.ApellidoP} {usuario.ApellidoM}</p>
        <p>Localidad: {usuario.IdZona}</p>
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
      {/* <Chatbox nombreCliente = {"Joahan"} nombreAgente = {"Maxito"} id = {"c9e70e8d-441f-4b80-9efa-9f7f907da0a0"}/> */}
        <div className="solucionTarjetaProblema">
        </div>
        {usuario.Nombre ? 
        <div>
          <DatosClienteEncontrados />
          {reportesCliente && <FolderList historiaCliente={reportesCliente}/> }
        </div>
        : <h1>Sin cliente</h1>}
      </div>
    </div>
  );
};

export default Client;
