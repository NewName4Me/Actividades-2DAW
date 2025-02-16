import React from 'react'
import { Link } from 'react-router-dom'


function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/useQueryExperiment">Use Query Experiment</Link>
        </li>
        <li>
          <Link to="/formularioControlado">Formulario Controlador con objetos</Link>
        </li>
        <li>
          <Link to="/articulos">Filtro por search</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation