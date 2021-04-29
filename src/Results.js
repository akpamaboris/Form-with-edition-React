const Results = ({
  name,
  email,
  password,
  authentificationCompleted,
  setAuthentification,
}) => {
  return (
    <div className="results">
      <h1> Results</h1>
      <p>Name = {name}</p>
      <p>Email = {email}</p>
      <p>Password = {password}</p>
      <button onClick={() => setAuthentification(false)}>
        Edit Information
      </button>
    </div>
  );
};

export default Results;
