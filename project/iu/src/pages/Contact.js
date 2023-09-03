import React from "react";
import PizzaLeft from "../assets/signup.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url( ${PizzaLeft})` }}
      >
        {" "}
      </div>
      <div className="rightSide">
        <h1> 회원가입</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">닉네임</label>
          <input name="name" placeholder="닉네임" type="text" />
          <label htmlFor="id">아이디</label>
          <input name="id" placeholder="아이디" type="text" />
          <label htmlFor="password">비밀번호</label>
          <input name="password" placeholder="비밀번호" type="password" />
          <textarea
            rows="6"
            placeholder="본인 소개 한마디 적어주세요 ~😁 (30글자내외)"
            name="message"
            required
          ></textarea>
          <button type="submit"> 확인</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
