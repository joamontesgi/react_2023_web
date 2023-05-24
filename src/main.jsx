import React from 'react'
import ReactDOM from 'react-dom/client'
import CreateCountry from './FormularioPais'
import CountriesList from './CountriesList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateCountry />
    <CountriesList />
  </React.StrictMode>,
)
