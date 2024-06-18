// Author: Joahan Garcia
// Display the client details 

import { useUserContext } from "../providers/AmazonContext";
import "../styles/client.css";
import ClientHistory from "./ClientHistory";
import { ComputeAge } from "../logic/ComputeAge";
import { useState, useCallback, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const Client = (props) => {
  const [reportView, setReportView] = useState(false);
  const [clientReports, setClientReports] = useState();
  const [user, , userData, ,] = useUserContext();
  const [dataUrl, setDataUrl] = useState(null);
  const [reportsUrl, setReportsUrl] = useState(null);
  let agent = JSON.parse(window.localStorage.getItem('Agent'));

  const downloadClientData = useCallback(async () => {
    try {
      console.log("Downloading Client Data");
      const response = await fetch(dataUrl, {
        headers: { Authorization: `Bearer ${agent.Token}` },
      });
      if (!response.ok) {
        throw new Error("The request could not be completed successfully");
      }
      const data = await response.json();
      userData({
        Nombre: data.Nombre,
        ApellidoP: data.ApellidoP,
        ApellidoM: data.ApellidoM,
        Sexo: data.Sexo,
        Correo: data.Correo,
        FechaNac: data.FechaNac,
        IdZona: data.IdZona,
        Zona: data.Zona,
      });
    } catch (error) {
      console.log(error);
    }
  }, [dataUrl, agent.Token, userData]);

  const downloadClientReports = useCallback(async () => {
    try {
      console.log("Downloading Client Reports");
      const response = await fetch(reportsUrl, {
        headers: { Authorization: `Bearer ${agent.Token}` },
      });
      if (!response.ok) {
        throw new Error("Request could not be completed successfully");
      }
      const data = await response.json();
      console.log(data);
      setClientReports(data);
    } catch (error) {
      console.log(error);
    }
  }, [reportsUrl, agent.Token]);

  useEffect(() => {
    downloadClientData();
    downloadClientReports();
  }, [downloadClientData, downloadClientReports]);

  useEffect(() => {
    if (user.Celular) {
      setDataUrl(
        `http://44.209.22.101:8080/cliente/consultarCliente/${user.Celular}`
      );
      setReportsUrl(
        `http://44.209.22.101:8080/reporte/consultarReportesPersonal/${user.Celular}`
      );
    }
  }, [user.Celular]);

  const ClientDataFounded = () => {
    return (
      <div className="completeClient">
        <div className="dataClient">
          <AccountCircleIcon />
          <div className="client">
            <p className="labelName">{`${user.Nombre} ${user.ApellidoP} ${user.ApellidoM}`}</p>
            <p className="info">{`${user.Sexo}, ${ComputeAge(
              user.FechaNac
            )} years`}</p>
          </div>
        </div>
        <div className="dataClient">
          <CallIcon />
          <div className="client">
            <p className="label">Phone number</p>
            <p className="info">{user.Celular}</p>
          </div>
        </div>
        <div className="dataClient">
          <EmailIcon />
          <div className="client">
            <p className="label">Email</p>
            <p className="info">{user.Correo}</p>
          </div>
        </div>
        <div className="dataClient">
          <PlaceIcon />
          <div className="client">
            <p className="label">Location</p>
            <p className="info">{user.Zona}</p>
          </div>
        </div>
        <div className="dataClient">
          <ReceiptLongIcon />
          <div className="client">
            <p className="label">
              {user.Paquetes > 1 ? "Current Plan" : "Current Plans"}
            </p>
            <p className="info">Izzi Basic $150</p>
            {user.Paquetes.map((paquete, index) => (
              <p key={index} className="info">
                {paquete.Nombre}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="client">
      <div className="clientTitle">
        Customer details
        <button
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            background: "transparent",
          }}
          onClick={() => {
            setReportView(!reportView);
          }}
        >
          {reportView ? "Data" : "Previous issues"}
        </button>
      </div>
      <div className="clientDiv">
        <div className="solutionCardProblem"></div>
        {user.Nombre && (
          <div>
            {!reportView ? (
              <ClientDataFounded />
            ) : (
              <ClientHistory clientHistory={clientReports} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Client;
