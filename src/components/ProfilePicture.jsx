/* Autora: Giovanna Lorena Delgado Mendoza*/
/*Foto de perfil de los agentes en ventana de calificación*/
import '../styles/profilePicture.css';
import izziImage from '../elements/izzi.jpeg';
const ProfilePhoto = ({ photoUrl, name }) => {
  const defaultPhotoUrl = izziImage;
  return (
    <figure className="figure profile-container">
      <img src={photoUrl || defaultPhotoUrl} className="figure-img img-fluid rounded" alt="Profile" />
      <figcaption className="figure-caption">{name}</figcaption>
    </figure>
  );
};

export default ProfilePhoto;