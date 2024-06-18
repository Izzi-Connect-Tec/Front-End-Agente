import Message from "./Message";
import { useState, useEffect, useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/chatbox.css";
import { useCallContext } from "../providers/CallContext";

const Chatbox = (props) => {

  let agent = JSON.parse(window.localStorage.getItem('Agent'));

  const [, , , changeCallSentiment] = useCallContext();

  const endRef = useRef(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [lastCustomerSentiment, setLastCustomerSentiment] = useState(null);

  useEffect(() => {
    const fetchMessages = () => {

      let config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${agent.Token}`
        }, 
      }

      fetch(`http://44.209.22.101:8080/connect/sentiment/${props.id}`, config)
        .then(console.log("TOKEN", agent.Token))
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMessages(data);
          const lastCustomerMessage = [...data]
            .reverse()
            .find((msg) => msg.role === "CUSTOMER");
          if (lastCustomerMessage) {
            changeCallSentiment({
              SentimientoLlamada: lastCustomerMessage.sentiment,
            });
            setLastCustomerSentiment(lastCustomerMessage.sentiment);
          }
        })
        .then(console.log(messages))
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 2500);

    return () => clearInterval(intervalId);
  }, [agent.Token, changeCallSentiment, messages, props.id]);

  const updateSentiment = useCallback(async () => {
    if (lastCustomerSentiment) {
      try {
        const datos = {
          id: props.id,
          sentiment: lastCustomerSentiment,
        };
        let config = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${agent.Token}`,
          },
          body: JSON.stringify(datos),
        };
        let res = await fetch(
          "http://44.209.22.101:8080/llamada/cambiarSentiment",
          config
        );
        if (!res.ok) {
          throw new Error("The request could not be completed successfully");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [lastCustomerSentiment, agent.Token, props.id]);

  useEffect(() => {
    updateSentiment();
  }, [updateSentiment]);

  return (
    <div className="chatboxContainer">
      <div className="transcriptionTitle">Transcript</div>
      <div className="chatboxCenter">
        {messages.map((mensaje) => (
          <Message
            key={uuidv4()}
            name={mensaje.role}
            time={mensaje.startTime}
            content={mensaje.content}
            emotion={mensaje.sentiment}
            title={mensaje.role}
          />
        ))}
        <div ref={endRef}></div>
      </div>
    </div>
  );
};

export default Chatbox;
