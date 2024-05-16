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
<<<<<<< HEAD
import izziImage from '../elements/izzi.jpeg';
import AgentRankingChart from './AgentRankingChart';
import Header from './Header';
=======
import izziImage from '../styles/izzi.jpeg';
import AgentRankingChart from './AgentRankingChart'; // Importamos el componente de la gráfica
>>>>>>> b770652df94ccebe15181d830afe561575d0057d

const Calificacion = () => {
  // Dummy data
  const data = [
    { title: 'Calificación promedio', value: 5, rank: '#1 Joahan' },
    { title: 'Cantidad de llamadas en el día', value: '10', rank: '#1 Pepo' },
    { title: 'Promedio de tiempo en llamada', value: '7', rank: '#1 Alfy' },
<<<<<<< HEAD
    { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } 
=======
    { title: 'Cantidad de llamadas en el día', value: 4, rank: '#1 Benny' } // Nueva tarjeta
>>>>>>> b770652df94ccebe15181d830afe561575d0057d
  ];

  // Colores de izzi
  const colors = ['#00BCB4', '#D7006D', '#FFCE00', '#EC6907'];

<<<<<<< HEAD
  // Ruta de la imagen dummy (ya en elements)
=======
  // Ruta de la imagen dummy
>>>>>>> b770652df94ccebe15181d830afe561575d0057d
  const profilePhotoUrl = izziImage;

  return (
    <div className="calificacion-container">
<<<<<<< HEAD
      <Header/>
      <ProfilePhoto photoUrl={profilePhotoUrl} />
      <div className="card-container">
        {data.slice(0, 3).map(({ title, value, rank }, index) => (
          <Card
            key={index}
            style={{ backgroundColor: colors[index] }}
            className={`card mb-2 ${index === 3 ? 'orange-card' : ''}`}
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
=======
      <ProfilePhoto photoUrl={profilePhotoUrl} />
      {data.map(({ title, value, rank }, index) => (
        <Card
          key={index}
          style={{ backgroundColor: colors[index] }}
          className={`card mb-2 ${index === 3 ? 'orange-card' : ''}`}
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
      {/* Integramos el componente de la gráfica aquí */}
>>>>>>> b770652df94ccebe15181d830afe561575d0057d
      <div className="chart-container">
        <AgentRankingChart agentData={data.slice(0, 3)} />
      </div>
    </div>
  );
<<<<<<< HEAD
  
=======
>>>>>>> b770652df94ccebe15181d830afe561575d0057d
};

export default Calificacion;