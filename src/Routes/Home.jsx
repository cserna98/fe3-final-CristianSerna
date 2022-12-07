import React from 'react'
import Card from '../Components/Card'
import { GlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {theme} = GlobalContext()
  console.log(theme)
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <div></div>
      </div>
    </main>
  )
}

export default Home