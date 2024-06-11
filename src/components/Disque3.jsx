// import Button from '@mui/material/Button';
// import lottie from "lottie-web";
// import DeleteIcon from '@mui/icons-material/Delete';
// import { defineElement } from "@lordicon/element";
// import React, { useRef, useEffect } from 'react';
// import "../styles/prueba.css"


// const DeleteButton = () => {
//     const iconRef = useRef(null);
//     const lottieInstance = useRef(null);
  
//     useEffect(() => {
//       lottieInstance.current = lottie.loadAnimation({
//         container: iconRef.current,
//         renderer: 'svg',
//         loop: true,
//         autoplay: false,
//         path: 'https://cdn.lordicon.com/rsvfayfn.json', // Asegúrate de que la URL es la correcta
//       });
  
//       const handleMouseEnter = () => {
//         lottieInstance.current.goToAndPlay(0, true);
//       };
  
//       const handleMouseLeave = () => {
//         lottieInstance.current.stop();
//       };
  
//       const buttonElement = iconRef.current.parentNode.parentNode;
//       buttonElement.addEventListener('mouseenter', handleMouseEnter);
//       buttonElement.addEventListener('mouseleave', handleMouseLeave);
  
//       return () => {
//         buttonElement.removeEventListener('mouseenter', handleMouseEnter);
//         buttonElement.removeEventListener('mouseleave', handleMouseLeave);
//       };
//     }, []);
  
//     return (
//       <div className="button-container">
//         <Button
//           variant="outlined"
//           startIcon={
//             <lord-icon
//             ref={iconRef}
//             style={{
//               width: 24,
//               height: 24,
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             ></lord-icon>
//           }
//         >
//           Delete
//         </Button>
//       </div>
//     );
//   };
  
//   export default DeleteButton;