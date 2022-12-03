import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <label htmlFor="UserName">Username</label>
        <input type="text" />

        <label htmlFor="password">password</label>
        <input type="password" />
      </form>
    </div>
  );
};

export default Form;
