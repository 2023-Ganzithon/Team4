import React from "react";

const SignUpPage = () => {
  const signupButtonClick = () => {
    console.log("signup button clicked");
  };

  return (
    <div>
      <div className="nav-bar">
        <div>셰푸 회원가입</div>
      </div>
      <div className="content-container">
        <div className="signup-input-container">
          <input
            type="text"
            className="signup-input"
            placeholder="아이디(이메일)"
          />
          <input
            type="password"
            className="signup-input"
            placeholder="비밀번호"
          />
          <input
            type="password"
            className="signup-input"
            placeholder="비밀번호 확인"
          />
          <input
            type="tel"
            className="signup-input"
            placeholder="휴대전화 번호(ex. 010-0000-0000)"
          />
          <input type="text" className="signup-input" placeholder="닉네임" />
        </div>
        <button className="signup-button" onClick={signupButtonClick}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
