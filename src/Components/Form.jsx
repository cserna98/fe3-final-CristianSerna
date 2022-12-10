import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  const [validation, setValidation] = useState(false)


  const validateName = () => {
    let nameUser = values.name.split("")
    if (nameUser.length < 5) return alert("por favor ingrese Nombre valido ( mas de 5 caracteres)")   
    return true
  }

  const validateEmail = () => {
    let emailUser = values.email.split("@")
    if (emailUser.length < 2) return alert("Email incorrecto, debe contener simbolo de '@' ")   
    return true
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    const newValues = {
      ...values,
      [name]:value,
    }
    setValues(newValues)
    console.log(newValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let nameValidation = validateName()
    let emailValidation = validateEmail()
    if (nameValidation && emailValidation) {
      setValidation(true)
    }

  }

  return (
    <div className="container-formComponent">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="input-form" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="input-form" onChange={handleChange} />
        <button type="submit" className="btn-form">SUBMIT</button>
      </form>
      <div className="container-h3">
      {validation ? <h3 className="h3">Gracias por comunicarse con nosotros {values.name}</h3> : ""}
      </div>
    </div>
  );
};

export default Form;