import { BiPlay } from "react-icons/bi";
import VideoImg from "../../Assets/Images/Video/video.webp";
const Video = () => {
  return (
    <div className="Video_Container">
      <div className="Video_content">
        <div className="video_Heading">
          <h1>Watch a video</h1>
        </div>
        <div className="video_box">
          <a href="https://www.youtube.com/embed/uTBCOzGBX6o" target="_blank">
            <img src={VideoImg} alt="Img is not displayed" />
            <BiPlay className="Video_Icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
