/* Author: Giovanna Lorena Delgado Mendoza*/
/*Stats/rating window bottom cards*/

import "../styles/bottomCards.css";
import { useState, useEffect } from "react";

const BottomCards = () => {
  const [agentWithBestRating, setAgentWithBestRating] = useState("Cargando...");
  const [agentWithMostCalls, setAgentWithMostCalls] = useState("Cargando...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("urllll")
      .then((response) => response.json())
      .then((data) => {
        setAgentWithBestRating(data.name);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
        setLoading(false);
      });

    fetch("urlll")
      .then((response) => response.json())
      .then((data) => {
        setAgentWithMostCalls(data.name);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="customContainer">
      <div className="customRow">
        <div className="customCol">
          <div className="customCard cardPrimary">
            <div className="customCardHeader">Best rated agent</div>
            <div className="customCardBody">
              <h5 className="customCardTitle">{agentWithBestRating}</h5>
            </div>
          </div>
        </div>
        <div className="customCol">
          <div className="customCard cardSecondary">
            <div className="customCardHeader">Agent with most calls</div>
            <div className="customCardBody">
              <h5 className="customCardTitle">{agentWithMostCalls}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCards;
