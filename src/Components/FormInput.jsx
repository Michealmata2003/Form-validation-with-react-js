import React, { useState } from 'react'
import "./formInput.css"


const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const{label, errorMessage, onChange, id, ...inputprops } = props;
  const handleFocused = (e) =>{
    setFocused(true );
  }
  return (
    <div className='formInput'>
      <label >{label}</label>
      <input {...inputprops} 
      onChange={onChange}
       onBlur={handleFocused}
       onFocus={() => inputprops.name==="confirmPassword" && setFocused(true ) }
       focused={focused.toString()}/>
      <span>{errorMessage} </span>
    </div>
  )
}

export default FormInput;
