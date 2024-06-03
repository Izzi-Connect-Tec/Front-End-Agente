// import React, { useEffect, useState } from 'react';
// const { config } = require("dotenv");
// // import 'dotenv/config'
// // require('dotenv').config()
// const {
//   ConnectContactLensClient,
//   ListRealtimeContactAnalysisSegmentsCommand,
// } = require("@aws-sdk/client-connect-contact-lens");



// // const ActiveCalls = () => {
  

//   export async function getActiveCalls() {

//     config();

//     // console.log(process.env)

    
  
//     const client = new ConnectContactLensClient({
//       region: "us-east-1" ,
//       credentials: {
//           accessKeyId: "AKIA5FTZFDNFT7U3K5FU",
//           secretAccessKey: "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",
//       },
//     });

    

//     const input = {
//       InstanceId: "arn:aws:connect:us-east-1:905418447691:instance/cbfa02b8-09e5-4774-8576-45965720fb02",
//       ContactId: "7492b2b1-e08f-40ef-90f8-438206502fd8" // Pedirlo de la base de datos
//       //MaxResults: 10,
//       //NextToken: "string"
//     }
    
//     const command = new ListRealtimeContactAnalysisSegmentsCommand(input);


//     try{
//       const response = await client.send(command);
//       console.log(response)
//       // for (const segment of response.Segments) {
//       //   console.log(`${segment.Transcript.ParticipantRole}: "${segment.Transcript.Content}" -> ${segment.Transcript.Sentiment}`);
//       // }
//     } catch (error) {
//       console.error("Error getting transcript:", error);
//     }
//   }




// //   const [segments, setSegments] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const getActiveCalls = async () => {
// //       const client = new ConnectContactLensClient({ region: 'us-east-1' });
// //       const input = {
// //         InstanceId: 'arn:aws:connect:us-east-1:905418447691:instance/cbfa02b8-09e5-4774-8576-45965720fb02',
// //         ContactId: '7492b2b1-e08f-40ef-90f8-438206502fd8', // Pedirlo de la base de datos
// //       };

// //       const command = new ListRealtimeContactAnalysisSegmentsCommand(input);
// //       try {
// //         const response = await client.send(command);
// //         setSegments(response.Segments);
// //       } catch (error) {
// //         console.error('Error getting transcript:', error);
// //         setError(error);
// //       }
// //     };

// //     getActiveCalls();
// //   }, []); // El array vacío significa que esto se ejecuta una vez al montar el componente

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>Active Calls</h1>
// //       <ul>
// //         {segments.map((segment, index) => (
// //           <li key={index}>
// //             {segment.Transcript.ParticipantRole}: "{segment.Transcript.Content}" - {segment.Transcript.Sentiment}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };
// // }

// // export default ActiveCalls;

  