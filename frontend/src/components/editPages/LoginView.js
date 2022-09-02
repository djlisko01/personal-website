import { useState } from "react";

function LoginView() {
  const [userCred, setUserCred] = useState({ username: "", password: "" });

  const onKey = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserCred({ ...userCred, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (event.target.name === "clear-content") {
      setUserCred({ username: "", password: "" });
    } else {
      fetch("http://localhost:9000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCred),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    console.log(userCred);
  };

  return (
    <div className="login">
      <div className="login">
        <form>
          <label htmlFor="username">User Name:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={userCred.username}
            placeholder="Enter User Name"
            onChange={onKey}
          />
          <label htmlFor="username">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={userCred.password}
            onChange={onKey}
          />
          <button type="submit" onClick={onSubmit}>
            Log In
          </button>
          <button name="clear-content" onClick={onSubmit}>
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginView;
