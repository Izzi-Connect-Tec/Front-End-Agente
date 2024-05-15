// import React, { useEffect, useRef } from 'react';
// import "amazon-connect-streams";

// const AmazonConnectCCP = () => {
  
//   const containerDiv = useRef(null);

//   useEffect(() => {
    
//     const script = document.createElement('script');
//     script.src = "https://izzibucket.s3.amazonaws.com/connect-streams-min.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//         const instanceURL = "https://izzi-team.my.connect.aws/ccp-v2/";
//         connect.core.initCCP(containerDiv.current, {
//           ccpUrl: instanceURL,
//           loginPopup: true,
//           loginPopupAutoClose: true,
//           loginOptions: {
//             autoClose: true,
//             height: 600,
//             width: 400,
//             top: 0,
//             left: 0,
//           },
//           region: "us-east-1",
//           softphone: {
//             allowFramedSoftphone: true,
//             disableRingtone: false,
//             ringtoneUrl: "./ringtone.mp3",
//           },
//           pageOptions: {
//             enableAudioDeviceSettings: false,
//             enablePhoneTypeSettings: true,
//           },
//           ccpAckTimeout: 5000,
//           ccpSynTimeout: 3000,
//           ccpLoadTimeout: 10000,
//         });
//     };

//     // return () => {
//     //   document.body.removeChild(script);
//     // };
//   }, []);

//   return <div ref={containerDiv} style={{ width: '300px', height: '400px' }} />;
// };

// export default AmazonConnectCCP;

///////////

import "amazon-connect-streams";
import { useEffect, React } from "react";


const EmbedConnect = (props) => {
  //Variables to assing the call id and the status of the call
  

  // Code to embed the Amazon Connect CCP
  useEffect(() => {
    const container = document.getElementById("ccp");
    // Initialize CCP
    // eslint-disable-next-line no-undef
    connect.core.initCCP(container, {
      ccpUrl: "https://izzi-team.my.connect.aws/ccp-v2/", // REQUIRED
      loginPopup: true, // optional, defaults to `true`
      loginPopupAutoClose: true, // optional, defaults to `false`
      loginOptions: {
        // optional, if provided opens login in new window
        autoClose: true, // optional, defaults to `false`
        height: 600, // optional, defaults to 578
        width: 400, // optional, defaults to 433
        top: 0, // optional, defaults to 0
        left: 0, // optional, defaults to 0
      },
      region: "us-west-2", // REQUIRED for `CHAT`, optional otherwise
      softphone: {
        // optional, defaults below apply if not provided
        allowFramedSoftphone: true, // optional, defaults to false
        disableRingtone: false, // optional, defaults to false
      },
      pageOptions: {
        //optional
        enableAudioDeviceSettings: true, //optional, defaults to 'false'
        enablePhoneTypeSettings: true, //optional, defaults to 'true'
      },
      ccpAckTimeout: 5000, //optional, defaults to 3000 (ms)
      ccpSynTimeout: 3000, //optional, defaults to 1000 (ms)
      ccpLoadTimeout: 10000, //optional, defaults to 5000 (ms)
    });

    // Code to be executed once a call starts
    // eslint-disable-next-line no-undef
    // connect.contact(function (contact) {
    //   contact.onConnected(async function (contact) {
    //     cid = contact.getContactId();
    //     console.log(cid);
    //     var attributeMap = contact.getAttributes();
    //     console.log(attributeMap);
    //   });
    // });

    
    
  }, []);

  return <div id="ccp" style={{ width: "400px", height: "450px" }}></div>;
};

export default EmbedConnect;