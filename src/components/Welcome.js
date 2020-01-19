import React from "react";
import "../styles/BackgroundVideo.css";

const videoSource =
  "https://res.cloudinary.com/yungdenzel/video/upload/v1572699511/youtube_nnmhsd.mp4";

const Welcome = () => (
  
    <div className='Container'>

      <video autoPlay loop muted className='Video'>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='Content'>
        <h1 className="fw9 f1-l f2 HelveticaNeue tc pa6-l">
          Connect to Netflix using your favorite devices.{" "}
        </h1>
      </div>

    </div>
  
);

export default Welcome;
