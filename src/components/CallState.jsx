import "../styles/callState.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import { useCallContext } from "../providers/CallContext";

const CallState = () => {
  const [call, , ,] = useCallContext();

  return (
    <>
      {call.IdLlamada && (
        <section className="completeCall">
          <div className="callTitle">Call details</div>
          <div className="callRow">
            <div className="dataClient" id="e3">
              <div className="icon">
                <EditNoteOutlinedIcon />
              </div>
              <div className="client">
                <p className="label">Client Issue</p>
                <p className="info">{call.TipoLlamada}</p>
              </div>
            </div>
            <div className="dataClient" id="e4">
              <div className="icon">
                <HelpOutlineIcon />
              </div>
              <div className="client">
                <p className="callLabel">Notes</p>
                <p className="info">{call.DescripcionLlamada}</p>
              </div>
            </div>
          </div>

          <div className="callRow">
            <div className="dataClient" id="e5">
              <div className="icon">
                <SentimentNeutralOutlinedIcon />
              </div>
              <div className="client">
                <p className="callLabel">Call Sentiment</p>

                {call.SentimientoLlamada === "POSITIVE" && (
                  <LinearProgress
                    style={{ height: 10, borderRadius: 2 }}
                    color="success"
                  />
                )}

                {call.SentimientoLlamada === "NEUTRAL" && (
                  <LinearProgress style={{ height: 10, borderRadius: 2 }} />
                )}

                {call.SentimientoLlamada === "NEGATIVE" && (
                  <LinearProgress
                    style={{ height: 10, borderRadius: 2 }}
                    color="error"
                  />
                )}

                <p className="callInfo">{call.SentimientoLlamada}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallState;
