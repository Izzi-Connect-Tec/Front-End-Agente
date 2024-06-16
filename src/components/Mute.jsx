import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
// import { FaMicrophone } from 'react-icons/fa';
import { CiMicrophoneOn } from "react-icons/ci";
import '../styles/prueba.css'; // Asegúrate de tener este archivo para los estilos CSS



const Mute = ({ lineVisible }) => {
  
  

  const lineAnimation = useSpring({
    height: lineVisible ? 40 : 0,
    width: lineVisible ? 3 : 0,
    config: {
      duration: 200,
      easing: (t) => t, // Puedes personalizar la función de easing
    },
  });


  return (
    <div className="containerMute">
      <div className="square"  style={{ color: lineVisible ? 'red' : 'black' }}>
        <div className="dummyCon">
          <CiMicrophoneOn  className="image" size={35} color={lineVisible ? 'red' : 'black'}  />
          <animated.div style={{ ...lineAnimation, backgroundColor: 'red', position: 'absolute', top: '-20px', left: 0 }} />
        </div>
      </div>
    </div>
  );
};

export default Mute;

