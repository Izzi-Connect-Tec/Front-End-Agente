import Button from '@mui/material/Button';
import lottie from "lottie-web";
import DeleteIcon from '@mui/icons-material/Delete';
import { Element, defineElement } from "@lordicon/element";
import React, { useRef, useEffect } from 'react';
import "../styles/prueba.css"


const DeleteButton = () => {


    class CallPhone {
        player;
        element;
        targetElement;

      
        constructor(player, element, targetElement) {
          this.player = player;
          this.element = element;
          this.targetElement = targetElement;
      
          this.onMouseEnter = this.onMouseEnter.bind(this);
          this.onMouseLeave = this.onMouseLeave.bind(this);
        }
      
        onConnected() {
          this.targetElement.addEventListener('mouseenter', this.onMouseEnter);
          this.targetElement.addEventListener('mouseleave', this.onMouseLeave);
        }
      
        onDisconnected() {
          this.targetElement.removeEventListener('mouseenter', this.onMouseEnter);
          this.targetElement.removeEventListener('mouseleave', this.onMouseLeave);
        }
      
        onReady() {
          this.player.playFromBeginning();
        }
      

      
        onMouseEnter() {
          if (this.empty) {
            this.player.state = 'hover-trash-empty';
          } else {
            this.player.state = 'hover-trash-full';
          }
      
          this.player.playFromBeginning();
        }
      
        onMouseLeave() {}
      
        trashIntro() {
          this.player.state = 'in-trash-empty';
          this.empty = true;
          this.player.playFromBeginning();
        }
      
        trashFill() {
          this.player.state = 'morph-trash-full';
          this.empty = false;
          this.player.playFromBeginning();
        }
      
        trashErase() {
          this.player.state = 'morph-trash-full-to-empty';
          this.empty = true;
          this.player.playFromBeginning();
        }
      }

    Element.defineTrigger('trash', CallPhone);

    

    defineElement(lottie.loadAnimation);

    const element = document.querySelector("lord-icon");

    element.addEventListener('ready', () => {
        document.getElementById('trash-intro').addEventListener('click', (e) => {
          e.preventDefault();
          element.triggerInstance.trashIntro();
        });
      
        document.getElementById('trash-fill').addEventListener('click', (e) => {
          e.preventDefault();
          element.triggerInstance.trashFill();
        });
      
        document.getElementById('trash-erase').addEventListener('click', (e) => {
          e.preventDefault();
          element.triggerInstance.trashErase();
        });
      });

//     // the player is ready
// element.addEventListener("ready", () => {
//     element.playerInstance.play();
// });


    // const iconRef = useRef(null);
    // const lottieInstance = useRef(null);
  
    // useEffect(() => {
    //   lottieInstance.current = lottie.loadAnimation({
    //     container: iconRef.current,
    //     renderer: 'svg',
    //     loop: false,
    //     autoplay: false,
    //     path: 'https://cdn.lordicon.com/rsvfayfn.json', // Asegúrate de que la URL es la correcta
    //   });
  
    //   const handleMouseEnter = () => {
    //     lottieInstance.current.goToFirstFrame();
    //   };
  
    //   const handleMouseLeave = () => {
    //     lottieInstance.current.stop();
    //   };
  
    //   const buttonElement = iconRef.current.parentNode.parentNode;
    //   buttonElement.addEventListener('mouseenter', handleMouseEnter);
    //   buttonElement.addEventListener('mouseleave', handleMouseLeave);
  
    //   return () => {
    //     buttonElement.removeEventListener('mouseenter', handleMouseEnter);
    //     buttonElement.removeEventListener('mouseleave', handleMouseLeave);
    //   };
    // }, []);
  
    return (
      <div className="button-container">
        <Button
          variant="outlined"
          startIcon={
            <lord-icon
            // ref={iconRef}
            style={{
              width: 24,
              height: 24,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            ></lord-icon>
          }
        >
          Delete
        </Button>

        <lord-icon
  class="clickable"
  trigger="trash"
  src="https://cdn.lordicon.com/rsvfayfn.json"
></lord-icon>
      </div>
    );
  };
  
  export default DeleteButton;