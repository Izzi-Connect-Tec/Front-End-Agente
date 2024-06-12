import { useUserContext } from "../Providers/AmazonContext";
import "../styles/client.css";
import FolderList from "./HistorialCliente";
//import TextField from "@mui/material/TextField";
import { useState, useCallback, useEffect } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import { calcularEdad } from "../Logic/edadCliente";


const Client = (props) => {

  const [vistaReporte, setVistaReporte] = useState(false);

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
      datosCliente({Nombre: data.Nombre, ApellidoP: data.ApellidoP, ApellidoM: data.ApellidoM, Sexo: data.Sexo, Correo: data.Correo, FechaNac: data.FechaNac, IdZona: data.IdZona, Zona: data.Zona});
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
      // <div>
      //   <p>Contrato: {usuario.Celular}</p>
      //   <p>Nombre: {usuario.Nombre} {usuario.ApellidoP} {usuario.ApellidoM}</p>
      //   <p>Localidad: {usuario.IdZona}</p>
      //   <p>Plan contratado: Izzi Basic $150</p>
      // </div>
      <div className="completeClient">
        <div className="dataClient">
          <AccountCircleIcon/>
          <div className="client">
            <p className="labelNombre">{`${usuario.Nombre} ${usuario.ApellidoP} ${usuario.ApellidoM}`}</p>
            <p className="info">{`${usuario.Sexo}, ${calcularEdad(usuario.FechaNac)} años`}</p>
          </div>
        </div>
        <div className="dataClient">
          <CallIcon/>
          <div className="client">
            <p className="label">Número</p>
            <p className="info">{usuario.Celular}</p>
          </div>
        </div>
        <div className="dataClient">
          <EmailIcon/>
          <div className="client">
            <p className="label">Email</p>
            <p className="info">{usuario.Correo}</p>
          </div>
        </div>
        <div className="dataClient">
          <PlaceIcon/>
          <div className="client">
            <p className="label">Localidad</p>
            <p className="info">{usuario.Zona}</p>
          </div>
        </div>
        <div className="dataClient">
          <ReceiptLongIcon/>
          <div className="client">
            <p className="label">{usuario.Paquetes > 1 ? "Plan contratado" : "Planes contratados"}</p>
            <p className="info">Izzi Basic $150</p>
            {usuario.Paquetes.map((paquete, index) => (
              <p key={index} className="info">{paquete.Nombre}</p>
            ))}
          </div>
        </div>
    </div>
    );
  };

  return (
    <div className="client">
      <div className="titulo-cliente">
        Customer details
        <button onClick={() => {setVistaReporte(!vistaReporte)}}>{vistaReporte ? "Datos" : "Reportes"}</button>
      </div>
      <div className="client-div">
        <div className="solucionTarjetaProblema">
        </div>
        {usuario.Nombre && 
        <div>
          {
            !vistaReporte
            ? <DatosClienteEncontrados />
            : <FolderList historiaCliente={reportesCliente}/> 
          }
        </div>
        }
      </div>
    </div>
  );
};

export default Client;
