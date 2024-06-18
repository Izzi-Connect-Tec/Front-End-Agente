import { useSpring, animated } from "react-spring";
import { CiMicrophoneOn } from "react-icons/ci";
import "../styles/mute.css";

const Mute = ({ lineVisible }) => {
  const lineAnimation = useSpring({
    height: lineVisible ? 40 : 0,
    width: lineVisible ? 3 : 0,
    config: {
      duration: 200,
      easing: (t) => t,
    },
  });

  return (
    <div className="containerMute">
      <div className="squareMute" style={{ color: lineVisible ? "red" : "black" }}>
        <div className="muteContainer">
          <CiMicrophoneOn
            className="image"
            size={35}
            color={lineVisible ? "red" : "black"}
          />
          <animated.div
            style={{
              ...lineAnimation,
              backgroundColor: "red",
              position: "absolute",
              top: "-20px",
              left: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Mute;
