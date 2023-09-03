import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "./assets/homeiu.jpg";
// 불러들인 이미지를 BannerImage 지정하고 이것을 아래에 삽입합니다

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        {/* <h1>아이유 보실 준비 되었나요?</h1> */}
        <Link to="/About">
          <button>Let's Go!</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
