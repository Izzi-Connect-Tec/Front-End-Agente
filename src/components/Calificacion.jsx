import '../styles/calificacion.css';
import ProfilePhoto from './ProfilePicture';
import izziImage from '../elements/izzi.jpeg';
import Charts from './Charts';
import Header from './Header';
import CardContainer from './CardContainer';
import BottomCards from './BottomCards';

const Calificacion = () => {
  const profilePhotoUrl = izziImage;
  const agentName = "Maximiliano Lecona";

  return (
    <div className="calificacion-page">
      <Header />
      <div className="calificacion-content">
        <div className="profile-container">
          <ProfilePhoto photoUrl={profilePhotoUrl} name={agentName} />
          <div className="orange-card-container">
            <CardContainer />
          </div>
        </div>
        <div className="chart-container">
          <Charts />
        </div>
      </div>
      <BottomCards />
    </div>
  );
};

export default Calificacion;