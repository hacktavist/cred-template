import React, {useState} from "react";
import FormInput from "../form-input/form-input.component";

const CustomForm = ({ sharedFields, distinctFields }) => {
    const initialFormData = {
      ...sharedFields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {}),
      ...distinctFields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {}),
    };
  


    const [formData, setFormData] = useState(initialFormData);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form data submitted:", formData);
    };
  
    return (
        <form>
            {sharedFields.map((field) => {
                {<h2>I am Rendering</h2>}
                console.log(field);
                <FormInput 
                    key={field.name} 
                    label={field.label} 
                    inputOptions={{
                        type: field.type,
                        name:field.name,
                        value:formData[field.name], 
                        onChange: handleInputChange
                    }} 
                />
            })}

        </form>
    )
  };
  
  export default CustomForm;