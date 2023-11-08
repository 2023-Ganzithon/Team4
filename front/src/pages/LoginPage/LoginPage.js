import React from "react";

const LoginPage = () => {
  const loginButtonClick = () => {
    console.log("login button clicked");
  };

  const forgotPasswordButtonClick = () => {
    console.log("forgot password button clicked");
  };

  return (
    <div>
      <div className="nav-bar">
        <div>셰푸 로그인</div>
      </div>
      <div className="content-container">
        <div className="login-input-container">
          <input
            type="text"
            className="login-input"
            placeholder="아이디(이메일)"
          />
          <input
            type="password"
            className="login-input"
            placeholder="비밀번호"
          />
        </div>
        <button className="login-button" onClick={loginButtonClick}>
          로그인
        </button>
        <div onClick={forgotPasswordButtonClick}>
          비밀번호가 기억나지 않으세요?
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
