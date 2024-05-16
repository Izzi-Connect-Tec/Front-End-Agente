//Intento de poner la foto de perfil del agente

<<<<<<< HEAD
import izziImage from '../elements/izzi.jpeg';
=======
import izziImage from '../styles/izzi.jpeg';
>>>>>>> b770652df94ccebe15181d830afe561575d0057d
const ProfilePhoto = ({ photoUrl }) => {
  //dummy
  const defaultPhotoUrl = izziImage;

  return (
    <div className="profile-container">
      <img src={photoUrl || defaultPhotoUrl} alt="Profile" />
    </div>
  );
};

export default ProfilePhoto;