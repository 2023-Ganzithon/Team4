import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";
import API from "../../services/API";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const emailValidCheck = (email) => {
    const reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return reg.test(email);
  };

  const phoneValidCheck = (phone) => {
    const reg = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

    return reg.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      passwordCheck === "" ||
      phone === "" ||
      name === ""
    ) {
      alert("모든 값을 입력해주세요.");
    } else if (!emailValidCheck(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      setEmail("");
    } else if (password !== passwordCheck) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setPasswordCheck("");
    } else if (!phoneValidCheck(phone)) {
      alert("휴대폰 번호 형식이 올바르지 않습니다.");
      setPhone("");
    } else {
      // test code
      // alert("회원가입이 완료되었습니다.");
      // navigate("/login");

      const request = {
        email: email,
        password: password,
        name: name,
        phone: phone,
      };
      console.log(request);

      const response = await API.post("/signup/", request, {headers: {
        'Content-Type': 'application/json'
      }});
      console.log(response);
      const { errorCause } = response.data;
      if (response.status === 201) {
        alert('성공')
        navigate("/login");
      } else {
        // eslint-disable-next-line default-case
        switch (errorCause) {
          case "email":
            alert("이미 존재하는 이메일 주소입니다.");
            setEmail("");
            break;
          case "phone":
            alert("이미 존재하는 휴대폰 번호입니다.");
            setPhone("");
            break;
        }
      }
    }
  };

  return (
    <>
      <div className={styles.nav_bar}>
        <h1 className={styles.title}>셰푸 회원가입</h1>
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
            <input
              type="password"
              placeholder="비밀번호 확인"
              name="passwordCheck"
              value={passwordCheck}
              className={styles.input}
              onChange={handlePasswordCheckChange}
            />
            <input
              type="tel"
              placeholder="휴대전화 번호(ex. 010-0000-0000)"
              name="phone"
              value={phone}
              className={styles.input}
              onChange={handlePhoneChange}
            />
            <input
              type="text"
              placeholder="닉네임"
              name="name"
              value={name}
              className={styles.input}
              onChange={handleNameChange}
            />
            <button type="submit" className={styles.signup_button}>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
