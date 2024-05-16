//Intento de poner la foto de perfil del agente

import izziImage from '../elements/izzi.jpeg';

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