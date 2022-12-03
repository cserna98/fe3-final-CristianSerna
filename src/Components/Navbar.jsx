import React from 'react'
import {Link} from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to ="/">Home</Link>
      <Link to ="Detail">Details</Link>
      <Link to ="Favs">Favs</Link>
      <Link to ="Contact">Contacts</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar