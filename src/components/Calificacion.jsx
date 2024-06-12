// import { useState, useEffect } from 'react';
// import '../styles/calificacion.css';
// import Card from 'react-bootstrap/Card';
// import StarRating from './StarRating';
// import ProfilePhoto from './ProfilePicture'; 
// import izziImage from '../elements/izzi.jpeg';
// import Charts from './Charts';
// import Header from './Header';

// const Calificacion = () => {
//   const [data, setData] = useState([]);
//   const [durationData, setDurationData] = useState([]);

//   useEffect(() => {
//     // para hacer fetch
//     setData([
//       { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
//       { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
//       { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
//       { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } 
      
//     ]);

//     setDurationData([
//       { month: 'Enero', duration: 5 },
//       { month: 'Febrero', duration: 6 },
//       { month: 'Marzo', duration: 7 },
//       { month: 'Abril', duration: 5 },
//       { month: 'Mayo', duration: 6 },
//     ]);
//   }, []);

//   const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];
//   const profilePhotoUrl = izziImage;

//   return (
//     <div className="calificacion-page">
//       <Header />
//       <div className="calificacion-content">
//         <div className="profile-container">
//           <ProfilePhoto photoUrl={profilePhotoUrl} />
//           <div className="orange-card-container">
//             <Card
//               style={{ backgroundColor: colors[3] }}
//               className="card mb-2 orange-card"
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{data[3]?.title}</div>
//                   <div className="card-value">{data[3]?.value}</div>
//                 </div>
//                 <div className="card-rank">{data[3]?.rank}</div> 
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//         <div className="card-container">
//           {data.slice(0, 3).map(({ title, value, rank }, index) => (
//             <Card
//               key={index}
//               style={{ backgroundColor: colors[index] }}
//               className={`card mb-2 ${index === 3 ? 'blue-card' : ''} ${index < 3 ? 'colored-card' : ''}`}
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{title}</div>
//                   {index === 0 ? ( 
//                     <div className="card-value">
//                       <StarRating rating={value} />
//                     </div>
//                   ) : (
//                     <div className="card-value">{value}</div>
//                   )}
//                 </div>
//                 <div className="card-rank">{rank}</div> 
                
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//         <div className="chart-container">
//           <Charts agentData={data.slice(0, 3)} durationData={durationData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calificacion;

//connombre del agente sin bootstrap
// import { useState, useEffect } from 'react';
// import '../styles/calificacion.css';
// import Card from 'react-bootstrap/Card';
// import StarRating from './StarRating';
// import ProfilePhoto from './ProfilePicture'; 
// import izziImage from '../elements/izzi.jpeg';
// import Charts from './Charts';
// import Header from './Header';
// import AgentName from './AgentName'; // Importamos el nuevo componente

// const Calificacion = () => {
//   const [data, setData] = useState([]);
//   const [durationData, setDurationData] = useState([]);

//   useEffect(() => {
//     // para hacer fetch
//     setData([
//       { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
//       { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
//       { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
//       { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } 
      
//     ]);

//     setDurationData([
//       { month: 'Enero', duration: 5 },
//       { month: 'Febrero', duration: 6 },
//       { month: 'Marzo', duration: 7 },
//       { month: 'Abril', duration: 5 },
//       { month: 'Mayo', duration: 6 },
//     ]);
//   }, []);

//   const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];
//   const profilePhotoUrl = izziImage;

//   return (
//     <div className="calificacion-page">
//       <Header />
//       <div className="calificacion-content">
//         <div className="profile-container">
//           <ProfilePhoto photoUrl={profilePhotoUrl} />
//           <AgentName name="Lorena Delgado" /> {/* Incluimos el nuevo componente */}
//           <div className="orange-card-container">
//             <Card
//               style={{ backgroundColor: colors[3] }}
//               className="card mb-2 orange-card"
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{data[3]?.title}</div>
//                   <div className="card-value">{data[3]?.value}</div>
//                 </div>
//                 <div className="card-rank">{data[3]?.rank}</div> 
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//         <div className="card-container">
//           {data.slice(0, 3).map(({ title, value, rank }, index) => (
//             <Card
//               key={index}
//               style={{ backgroundColor: colors[index] }}
//               className={`card mb-2 ${index === 3 ? 'blue-card' : ''} ${index < 3 ? 'colored-card' : ''}`}
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{title}</div>
//                   {index === 0 ? ( 
//                     <div className="card-value">
//                       <StarRating rating={value} />
//                     </div>
//                   ) : (
//                     <div className="card-value">{value}</div>
//                   )}
//                 </div>
//                 <div className="card-rank">{rank}</div> 
                
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//         <div className="chart-container">
//           <Charts agentData={data.slice(0, 3)} durationData={durationData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calificacion;

//con bootstrap
// import { useState, useEffect } from 'react';
// import '../styles/calificacion.css';
// import Card from 'react-bootstrap/Card';
// import StarRating from './StarRating';
// import ProfilePhoto from './ProfilePicture'; 
// import izziImage from '../elements/izzi.jpeg';
// import Charts from './Charts';
// import Header from './Header';

// const Calificacion = () => {
//   const [data, setData] = useState([]);
//   const [durationData, setDurationData] = useState([]);

//   useEffect(() => {
//     // para hacer fetch
//     setData([
//       { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
//       { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
//       { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
//       { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } 
//     ]);

//     setDurationData([
//       { month: 'Enero', duration: 5 },
//       { month: 'Febrero', duration: 6 },
//       { month: 'Marzo', duration: 7 },
//       { month: 'Abril', duration: 5 },
//       { month: 'Mayo', duration: 6 },
//     ]);
//   }, []);

//   const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];
//   const profilePhotoUrl = izziImage;
//   const agentName = "Maximiliano Lecona";
//   const agentId = 1234;

//   return (
//     <div className="calificacion-page">
//       <Header />
//       <div className="calificacion-content">
//         <div className="profile-container">
//           <ProfilePhoto photoUrl={profilePhotoUrl} name={agentName} id={agentId} />
//           <div className="orange-card-container">
//             <Card
//               style={{ backgroundColor: colors[3] }}
//               className="card mb-2 orange-card"
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{data[3]?.title}</div>
//                   <div className="card-value">{data[3]?.value}</div>
//                 </div>
//                 <div className="card-rank">{data[3]?.rank}</div> 
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//         <div className="card-container">
//           {data.slice(0, 3).map(({ title, value, rank }, index) => (
//             <Card
//               key={index}
//               style={{ backgroundColor: colors[index] }}
//               className={`card mb-2 ${index === 3 ? 'blue-card' : ''} ${index < 3 ? 'colored-card' : ''}`}
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{title}</div>
//                   {index === 0 ? ( 
//                     <div className="card-value">
//                       <StarRating rating={value} />
//                     </div>
//                   ) : (
//                     <div className="card-value">{value}</div>
//                   )}
//                 </div>
//                 <div className="card-rank">{rank}</div> 
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//         <div className="chart-container">
//           <Charts agentData={data.slice(0, 3)} durationData={durationData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calificacion;

//acomodado con bootstrap
// import { useState, useEffect } from 'react';
// import '../styles/calificacion.css';
// import Card from 'react-bootstrap/Card';
// import StarRating from './StarRating';
// import ProfilePhoto from './ProfilePicture'; 
// import izziImage from '../elements/izzi.jpeg';
// import Charts from './Charts';
// import Header from './Header';

// const Calificacion = () => {
//   const [data, setData] = useState([]);
//   const [durationData, setDurationData] = useState([]);

//   useEffect(() => {
//     // para hacer fetch
//     setData([
//       { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
//       { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
//       { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
//       { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } 
//     ]);

//     setDurationData([
//       { month: 'Enero', duration: 5 },
//       { month: 'Febrero', duration: 6 },
//       { month: 'Marzo', duration: 7 },
//       { month: 'Abril', duration: 5 },
//       { month: 'Mayo', duration: 6 },
//     ]);
//   }, []);

//   const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];
//   const profilePhotoUrl = izziImage;
//   const agentName = "Maximiliano Lecona";
//   const agentId = 1234;

//   return (
//     <div className="calificacion-page">
//       <Header />
//       <div className="calificacion-content">
//         <div className="profile-container">
//           <ProfilePhoto photoUrl={profilePhotoUrl} name={agentName} id={agentId} />
//           <div className="orange-card-container">
//             <Card
//               style={{ backgroundColor: colors[3] }}
//               className="card mb-2 orange-card"
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{data[3]?.title}</div>
//                   <div className="card-value">{data[3]?.value}</div>
//                 </div>
//                 <div className="card-rank">{data[3]?.rank}</div> 
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//         <div className="card-container">
//           {data.slice(0, 3).map(({ title, value, rank }, index) => (
//             <Card
//               key={index}
//               style={{ backgroundColor: colors[index] }}
//               className={`card mb-2 ${index === 0 ? 'blue-card' : ''} ${index === 1 ? 'pink-card' : ''} ${index === 2 ? 'yellow-card' : ''} ${index < 3 ? 'colored-card' : ''}`}
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{title}</div>
//                   {index === 0 ? ( 
//                     <div className="card-value">
//                       <StarRating rating={value} />
//                     </div>
//                   ) : (
//                     <div className="card-value">{value}</div>
//                   )}
//                 </div>
//                 <div className="card-rank">{rank}</div> 
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//         <div className="chart-container">
//           <Charts agentData={data.slice(0, 3)} durationData={durationData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calificacion;
// Calificacion.jsx

// import { useState, useEffect } from 'react';
// import '../styles/calificacion.css';
// import Card from 'react-bootstrap/Card';
// import StarRating from './StarRating';
// import ProfilePhoto from './ProfilePicture'; 
// import izziImage from '../elements/izzi.jpeg';
// import Charts from './Charts';
// import Header from './Header';

// const Calificacion = () => {
//   const [data, setData] = useState([]);
//   const [durationData, setDurationData] = useState([]);

//   useEffect(() => {
//     // para hacer fetch
//     setData([
//       { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
//       { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
//       { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
//       { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } 
//     ]);

//     setDurationData([
//       { month: 'Enero', duration: 5 },
//       { month: 'Febrero', duration: 6 },
//       { month: 'Marzo', duration: 7 },
//       { month: 'Abril', duration: 5 },
//       { month: 'Mayo', duration: 6 },
//     ]);
//   }, []);

//   const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];
//   const profilePhotoUrl = izziImage;
//   const agentName = "Maximiliano Lecona";
//   const agentId = 1234;

//   return (
//     <div className="calificacion-page">
//       <Header />
//       <div className="calificacion-content">
//         <div className="profile-container">
//           <ProfilePhoto photoUrl={profilePhotoUrl} name={agentName} id={agentId} />
//           <div className="orange-card-container">
//             <Card
//               style={{ backgroundColor: colors[3] }}
//               className="card mb-2 orange-card"
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{data[3]?.title}</div>
//                   <div className="card-value">{data[3]?.value}</div>
//                 </div>
//                 <div className="card-rank">{data[3]?.rank}</div> 
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//         <div className="card-container">
//           {data.slice(0, 3).map(({ title, value, rank }, index) => (
//             <div className="custom-card" key={index}>
//               <Card
//                 style={{ backgroundColor: colors[index] }}
//                 className={`card mb-2 ${index === 0 ? 'blue-card' : ''} ${index === 1 ? 'pink-card' : ''} ${index === 2 ? 'yellow-card' : ''} ${index < 3 ? 'colored-card' : ''}`}
//               >
//                 <Card.Body>
//                   <div className="card-content">
//                     <div className="card-title">{title}</div>
//                     {index === 0 ? ( 
//                       <div className="card-value">
//                         <StarRating rating={value} />
//                       </div>
//                     ) : (
//                       <div className="card-value">{value}</div>
//                     )}
//                   </div>
//                   <div className="card-rank">{rank}</div> 
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//         <div className="chart-container">
//           <Charts agentData={data.slice(0, 3)} durationData={durationData} />
//         </div>
//       </div>
//       {/* Nuevo contenedor con tres tarjetas Bootstrap */}
//       <div className="custom-container">
//         <div className="custom-row">
//           <div className="custom-col">
//             <div className="custom-card">
//               <div className="custom-card-header">Header</div>
//               <div className="custom-card-body">
//                 <h5 className="custom-card-title">Success card title</h5>
//                 <p className="custom-card-text">Some                 quick example text to build on the card title and make up the bulk of the card's content.</p>
//               </div>
//               <div className="custom-card-footer">Footer</div>
//             </div>
//           </div>
//           <div className="custom-col">
//             <div className="custom-card">
//               <div className="custom-card-header">Header</div>
//               <div className="custom-card-body">
//                 <h5 className="custom-card-title">Success card title</h5>
//                 <p className="custom-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               </div>
//               <div className="custom-card-footer">Footer</div>
//             </div>
//           </div>
//           <div className="custom-col">
//             <div className="custom-card">
//               <div className="custom-card-header">Header</div>
//               <div className="custom-card-body">
//                 <h5 className="custom-card-title">Success card title</h5>
//                 <p className="custom-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               </div>
//               <div className="custom-card-footer">Footer</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calificacion;

// con tarjetas de abajo
// import { useState, useEffect } from 'react';
// import '../styles/calificacion.css';
// import Card from 'react-bootstrap/Card';
// import StarRating from './StarRating';
// import ProfilePhoto from './ProfilePicture'; 
// import izziImage from '../elements/izzi.jpeg';
// import Charts from './Charts';
// import Header from './Header';

// const Calificacion = () => {
//   const [data, setData] = useState([]);
//   const [durationData, setDurationData] = useState([]);

//   useEffect(() => {
//     // para hacer fetch
//     setData([
//       { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
//       { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
//       { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
//       { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } 
//     ]);

//     setDurationData([
//       { month: 'Enero', duration: 5 },
//       { month: 'Febrero', duration: 6 },
//       { month: 'Marzo', duration: 7 },
//       { month: 'Abril', duration: 5 },
//       { month: 'Mayo', duration: 6 },
//     ]);
//   }, []);

//   const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];
//   const profilePhotoUrl = izziImage;
//   const agentName = "Maximiliano Lecona";
//   const agentId = 1234;

//   return (
//     <div className="calificacion-page">
//       <Header />
//       <div className="calificacion-content">
//         <div className="profile-container">
//           <ProfilePhoto photoUrl={profilePhotoUrl} name={agentName} id={agentId} />
//           <div className="orange-card-container">
//             <Card
//               style={{ backgroundColor: colors[3] }}
//               className="card mb-2 orange-card"
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{data[3]?.title}</div>
//                   <div className="card-value">{data[3]?.value}</div>
//                 </div>
//                 <div className="card-rank">{data[3]?.rank}</div> 
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//         <div className="card-container">
//           {data.slice(0, 3).map(({ title, value, rank }, index) => (
//             <Card
//               key={index}
//               style={{ backgroundColor: colors[index] }}
//               className={`card mb-2 ${index === 0 ? 'blue-card' : ''} ${index === 1 ? 'pink-card' : ''} ${index === 2 ? 'yellow-card' : ''} ${index < 3 ? 'colored-card' : ''}`}
//             >
//               <Card.Body>
//                 <div className="card-content">
//                   <div className="card-title">{title}</div>
//                   {index === 0 ? ( 
//                     <div className="card-value">
//                       <StarRating rating={value} />
//                     </div>
//                   ) : (
//                     <div className="card-value">{value}</div>
//                   )}
//                 </div>
//                 <div className="card-rank">{rank}</div> 
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//         <div className="chart-container">
//           <Charts agentData={data.slice(0, 3)} durationData={durationData} />
//         </div>
//       </div>
//       {/* Tarjetitas de hasta abajo */}
//       <div className="custom-container">
//         <div className="custom-row">
//           <div className="custom-col">
//             <div className="custom-card">
//               <div className="custom-card-header">Header</div>
//               <div className="custom-card-body">
//                 <h5 className="custom-card-title">Success card title</h5>
//               </div>
//             </div>
//           </div>
//           <div className="custom-col">
//             <div className="custom-card">
//               <div className="custom-card-header">Header</div>
//               <div className="custom-card-body">
//                 <h5 className="custom-card-title">Success card title</h5>
//               </div>
//             </div>
//           </div>
//           <div className="custom-col">
//             <div className="custom-card">
//               <div className="custom-card-header">Header</div>
//               <div className="custom-card-body">
//                 <h5 className="custom-card-title">Success card title</h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calificacion;
//con las nuevas gráficas (con librería)
import '../styles/calificacion.css';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
import ProfilePhoto from './ProfilePicture';
import izziImage from '../elements/izzi.jpeg';
import Charts from './Charts';
// import AgentRankingChart from './AgentRankingChart'; // Importamos el componente de la gráfica
import Header from './Header';
import { useState, useEffect } from 'react';
import TarjetaControlesLlamada from './TarjetaControlesLlamada';

const Calificacion = () => {
  const [data, setData] = useState([]);
  const [durationData, setDurationData] = useState([]);

  useEffect(() => {
    // para hacer fetch
    setData([
      { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
      { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
      { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
      { title: 'Cantidad de soluciones nuevas propuestas', value: 4, rank: '#1 Benny' } 
    ]);

    setDurationData([
      { month: 'Enero', duration: 5 },
      { month: 'Febrero', duration: 6 },
      { month: 'Marzo', duration: 7 },
      { month: 'Abril', duration: 5 },
      { month: 'Mayo', duration: 6 },
    ]);
  }, []);

  const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];
  const profilePhotoUrl = izziImage;
  const agentName = "Maximiliano Lecona";
  const agentId = 1234;

  return (
    <div className="calificacion-page">
      <div className="calificacion-content">
        <div className="profile-container">
          <ProfilePhoto photoUrl={profilePhotoUrl} name={agentName} id={agentId} />
          <div className="orange-card-container">
            <Card
              style={{ backgroundColor: colors[3] }}
              className="card mb-2 orange-card"
            >
              <Card.Body>
                <div className="card-content">
                  <div className="card-title">{data[3]?.title}</div>
                  <div className="card-value">{data[3]?.value}</div>
                </div>
                <div className="card-rank">{data[3]?.rank}</div> 
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="card-container">
          {data.slice(0, 3).map(({ title, value, rank }, index) => (
            <Card
              key={index}
              style={{ backgroundColor: colors[index] }}
              className={`card mb-2 ${index === 0 ? 'blue-card' : ''} ${index === 1 ? 'pink-card' : ''} ${index === 2 ? 'yellow-card' : ''} ${index < 3 ? 'colored-card' : ''}`}
            >
              <Card.Body>
                <div className="card-content">
                  <div className="card-title">{title}</div>
                  {index === 0 ? (
                    <div className="card-value">
                      <StarRating rating={value} />
                    </div>
                  ) : (
                    <div className="card-value">{value}</div>
                  )}
                </div>
                <div className="card-rank">{rank}</div> 
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="chart-container">
          <Charts agentData={data.slice(0, 3)} durationData={durationData} />
        </div>
      </div>
      {/* Tarjetitas de hasta abajo */}
      <div className="custom-container">
        <div className="custom-row">

          
          {/* <div className='custom-row'>
            <TarjetaControlesLlamada/>
          </div> */}


          <div className="custom-col2">
            <div>
              <div>
              <TarjetaControlesLlamada/>
              </div>
            </div>
          </div>


          <div className="custom-col">
            <div className="custom-card card-primary">
              <div className="custom-card-header">Agente con mejor calificación al mes</div>
              <div className="custom-card-body">
                <h5 className="custom-card-title">Esteban Miranda</h5>
              </div>
            </div>
          </div>
          <div className="custom-col">
            <div className="custom-card card-secondary">
              <div className="custom-card-header">Agente con más llamadas al día</div>
              <div className="custom-card-body">
                <h5 className="custom-card-title">Pinky Dinky Doo</h5>
              </div>
            </div>
          </div>
          {/* <div className="custom-col">
            <div className="custom-card card-tertiary">
              <div className="custom-card-header">Agente más veloz solucionando</div>
              <div className="custom-card-body">
                <h5 className="custom-card-title">Iker Casanova</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Calificacion;