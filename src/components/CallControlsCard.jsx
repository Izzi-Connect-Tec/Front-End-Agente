import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Button from "@mui/material/Button";
import "../styles/callControlsCard.css";
import {
  acceptCall,
  rejectCall,
  muteAgent,
  unmuteAgent,
  holdCall,
  resumeCall,
  hangUpCall,
  clearCall,
} from "../logic/CallButtons.js";
import Mute from "./Mute";
import { React, useEffect, useState } from "react";
import ExternOptions from "./ExternOptions";
import Timer from "./Timer";
import { useCallControlContext } from "../providers/CallControlContext.jsx";
import { keyframes } from "@emotion/react";

export default function CallControlsCard() {
  const rotar = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(-360deg);
}
`;

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "100vw",
    height: 78,
    ...theme.typography.body2,
    position: "relative",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",

    "&::before": {
      content: `""`,
      position: "absolute",
      height: "800%",
      width: "900%",
      backgroundImage: incomingCall
        ? "conic-gradient(green 10deg, transparent 120deg)"
        : null,
      animation: incomingCall ? `${rotar} 2s linear infinite` : null,
    },

    "&::after": {
      content: incomingCall && `""`,
      position: incomingCall && "absolute",
      width: incomingCall && 455,
      height: incomingCall && 70,
      backgroundColor: incomingCall && "white",
      borderRadius: incomingCall && "2%",
    },
  }));

  defineElement(lottie.loadAnimation);

  const [hold, setHold] = useState(false);

  const holdLlamada = () => {
    if (hold) {
      resumeCall();
      setHold(!hold);
    } else {
      holdCall();
      setHold(!hold);
    }
  };

  const [mute, setMute] = useState(false);

  const [
    incomingCall,
    changeStateIncomingCall,
    isCall,
    changeStateIsCall,
    callControl,
    activeCallControl,
    closeContact,
    controlCloseContact,
  ] = useCallControlContext();

  const [animate, setAnimate] = useState("");

  useEffect(() => {
    if (incomingCall === false) {
      setAnimate("noActiveCall");
    }

    if (incomingCall === true) {
      setAnimate("activeCallIncoming");
    }

    if (callControl === true) {
      setAnimate("callButtons");
    }

    if (closeContact === true) {
      setAnimate("closeActiveContact");
    }
  }, [callControl, incomingCall, closeContact]);

  const variants = {
    noActiveCall: { opacity: 1, x: 0, width: 100 },
    activeCallIncoming: { opacity: 1, width: 500 },
    callButtons: { opacity: 1, width: "100%" },
    closeActiveContact: { opacity: 1, width: "100%" },
  };

  function HoldFunction() {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            className={hold ? "hold hidden" : "hold"}
            variant="outlined"
            onClick={holdLlamada}
            startIcon={
              <lord-icon
                src="https://cdn.lordicon.com/ptvmrrcc.json"
                trigger="hover"
                target=".hold"
                class="current-color"
              />
            }
            sx={{
              color: "black",
              "&:hover": {
                color: "#ec6907",
              },
              "&.hidden": {
                opacity: 0,
              },
              transition: "opacity 0.5s ease",
            }}
          >
            Hold
          </Button>
        </motion.div>
      </AnimatePresence>
    );
  }

  const ResumeFunction = () => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button
            className={hold ? "resume" : "resume hidden"}
            variant="outlined"
            onClick={holdLlamada}
            startIcon={
              <lord-icon
                src="https://cdn.lordicon.com/aklfruoc.json"
                trigger="hover"
                target=".resume"
                class="current-color"
              />
            }
            sx={{
              color: "black",
              "&:hover": {
                color: "green",
              },
              "&.hidden": {
                opacity: 0,
              },
              transition: "opacity 0.5s ease",
            }}
          >
            Resume
          </Button>
        </motion.div>
      </AnimatePresence>
    );
  };

  const IncomingCall = () => {
    const acceptCallFun = () => {
      acceptCall();
      changeStateIsCall();
      changeStateIncomingCall();
      activeCallControl();
    };

    const rejectCallFun = () => {
      rejectCall();
      changeStateIncomingCall();
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.25 }}
        className="callControllers"
        style={{
          position: "relative",
          height: "75%",
          width: "90%",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <lord-icon
          src="https://cdn.lordicon.com/rsvfayfn.json"
          trigger="loop"
          target=".block"
          class="current-color"
        />
        <div style={{ fontSize: "17px", fontWeight: "bold" }}>
          Incoming call
        </div>
        {/* //Accept call */}
        <Button
          className="block"
          variant="contained"
          onClick={acceptCallFun}
          startIcon={
            <lord-icon
              src="https://cdn.lordicon.com/gkznqdvu.json"
              trigger="hover"
              target=".block"
              class="current-color"
            />
          }
          sx={{
            backgroundColor: "white",
            color: "green",
            border: "solid green",
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
        >
          Acept
        </Button>
        {/* //Reject Call */}
        <Button
          className="dismiss"
          variant="contained"
          onClick={rejectCallFun}
          startIcon={
            <lord-icon
              src="https://cdn.lordicon.com/ncpuzezu.json"
              trigger="hover"
              target=".dismiss"
              class="current-color"
            />
          }
          sx={{
            backgroundColor: "white",
            color: "red",
            border: "solid red",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          Decline
        </Button>
      </motion.div>
    );
  };

  const DuringCall = () => {
    const endCall = () => {
      hangUpCall();
      activeCallControl();
      controlCloseContact();
    };

    const muteCall = () => {
      if (mute) {
        unmuteAgent();
        setMute(!mute);
      } else {
        muteAgent();
        setMute(!mute);
      }
    };

    return (
      <div className="callControllers">
        <Timer />
        <Button
          className="block"
          variant="outlined"
          onClick={muteCall}
          startIcon={<Mute lineVisible={mute} />}
          sx={{
            color: mute ? "red" : "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          {mute ? "Unmute" : "Mute"}
        </Button>

        {hold ? <ResumeFunction /> : <HoldFunction />}

        <Button
          className="block"
          variant="outlined"
          startIcon={
            <lord-icon
              src="https://cdn.lordicon.com/azurzetm.json"
              trigger="hover"
              target=".block"
              class="current-color"
            />
          }
          sx={{
            color: "black",
            "&:hover": {
              color: "blue",
            },
          }}
        >
          Dialpad
        </Button>

        <Button
          className="dismiss"
          variant="outlined"
          onClick={endCall}
          startIcon={
            <lord-icon
              src="https://cdn.lordicon.com/cnsdvotv.json"
              trigger="hover"
              target=".dismiss"
              class="current-color"
            />
          }
          sx={{
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          End Call
        </Button>

        <ExternOptions />
      </div>
    );
  };

  const CloseContact = () => {

    const decline = () => {
      clearCall()
      controlCloseContact();
    }

    const endContact = () => {
      clearCall();
      controlCloseContact();
      changeStateIsCall();
    };

    return (
      <div className="callControllers">
        <Timer />

        <Button
          className="block"
          variant="outlined"
          onClick={isCall ? endContact : decline}
          startIcon={
            <lord-icon
              src="https://cdn.lordicon.com/ysopsmtv.json"
              trigger="hover"
              target=".block"
              class="current-color"
            />
          }
          sx={{
            color: "black",
            "&:hover": {
              color: "blue",
            },
          }}
        >
          Close Contact
        </Button>
      </div>
    );
  };

  return (
    <section>
      <motion.div animate={animate} variants={variants}>
        <Stack
          direction={{ xs: "column", s: "row", md: "row" }}
          useFlexGap="wrap"
          spacing={{ xs: 3, s: 3, md: 3 }}
          className={incomingCall ? "incomingContent" : null}
        >
          <DemoPaper>
            {incomingCall ? (
              <IncomingCall />
            ) : (
              <lord-icon src="https://cdn.lordicon.com/rsvfayfn.json" />
            )}
            {callControl && <DuringCall />}
            {closeContact && <CloseContact />}
          </DemoPaper>
        </Stack>
      </motion.div>
    </section>
  );
}
