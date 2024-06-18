/* Author: Giovanna Lorena Delgado Mendoza*/
/*Rating window that shows the agents' statistics and/or KPIs*/

import '../styles/stats.css';
import ProfilePhoto from './ProfilePhoto';
import profilePicture from '../assets/profilePic.jpeg';
import Charts from './Charts';
import CardContainer from './CardContainer';
import BottomCards from './BottomCards';
import AgentName from './AgentName';

const Stats = () => {
  const profilePhotoUrl = profilePicture;

  return (
    <div className = "statsPage">
      <div className = "statsContent">
        <div className = "profileContainer">
          <ProfilePhoto photoUrl = {profilePhotoUrl} profileName = {<AgentName defaultName="Maximiliano Lecona" />} />
          <div className="orangeCardContainer">
            <CardContainer />
          </div>
        </div>
        <div className = "chartContainer">
          <Charts />
        </div>
      </div>
      <BottomCards />
    </div>
  );
}

export default Stats;