import React, { useState, useEffect } from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  // NavLink,
  // Redirect,
  useLocation,
  // Prompt,
  // useRouteMatch,
  // useParams,
  // useHistory,
} from "react-router-dom";

export default function Login(props) {
  const {
    loginMsg,
    isLoggedIn,
    setLoginStatus,
    utils,
    login,
    displayError,
    clearError
  } = props;

  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  // const [error, setError] = useState(false);

  const { state } = useLocation();
  //Vi sætter den side vi gerne vil til, selv om vi ikke er logget ind
  //Logout sætter from til "undefined"
  const from = state ? state.from : "/";

  const performLogin = (evt) => {
    evt.preventDefault();
    setTimeout(function () {
      clearError();
    }, 2500);
    login(loginCredentials.username, loginCredentials.password, from);
  };

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  // Logger selv ud når vi trykker på logout
  useEffect(() => {
    if (isLoggedIn) {
      utils.logout();
      setLoginStatus(!isLoggedIn);
    }
  }, []);

  return (
    <div>
      {/* {console.log(utils)} */}
      <h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" type="text" id="username" />{" "}
        <input placeholder="Password" type="password" id="password" />{" "}
        <button onClick={performLogin}>{loginMsg}</button>
        {console.log(displayError)}
        {displayError.length > 0 ? (
          <p className="alert alert-danger" style={{ width: "415px" }}>
            {displayError}
          </p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
