import { useState } from "react";

function LoginView({ runFetch }) {
  const [userCred, setUserCred] = useState({ username: "", password: "" });

  const onKey = (event) => {
    const { name, value } = event.target;
    setUserCred({ ...userCred, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const targetName = `user/${event.target.name}`;

    if (event.target.name === "clear-content") {
      setUserCred({ username: "", password: "" });
    } else {

      const res = await runFetch(targetName, userCred);
      console.log("res==>", res);
    }
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
          <button name="login" type="submit" onClick={onSubmit}>
            Log In
          </button>
          <button type="create-user" name="create" onClick={onSubmit}>
            Create User
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
