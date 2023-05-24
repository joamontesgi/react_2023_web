import React, { useEffect, useState } from 'react';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/countries/')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/countries/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
        } else {
          console.error('Error al eliminar el país:', data.error);
        }
      })
      .catch(error => console.error('Error al realizar la llamada a la API:', error));
  };



  return (
    <div className='container text-center'>
      <h1>Lista de Países</h1>
      {countries.map(country => (
        <div key={country.id}>
          <div className='card'>
            <p>Nombre del país: {country.name}</p>
            <p>Población: {country.population}</p>
          </div>
            <button onClick={() => handleDelete(country.id)} className='btn btn-danger btn-sm mt-4'>Eliminar</button>
            <Link></Link>
            <button onClick={() => handleUpdate(country.id)} className='btn btn-warning btn-sm mt-4'>Actualizar</button> 
          <hr />

        </div>
      ))}
    </div>
  );
};

export default CountriesList;
