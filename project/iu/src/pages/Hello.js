import React from "react";
import YouTube from "react-youtube";
import "../styles/Hello.css";

function Hello() {
  const videoId = "b17E7EEjMXg"; // 유튜브 영상의 ID를 지정합니다.

  const opts = {
    // 유튜브 영상의 옵션을 지정합니다.
    height: "300",
    width: "500",
  };

  return (
    <div className="hello">
      <div className="helloTop">
        <h1>아이유의 일대기</h1>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <div className="helloBottom"></div>
    </div>
  );
}

export default Hello;
