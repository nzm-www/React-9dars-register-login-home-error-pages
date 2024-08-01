import React, { useRef } from "react";
import styles from "./register.module.css";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const usernameRef = useRef("");
  const gmailRef = useRef("");
  const passwordRef = useRef("");
  const rePasswordRef = useRef("");

  const navigate = useNavigate();
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
      gmail: gmailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "aplication/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.massage == "Failed! Email is already in use!") {
          alert(data.massage);
          gmailRef.current.focus();
          return;
        }
        if (data.massage == "Failed! UserName  is already in use!") {
          alert(data.massage);
          usernameRef.current.focus();
          return;
        }

        if (data.massage == "User register  successfully!") {
          navigate("./login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1 className={styles.title}>
        R E G I S T E R <br /> P A G E{" "}
      </h1>
      <form className={styles.form}>
        <input ref={usernameRef} type="text" placeholder="Enter. UserName" />
        <input ref={gmailRef} type="emali " placeholder="Enter. Email" />
        <input ref={passwordRef} type="text" placeholder="Enter. Paswword" />
        <input ref={rePasswordRef} type="text" placeholder="Enter. repasword" />
        <button onClick={handleForm}>S U B M I T</button>
      </form>
      <Link to="/login">login</Link>
    </div>
  );
}

export default Register;
