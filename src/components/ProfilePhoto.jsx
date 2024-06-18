/* Author: Giovanna Lorena Delgado Mendoza*/
/*Profile photo of the agents in the qualification window*/

import '../styles/profilePhoto.css';
import profilePic from '../assets/profilePic.jpeg';

const ProfilePhoto = ({ photoUrl, profileName }) => {
  const defaultPhotoUrl = profilePic;

  return (
    <figure className = "figure profileContainer">
      <img src = {photoUrl || defaultPhotoUrl} className="figureImage imgFluid rounded" alt="ProfilePicture"/>
      <figcaption className="figureCaption">{profileName}</figcaption>
    </figure>
  );
}

export default ProfilePhoto;