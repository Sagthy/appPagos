/* global localStorage */
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { Mes } from './components/Mes'
import './styles/App.css'

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const pagosConst = [
  {
    nombre: 'Patente',
    mensual: false,
    meses: ['Enero']
  },
  {
    nombre: 'Contribución',
    mensual: false,
    meses: ['Febrero']
  },
  {
    nombre: 'Seguro',
    mensual: false,
    meses: ['Octubre', 'Noviembre', 'Diciembre']
  },
  {
    nombre: 'Primaria',
    mensual: false,
    meses: ['Mayo', 'Agosto', 'Octubre']
  },
  {
    nombre: 'Universidad',
    mensual: true
  },
  {
    nombre: 'UTE Salto',
    mensual: true
  },
  {
    nombre: 'UTE Mdeo',
    mensual: true
  },
  {
    nombre: 'OSE',
    mensual: true
  },
  {
    nombre: 'Cardio',
    mensual: true
  },
  {
    nombre: 'Gastos comunes Salto',
    mensual: true
  },
  {
    nombre: 'Gastos comunes Mdeo',
    mensual: true
  },
  {
    nombre: 'OCA',
    mensual: true
  },
  {
    nombre: 'Cable',
    mensual: true
  },
  {
    nombre: 'Netflix',
    mensual: true
  },
  {
    nombre: 'Centro Médico',
    mensual: true
  },
  {
    nombre: 'Veterinaria',
    mensual: true
  },
  {
    nombre: 'Teléfono',
    mensual: true
  },
  {
    nombre: 'Caja Profesional',
    mensual: true
  },
  {
    nombre: 'Sereno',
    mensual: true
  }
]

const App = () => {
  const [indiceInicio, setIndiceInicio] = useState(new Date().getMonth() - 1 < 0 ? 0 : new Date().getMonth() - 1)

  const mostrarMeses = () => {
    return meses.slice(indiceInicio, indiceInicio + 3).map((mes) => (
      <Mes key={mes} mes={mes} pagos={pagosConst} />
    ))
  }

  const handleNextClick = () => {
    if (indiceInicio + 1 < meses.length - 2) {
      setIndiceInicio(indiceInicio + 1)
    }
  }

  const handlePreviousClick = () => {
    if (indiceInicio - 1 >= 0) {
      setIndiceInicio(indiceInicio - 1)
    }
  }

  const handleResetClick = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <main>
      <h1>PAGOS PENDIENTES
        <br />💸💸💸💸<br />
      </h1>
      <div className='buttonContainer'>
        <button className='myButton' onClick={handlePreviousClick}>Anterior</button>
        <button className='myButton' onClick={handleNextClick}>Siguiente</button>
      </div>
      <section className='mesesYPagos'>
        {mostrarMeses()}
      </section>
      <div className='buttonContainer'>
        <button className='myButton-reset' onClick={handleResetClick}>Reset</button>
      </div>
      <div className='absolute' />

    </main>
  )
}

export default App
