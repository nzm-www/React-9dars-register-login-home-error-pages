import React, { useRef, useState } from "react";
import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate("");

  function validate() {
    return true;
  }

  function handleForm(event) {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    setLoading(true);
    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message == "User Not  fount") {
          alert(data.massage);
          usernameRef.current.focus();
          return;
        }
        if (data.message == "Invalid Password") {
          alert(data.massage);
          passwordRef.current.focus();
          return;
        }

        if (data.accessToken) {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("token", data.accessToken);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(function () {
        setLoading(false);
      });
  }

  return (
    <div className={styles.wrap}>
      <div>
        <h1 className={styles.title}>
          L O G I N <br /> P A G E
        </h1>
        <div className={styles.loader}></div>
        <form className={styles.form}>
          <input ref={usernameRef} type="text" placeholder="Enter. UserName" />
          <input ref={passwordRef} type="text" placeholder="Enter. Paswword" />

          {loading && <button disabled>LOADING...</button>}
          {!loading && <button onClick={handleForm}>LOGIN</button>}
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;
