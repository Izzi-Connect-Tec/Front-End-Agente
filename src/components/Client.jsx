// // Container with the description and information of the client
// import "../styles/client.css";
// import FolderList from "./HistorialCliente";
// import TextField from "@mui/material/TextField";
// import { useState, useCallback, useEffect, useRef } from "react";

// const Client = (props) => {

//   const entradaCliente = useRef();


//   const consultarCliente = (evento) => {
//     setCliente(entradaCliente.current.value)
// }


//   const [cliente, setCliente] = useState(null)
//   const [url, setUrl] = useState(null);
//   // const [url, setUrl] = useState("http://10.48.64.4:8080/cliente/consultarCliente/16535909");
//   const [usuarioData, setUsuarioData] = useState(null);

//   const descargar = useCallback(async () => {
//     try {
//       console.log("Descargando datos");
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//       setUsuarioData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [url]);

//   useEffect(() => {
//     setUrl(`http://10.48.64.4:8080/cliente/consultarCliente/${cliente}`)
//     descargar();
//   }, [cliente]);

//   const DatosClienteEncontrados = () => {
//     return (
//       <div>
//         <p>Contrato: {usuarioData.Celular}</p>
//         <p>Nombre: {usuarioData.Nombre} {usuarioData.ApellidoP} {usuarioData.ApellidoM}</p>
//         <p>Localidad: {usuarioData.IdZona}</p>
//         <p>Plan contratado: Izzi Basic $150</p>
//       </div>
//     );
//   };

//   return (
//     <div className="client-container">
//       <div className="titulo-cliente">
//         <h2>Cliente</h2>
//       </div>
//       <div className="client-div">
//         <div className="solucionTarjetaProblema">
//           <TextField id="outlined-basic" label="Solucion" variant="outlined" ref={entradaCliente} />
//           <button onClick={consultarCliente()}>Entregar</button>
//         </div>
//         {usuarioData ? 
//         <div className="historial-div">
//         <DatosClienteEncontrados /> 
//         <FolderList />
//       </div>
//       : <h1>NO HUBO CLIENTE</h1>}
//       </div>
//       {/* <div className="historial-div">
//         <FolderList />
//       </div> */}
//     </div>
//   );
// };

// export default Client;


////////////

import { useUserContext } from "../Providers/AmazonContext";
import "../styles/client.css";
import FolderList from "./HistorialCliente";
import TextField from "@mui/material/TextField";
import { useState, useCallback, useEffect, useRef } from "react";



const Client = (props) => {

  const [usuario,,datosCliente,] = useUserContext();

  const [url, setUrl] = useState(null); // Valor inicial para url


const descargar = useCallback(async () => {
    try {
      console.log("Descargando datos");
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('La solicitud no pudo completarse con éxito');
      }
      const data = await response.json();
      datosCliente({Nombre: data.Nombre, ApellidoP: data.ApellidoP, ApellidoM: data.ApellidoM, IdZona: data.IdZona});
    } catch (error) {
        console.log(error);
    }
}, [url]);

  //Mejorar lógica
  //PRegunat por el useCallBack

  useEffect(() => {
    descargar();
  }, [descargar]);

  useEffect(() => {
    if(usuario.Celular){
      // setUrl(`http://44.209.22.101:8080/cliente/consultarCliente/${usuario.Celular}`);
      setUrl(`http://localhost:8080/cliente/consultarCliente/${usuario.Celular}`);
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
        <div className="solucionTarjetaProblema">
        </div>
        {usuario.Nombre ? 
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
