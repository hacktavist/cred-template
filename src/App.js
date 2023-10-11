import React, { useState } from "react";
import "./App.css";

function App() {
  const defaultFormFields = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    sageSalesperson: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, firstname, lastname, email, password, sageSalesperson } =
    formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="App">
      <form>
        <label>Marmic Email </label>
        <input name="username" onChange={handleChange} type="text" />
        <br />
        <label>password </label>
        <input name="password" onChange={handleChange} type="text" />
        <br />
        <label>Sage salesperson No. </label>
        <input name="sageSalesperson" onChange={handleChange} type="text" />
      </form>
      <hr />
      <p>
        Your new user has been created in ServiceTrade with the following
        credentials:
        <br />
        Username: {username} <br />
        Password: {password} <br />
        This temporary password can be changed at any point by clicking this{" "}
        <a href="https://app.servicetrade.com/auth/recover">link</a>. <br />
        In Sage, their tech salesperson initials for reporting are:{" "}
        {sageSalesperson}. <br />
        Please let us know if we can be of further assistance.
      </p>
    </div>
  );
}

export default App;
