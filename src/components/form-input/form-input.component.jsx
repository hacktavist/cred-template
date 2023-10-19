const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="container-col">
      {label && <label>{label}</label>}
      <input className="form-input" {...inputOptions} />
    </div>
  );
};

export default FormInput;
