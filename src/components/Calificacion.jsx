// import '../styles/calificacion.css';
// import Card from 'react-bootstrap/Card';
// import StarRating from './StarRating';
// import ProfilePhoto from './ProfilePicture'; 
// import izziImage from '../styles/izzi.jpeg'; 

// const Calificacion = () => {
//   // Dummy data
//   const data = [
//     { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
//     { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
//     { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
//     { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } // Nueva tarjeta
//   ];

//   // Colores de izzi
//   const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];

//   // Ruta de la imagen dummy
//   const profilePhotoUrl = izziImage;

//   return (
//     <div className="calificacion-container">
//       {/* Paso la ruta de la imagen de muestra como prop */}
//       <ProfilePhoto photoUrl={profilePhotoUrl} />
//       {data.map(({ title, value, rank }, index) => (
//         <Card
//           key={index}
//           style={{ backgroundColor: colors[index] }}
//           className={`card mb-2 ${index === 3 ? 'orange-card' : ''}`}
//         >
//           <Card.Body>
//             <div className="card-content">
//               <div className="card-title">{title}</div>
//               {index === 0 ? ( 
//                 <div className="card-value">
//                   <StarRating rating={value} />
//                 </div>
//               ) : (
//                 <div className="card-value">{value}</div>
//               )}
//               <div className="card-rank">{rank}</div>
//             </div>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Calificacion;

//intento gráfica (no definitivo priettes)
import '../styles/calificacion.css';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';
import ProfilePhoto from './ProfilePicture'; 
import izziImage from '../elements/izzi.jpeg';
import AgentRankingChart from './AgentRankingChart'; // Importamos el componente de la gráfica
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
        </div>
        <div className="card-container">
          {data.slice(0, 3).map(({ title, value, rank }, index) => (
            <Card
              key={index}
              style={{ backgroundColor: colors[index] }}
              className="card mb-2"
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
                  <div className="card-rank">{rank}</div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div className="chart-container">
        <AgentRankingChart agentData={data.slice(0, 3)} />
      </div>
      {/* Aquí va la tarjetita naranja huérfana */}
      <div className="orange-card-container">
        <Card
          style={{ backgroundColor: colors[3] }}
          className="card mb-2 orange-card"
        >
          <Card.Body>
            <div className="card-content">
              <div className="card-title">{data[3].title}</div>
              <div className="card-value">{data[3].value}</div>
              <div className="card-rank">{data[3].rank}</div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Calificacion;
