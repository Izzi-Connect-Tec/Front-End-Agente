// Author: Joahan Garcia, Maximiliano Lecona, Karla Cruz, Giovanna Lorena Delgado Mendoza
// Embed the Amazon Connect CCP

import "amazon-connect-streams";
import { useEffect, React, useState, useCallback } from "react";
import { useUserContext } from "../providers/AmazonContext";
import { useCallContext } from "../providers/CallContext";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { useCallControlContext } from "../providers/CallControlContext";

const EmbedConnect = (props) => {
  const [, changeStateIncomingCall,,,,,,controlCloseContact] = useCallControlContext();

  // Initialize times of call.
  const [callStartTime, setcallStartTime] = useState(null);
  const [callEndTime, setcallEndTime] = useState(null);
  const [duration, setDuration] = useState(null);

  // Set the duration of the call when the call ends.
  useEffect(() => {
    if (callStartTime && callEndTime) {
      console.log("I'm in the duration changing function!");
      setDuration(formatDuration(callEndTime - callStartTime));
    }
  }, [callStartTime, callEndTime]);

  // Format call duration into a legible format.
  const formatDuration = (duration) => {
    if (duration === null) return "Duration not available";
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const pad = (num) => String(num).padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  //Agent
  let agent = JSON.parse(window.localStorage.getItem('Agent'));

  //Call
  const [call, callData, restartCall] = useCallContext();
  const [stateCall, setStateCall] = useState(false);

  //Client
  const [, userId, , restartUser] = useUserContext();

  const updateCall = useCallback(async () => {
    try {
      const callData = { id: call.IdLlamada, IdEmpleado: agent.IdEmpleado };
      console.log(callData);
      let config = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${agent.Token}`,
        },
        body: JSON.stringify(callData),
      };
      let res = await fetch(
        "http://44.209.22.101:8080/llamada/actualizarLlamada",
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, [call.IdLlamada, agent.IdEmpleado, agent.Token]);

  const updateEndedCall = useCallback(async () => {
    if (call.IdLlamada && duration) {
      console.log("Updating ended call.", duration);
      try {
        const endedCallData = {
          id: call.IdLlamada,
          duracion: duration,
          estado: false,
        };
        console.log("Ended call data: ", endedCallData);
        let config = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${agent.Token}`,
          },
          body: JSON.stringify(endedCallData),
        };
        let res = await fetch(
          "http://44.209.22.101:8080/llamada/actualizarLlamadaFinalizada",
          config
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }, [call.IdLlamada, duration, agent.Token]);

  // Variables to assing the call id and the status of the call
  // Code to embed the Amazon Connect CCP
  useEffect(() => {
    const container = document.getElementById("ccp");
    // Initialize CCP
    // eslint-disable-next-line no-undef
    connect.core.initCCP(container, {
      ccpUrl: "https://izzi-team.my.connect.aws/ccp-v2/",
      loginPopup: true,
      loginPopupAutoClose: true, 
      loginOptions: {
        autoClose: true,
        height: 600, 
        width: 400,
        top: 0,
        left: 0,
      },
      region: "us-west-2",
      softphone: {
        allowFramedSoftphone: true,
        disableRingtone: false,
        ringtoneUrl:
          "https://joahanbucket.s3.amazonaws.com/Li%CC%81nea+del+Perreo-Uzielito+Mix%2C+Yeri+Mua+%2C+El+Jordan+23%2C+DJ+Kiire(Video+Oficial)+(320)+(mp3cut.net).mp3", // optional, defaults to CCP’s default ringtone if a falsy value is set
      },
      pageOptions: {
        enableAudioDeviceSettings: true,
        enablePhoneTypeSettings: true,
      },
      ccpAckTimeout: 5000,
      ccpSynTimeout: 3000,
      ccpLoadTimeout: 10000,
    });

    // Code to be executed once a call starts
    // eslint-disable-next-line no-undef
    connect.contact(function (contact) {
      contact.onIncoming(function (contact) {
        console.log("Oncoming Call Started");
      });

      contact.onConnecting(function (contact) {
        changeStateIncomingCall();
        console.log("On connecting Call Started");
      });

      contact.onConnected(async function (contact) {
        setStateCall(true);
        var attributeMap = contact.getAttributes();
        console.log(attributeMap);
        callData({
          IdLlamada: attributeMap.Call.value,
          TipoLlamada: attributeMap.CurrentConcept.value,
          DescripcionLlamada: attributeMap.CurrentNotes.value,
        });
        userId(attributeMap.Tel.value);
        setcallStartTime(new Date().getTime());
      });

      contact.onEnded(function (contact) {
        setcallEndTime(new Date().getTime());
      });

      contact.onDestroy(function(contact) { 
        setStateCall(false)
        });

        contact.onMissed(function(contact) { 
          controlCloseContact()
        });


    });

    // Global connect. 
    // eslint-disable-next-line no-undef
    connect.agent(function (agent) {
      var help = agent.getConfiguration().username;
      console.log(`AGENT : ${help}`);
    });
  }, [callData, changeStateIncomingCall, userId, controlCloseContact]);

  useEffect(() => {
    if (call.IdLlamada) {
      console.log("Updated call");
      updateCall();
    }
  }, [call, updateCall]);

  useEffect(() => {
    if (!stateCall && call.IdLlamada != null && duration != null) {
      console.log("Udated ended call");
      updateEndedCall();
      restartUser();
      restartCall();
      setcallStartTime(null);
      setcallEndTime(null);
      setDuration(null);
    }
  }, [stateCall, updateEndedCall, call.IdLlamada, duration, restartUser, restartCall]); 

  defineElement(lottie.loadAnimation);

  return (
    <section>
      <div id="ccp" style={{ display: "none" }} />
    </section>
  );
};

export default EmbedConnect;