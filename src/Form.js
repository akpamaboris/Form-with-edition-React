import { useState } from "react";
import Results from "./Results";
import Formtext from "./Formtext";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, confSetPassword] = useState("");
  const [authentificationCompleted, setAuthentification] = useState(false);

  const handName = (event) => {
    setName(event.target.value);
  };

  const handMail = (event2) => {
    setEmail(event2.target.value);
  };

  const handPass = (event3) => {
    setPassword(event3.target.value);
  };

  const handPassConf = (event4) => {
    confSetPassword(event4.target.value);
  };

  const submitForm = (event5) => {
    event5.preventDefault();
    if (password.length > 0 && password === confPassword) {
      setAuthentification(true);
    } else if (password !== confPassword) {
      setAuthentification(false);
    }
  };

  return authentificationCompleted ? (
    <Results
      name={name}
      email={email}
      password={password}
      authentificationCompleted={authentificationCompleted}
      setAuthentification={setAuthentification}
    />
  ) : (
    <Formtext
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confPassword={confPassword}
      confSetPassword={confSetPassword}
      authentificationCompleted={authentificationCompleted}
      setAuthentification={setAuthentification}
      submitForm={submitForm}
      handName={handName}
      handMail={handMail}
      handPass={handPass}
      handPassConf={handPassConf}
    />
  );
};

export default Form;
