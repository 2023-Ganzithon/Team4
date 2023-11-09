import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import API from "../../services/API";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const emailValidCheck = (email) => {
    const reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return reg.test(email);
  };

  const forgotPasswordButtonClick = () => {
    console.log("forgot password button clicked");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("이메일과 비밀번호 모두 입력하세요.");
    } else {
      if (!emailValidCheck(email)) {
        alert("이메일 형식이 올바르지 않습니다.");
        setEmail("");
      }
    }

    // test code
    alert("로그인 성공");
    navigate("/");

    /*
    const request = {
      username: email,
      password: password,
    };

    const response = await API.post("/login", request);

    if (response.status === 200) {
      const { key } = response.data;
      navigate("/");
    } else {
      alert("회원정보가 존재하지 않습니다.");
      setEmail("");
      setPassword("");
    }
    */
  };

  return (
    <>
      <div className={styles.nav_bar}>
        <h1 className={styles.title}>셰푸 로그인</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="아이디(이메일)"
              name="email"
              value={email}
              className={styles.input}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="password"
              value={password}
              className={styles.input}
              onChange={handlePasswordChange}
            />
            <button className={styles.login_button}>로그인</button>
          </form>
          <div
            onClick={forgotPasswordButtonClick}
            className={styles.forgot_password_text}
          >
            비밀번호가 기억나지 않으세요?
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
