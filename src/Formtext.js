const FormText = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confPassword,
  confSetPassword,
  authentificationCompleted,
  setAuthentification,
  submitForm,
  handName,
  handMail,
  handPass,
  handPassConf,
}) => {
  return (
    <div className="FormText">
      {/* {name}
      <br />
      {email}
      <br />
      {password}
      <br />
      {confPassword}
      <br /> */}
      <h1>Create Account</h1>
      <form onSubmit={submitForm}>
        <label>
          <p>Name :</p>
          <input
            placeholder="Name"
            type="text"
            name="Name"
            value={name}
            onChange={handName}
          />
        </label>
        <label>
          <p>Email :</p>
          <input
            placeholder="Email"
            name="Email"
            type="email"
            value={email}
            onChange={handMail}
          />
        </label>
        <label>
          <p>Password :</p>
          <input
            placeholder="Password"
            name="Password"
            value={password}
            type="password"
            onChange={handPass}
          />
        </label>
        <label>
          <p>Confirm Password</p>
          <input
            placeholder="Confirm Password"
            name="Confirm Password"
            type="password"
            value={confPassword}
            onChange={handPassConf}
          />
        </label>
        <label>
          <p>Submit</p>
          <input className="Sub" placeholder="submit" type="submit" />
        </label>
      </form>
      {password === confPassword ? null : (
        <div className="redAlert">password don't match</div>
      )}
    </div>
  );
};

export default FormText;
