import "../styles/chatbox.css";
import Message from "./Message";
import { useState, useEffect, useCallback, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../styles/sentiment.css"


const Chatbox = (props) => {

  const endRef = useRef(null)

  useEffect(() => {
      endRef.current?.scrollIntoView({behavior: "smooth"})
  }, [])

  const [messages, setMessages] = useState([]);
  const [lastCustomerSentiment, setLastCustomerSentiment] = useState(null);

  useEffect(() => {
    const fetchMessages = () => {
      fetch(`http://44.209.22.101:8080/connect/sentiment/${props.id}`)
        .then((response) => response.json())
        .then((data) => {
          setMessages(data);
          const lastCustomerMessage = [...data].reverse().find((msg) => msg.role === "CUSTOMER");
          if (lastCustomerMessage) {
            setLastCustomerSentiment(lastCustomerMessage.sentiment);
          }
    })
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 2500  );

    return () => clearInterval(intervalId);
  }, []);

  const updateSentiment = useCallback( async () => {
    try{
      const datos = {
        id: props.id,
        sentiment: lastCustomerSentiment
      }
      let config = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      }
      let res = await fetch("http://44.209.22.101:8080/llamada/cambiarSentiment", config) 
      if (!res.ok) {
        throw new Error('La solicitud no pudo completarse con éxito');
      }
    } catch (error){
      console.log(error)
    }
  }, [lastCustomerSentiment])

  useEffect(() => {
    updateSentiment();
  }, [updateSentiment])


  return (
    <div className="container">
      <div className="chatbox-header">
        {lastCustomerSentiment && <p>Último Sentimiento del Cliente: {lastCustomerSentiment}</p>}
      </div>

      <div className="center">
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
