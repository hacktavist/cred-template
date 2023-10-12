import React, { useState } from "react";
//import "./App.css";

function App() {
  const defaultFormFields = {
    username: "",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    sageSalesperson: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    username,
    firstname,
    middlename,
    lastname,
    password,
    ssn,
    sageSalesperson,
  } = formFields;
  // const emailSuffix = "@marmicfire.com";
  var firstInitial = "";
  var middleInitial = "";
  var lastInitial = "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // functionality: create email address, create salesperson number, create password
  // take first letter of firstname and full last name for email address
  // take first letter of firstname, middleInitial, and lastname to create sage salesperson
  // take first 3 letters of last name and last 4 of ss# for ST PW

  const getInitials = () => {
    firstInitial = firstname.slice(0, 1);
    middleInitial = middlename.slice(0, 1);
    lastInitial = lastname.slice(0, 1);
    var initials = [];
    initials.push(firstInitial, middleInitial, lastInitial);

    return initials;
  };

  const createSTPassword = () => {
    //var serviceTradeInitials = lastname.slice(0,3).toUpperCase();
  };

  const createSageInitials = () => {
    var initials = getInitials();
    console.log(initials);
    var sageInitials = "";
    // var pw = getInitials();
    // console.log("this is pw: " + pw);
    // setFormFields({ ...formFields, password: pw });
  };

  const createTemplateInformation = (e) => {
    e.preventDefault();
    createSageInitials();
  };

  return (
    <div className="App">
      <form onSubmit={createTemplateInformation}>
        <label>Firstname: </label>
        <input name="firstname" onChange={handleChange} type="text" />
        <br />
        <label>Middle: </label>
        <input name="middlename" onChange={handleChange} type="text" />
        <br />
        <label>Last Name: </label>
        <input name="lastname" onChange={handleChange} type="text" />
        <br />
        <label>SSN: </label>
        <input name="ssn" onChange={handleChange} type="text" />
        <br />
        <label>Marmic Email </label>
        <input name="username" onChange={handleChange} type="text" />
        <br />

        <br />
        <label>Sage salesperson No. </label>
        <input name="sageSalesperson" onChange={handleChange} type="text" />
        <button type="submit">submit</button>
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
