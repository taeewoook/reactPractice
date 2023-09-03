import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop"></div>
      <div className="aboutBottom">
        <h1>아이유</h1>
        <h2>대한민국의 가수 겸 배우</h2>
        <p>
          본명 : 이지은
          <br />
          생일 : 1993년 5월 16일
          <br />키 : 162cm
          <br />
          예명 뜻 : 너와 내가 음악으로 하나가 된다.
          <br />
          국적 : 대한민국
          <br />
          활동 시기 : 2008년 ~ ing
          <br />
          소속사 : EDAM 엔터테인먼트
        </p>
      </div>
    </div>
  );
}

export default About;
