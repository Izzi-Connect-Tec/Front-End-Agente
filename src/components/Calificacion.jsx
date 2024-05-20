//vertical acomodada solo en ipad
import '../styles/calificacion.css';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
import ProfilePhoto from './ProfilePicture'; 
import izziImage from '../elements/izzi.jpeg';
import AgentRankingChart from './AgentRankingChart';
import Header from './Header';

const Calificacion = () => {
  // Dummy data
  const data = [
    { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
    { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
    { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
    { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } 
  ];

  // Colores de izzi
  const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];

  const profilePhotoUrl = izziImage;

  return (
    <div className="calificacion-page">
      <Header />
      <div className="calificacion-content">
        <div className="profile-container">
          <ProfilePhoto photoUrl={profilePhotoUrl} />
          <div className="orange-card-container">
            <Card
              style={{ backgroundColor: colors[3] }}
              className="card mb-2 orange-card"
            >
              <Card.Body>
                <div className="card-content">
                  <div className="card-title">{data[3].title}</div>
                  <div className="card-value">{data[3].value}</div>
                </div>
                <div className="card-rank">{data[3].rank}</div> 
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="card-container">
          {data.slice(0, 3).map(({ title, value, rank }, index) => (
            <Card
              key={index}
              style={{ backgroundColor: colors[index] }}
              className={`card mb-2 ${index === 3 ? 'blue-card' : ''} ${index < 3 ? 'colored-card' : ''}`}
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
      </div>
      <div className="chart-container">
        <AgentRankingChart agentData={data.slice(0, 3)} />
      </div>
    </div>
  );
};

export default Calificacion;



//con grafica acomodada (pre)
// import '../styles/calificacion.css';
// import Card from 'react-bootstrap/Card';
// import StarRating from './StarRating';
// import ProfilePhoto from './ProfilePicture'; 
// import izziImage from '../elements/izzi.jpeg';
// import AgentRankingChart from './AgentRankingChart';
// import Header from './Header';

// const Calificacion = () => {
//   // Dummy data
//   const data = [
//     { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
//     { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
//     { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
//     { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } 
//   ];

//   // Colores de izzi
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
//                   <div className="card-title">{data[3].title}</div>
//                   <div className="card-value">{data[3].value}</div>
//                 </div>
//                 <div className="card-rank">{data[3].rank}</div> 
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//         <div className="card-container">
//           {data.slice(0, 3).map(({ title, value, rank }, index) => (
//             <Card
//               key={index}
//               style={{ backgroundColor: colors[index] }}
//               className={`card mb-2 ${index === 3 ? 'blue-card' : ''}`}
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
//         <div className="chart-and-cards-container">
//           <div className="orange-card-container">
//             {/* Tarjeta naranja */}
//           </div>
//           <div className="card-container">
//             {/* Tarjetas azul, rosa y amarilla */}
//           </div>
//         </div>
//         {/* Contenedor para el gráfico */}
//         <div className="chart-container">
//           <AgentRankingChart agentData={data.slice(0, 3)} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calificacion;