import React, { useState } from "react";
import FormInput from "./components/form-input/form-input.component";
import "./App.css";
import CustomForm from "./components/custom-form/custom-form.component";

function App() {
  const defaultFormFields = {
    username: "",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    ssn: "",
    sageSalesperson: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    username,
    firstname,
    middlename,
    lastname,
    email,
    password,
    ssn,
    sageSalesperson,
  } = formFields;

  const sageFields = [
    { label: "Some Different Field", type: "text", name:"differentField"},
    { label: "Some Different Field2", type: "text", name:"differentField2"},
    { label: "Some Different Field3", type: "text", name:"differentField3"},
  ]

  const emailSuffix = "@marmicfire.com";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // functionality: create email address, create salesperson number, create password
  // take first letter of firstname and full last name for email address
  // take first letter of firstname, middleInitial, and lastname to create sage salesperson
  // take first 3 letters of last name and last 4 of ss# for ST PW

  const createMarmicEmail = () => {
    var firstInitial = firstname.slice(0, 1);

    var marmicEmail = firstInitial + lastname + emailSuffix;
    marmicEmail = marmicEmail.toLowerCase();
    return marmicEmail;
  };

  const createSTPassword = () => {
    var serviceTradeInitials = lastname.slice(0, 3).toUpperCase();
    var serviceTradePassword = serviceTradeInitials + "#" + ssn;
    console.log("ST PW: " + serviceTradePassword);
    return serviceTradePassword;
  };

  const createSageInitials = () => {
    var firstInitial = firstname.slice(0, 1).toUpperCase();
    var middleInitial = middlename.slice(0, 1).toUpperCase();
    var lastInitial = lastname.slice(0, 1).toUpperCase();
    var sageInitials = firstInitial + middleInitial + lastInitial;
    sageInitials = sageInitials.toUpperCase();
    return sageInitials;
  };

  const createTemplateInformation = (e) => {
    e.preventDefault();
    var sage = createSageInitials();
    var stPW = createSTPassword();
    var mEmail = createMarmicEmail();

    setFormFields({
      ...formFields,
      username: mEmail,
      email: mEmail,
      password: stPW,
      sageSalesperson: sage,
    });
  };

  return (
    <div>
      <CustomForm sharedFields={sageFields} distinctFields={sageFields} />
        <form className="container-col" onSubmit={createTemplateInformation}>
          {/* <FormInput
            label="First Name" inputOptions={{
              required: true,
              type: "text",
              name: "firstname",
              value: firstname,
              onChange: handleChange,
            }} />
          <FormInput
            label="Middle Name" inputOptions={{
              required: true,
              type: "text",
              name: "middlename",
              value: middlename,
              onChange: handleChange,
            }} />
          <FormInput
            label="Last Name" inputOptions={{
              required: true,
              type: "text",
              name: "lastname",
              value: lastname,
              onChange: handleChange,
            }} />
          <FormInput
            label="Last 4 of SSN" inputOptions={{
              required: true,
              maxLength: 4,
              type: "password",
              name: "ssn",
              value: ssn,
              onChange: handleChange,
            }} />
          <FormInput
            label="Marmic Email" inputOptions={{
              type: "email",
              name: "email",
              value: email,
              onChange: handleChange,
            }} />
          <FormInput
            label="Sage Salesperson No." inputOptions={{
              type: "text",
              name: "sageSalesperson",
              value: sageSalesperson,
              onChange: handleChange,
            }} /> */}
        

        <button type="submit">submit</button>
      </form>
      <hr />

      <div className="container-row">
        <p>
          <span className="header">ServiceTrade Email Template</span>
          Your new user has been created in ServiceTrade with the following
          credentials:
          <br />
          <br />
          Username: {username} <br />
          Password: {password} <br />
          <br />
          This temporary password can be changed at any point by clicking this{" "}
          <a href="https://app.servicetrade.com/auth/recover">link</a>. <br />
          <br />
          In Sage, their tech salesperson initials for reporting are:{" "}
          {sageSalesperson}. <br />
          <br />
          Please let us know if we can be of further assistance.
        </p>
        <p>
          <span className="header">Other Template Header</span>
          Your new user has been created in ServiceTrade with the following
          credentials:
          <br />
          <br />
          Username: <br />
          Password: <br />
          <br />
          This temporary password can be changed at any point by clicking this{" "}
          <a href="https://app.servicetrade.com/auth/recover">link</a>. <br />
          <br />
          DON'T FORGET: Office Staff must also use the ServiceTrade Extender on
          their web browser. If they sync their work account with Chrome
          (preferred) this will automatically install for them. Otherwise, they
          can use this{" "}
          <a href="https://docs.google.com/document/d/1rBrPMu2zFwBWP39uGfKzYVc8IAzKc6QXgCjiC_C8R1M/edit">
            document
          </a>{" "}
          to learn more.
          <br />
          <br />
          They have been added as a Sage user with the following credentials:{" "}
          <br />
          <br />
          Username: <br />
          Password: <br />
          <br />
          DON’T FORGET: To access Sage, they will need to set up Citrix with
          these{" "}
          <a href="https://docs.google.com/document/d/1s-MzGooanv1EnPfjHPj9Lf1n8Z6X7sZIdFs2w093uJc/edit#heading=h.kmo1oejv1w8q">
            instructions
          </a>
          . The password for Citrix itself will match their Google account, but
          their Sage credentials are shown above. Please let us know if we can
          be of further assistance.
        </p>
      </div>
    </div>
  );
}

export default App;
