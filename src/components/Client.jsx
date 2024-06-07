
import "../styles/client.css";
import FolderList from "./HistorialCliente";
//import TextField from "@mui/material/TextField";
import { useState, useCallback, useEffect } from "react";
import { useUserContext } from "../Providers/AmazonContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';


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
      // <div>
      //   <p>Contrato: {usuario.Celular}</p>
      //   <p>Nombre: {usuario.Nombre} {usuario.ApellidoP} {usuario.ApellidoM}</p>
      //   <p>Localidad: {usuario.IdZona}</p>
      //   <p>Plan contratado: Izzi Basic $150</p>
      // </div>
      <div>
        <div className="dataClient">
          <AccountCircleIcon/>
          <div className="client">
            <p className="label">Joahan Garcia Fernandez</p>
            <p className="info">Hombre, 25 años</p>
          </div>
        </div>
        <div className="dataClient">
          <CallIcon/>
          <div className="client">
            <p className="label">Número</p>
            <p className="info">+525584016051</p>
          </div>
        </div>
        <div className="dataClient">
          <EmailIcon/>
          <div className="client">
            <p className="label">Email</p>
            <p className="info">joahan@hotmail.com</p>
          </div>
        </div>
        <div className="dataClient">
          <PlaceIcon/>
          <div className="client">
            <p className="label">Localidad</p>
            <p className="info">Atizapan</p>
          </div>
        </div>
        <div className="dataClient">
          <ReceiptLongIcon/>
          <div className="client">
            <p className="label">Plan actual</p>
            <p className="info">Izzi Basic $150</p>
          </div>
        </div>
    </div>
    );
  };

  return (
    <div className="client">
      <div className="titulo-cliente">
        <h2>Cliente</h2>
      </div>
      <div className="client-div">
      <DatosClienteEncontrados />
        <div className="solucionTarjetaProblema">
        </div>
        {usuario.Nombre && 
        <div>
          <DatosClienteEncontrados />
          {reportesCliente && <FolderList historiaCliente={reportesCliente}/> }
        </div>
        }
      </div>
    </div>
  );
};

export default Client;
