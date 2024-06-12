// Container with the information of the service, problem and buttons
import "../styles/service.css";
//import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stats from "./Stats";
import EmbedConnect from "./AmazonConnect";
import { useEffect } from "react";
import { useUserContext } from "../Providers/AmazonContext";
import { useLlamadaContext } from "../Providers/LlamadaContext";
import { Sentiment } from "./Sentiment";
import Chatbox from "./Chatbox";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCallback } from "react";
import { useLogInContext } from "../Providers/LogInContext";



const Service = (props) => {

  const [call,,] = useLlamadaContext();
  const [agent,,] = useLogInContext(); 

  const emergencia = useCallback( async () => {
    try{
      const datos = {
        id: call.IdLlamada,
        nombre: "Javier",
        apellido: "Garcia"
      }
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${agent.token}`
          
        },
        body: JSON.stringify(datos)
      }
      let res = await fetch("http://44.209.22.101:8080/empleado/EMERGENCIA", config) 
      if (!res.ok) {
        throw new Error('La solicitud no pudo completarse con éxito');
      }
    } catch (error){
      console.log(error)
    }
  },[call.IdLlamada])


  

  return (
    <div className="service">
      <div className="titulo-service">
        <h2>Servicio</h2>
      </div>
      <div className="service-div">
        <div className="tarjetaProblema">
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={emergencia} >
        Ayuda supervisor
        </Button>
          <EmbedConnect/>
          {/* <Chatbox nombreCliente = {"Joahan"} nombreAgente = {"Maxito"} id = {call.IdLlamada}/> */}
          {/* <Sentiment/> */}
          {call.IdLlamada && 
          <section>
            <Card variant="outlined">
              <p className="problemas">Problema</p>
              <p>{call.DescripcionLlamada}</p>
            </Card>
            <Chatbox nombreCliente = {"Joahan"} nombreAgente = {"Maxito"} id = {call.IdLlamada}/>
            {/* <div>
              <Stats/>
              //Es
            </div> */}
          </section>
          }
        </div>
      </div>
    </div>
  );
};

export default Service;