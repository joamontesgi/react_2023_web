import React, { useState } from 'react';

const CreateCountry = () => {
  const [name, setName] = useState('');
  const [population, setPopulation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const countryData = {
      name: name,
      population: population
    };

    fetch('http://127.0.0.1:8000/api/countries/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(countryData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('País creado exitosamente:', data);
      })
      .catch(error => console.error('Error al crear el país:', error));

    setName('');
    setPopulation('');
  };

  return (
    <div className='container text-center'>
      <h1>Crear País</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className='form-control' /> 
        </div>
        <div>
          <label>Población:</label>
          <input type="text" value={population} onChange={(e) => setPopulation(e.target.value)}   className='form-control' /> 
        </div>
        <button type="submit" className='btn btn-primary btn-sm mt-4'>Guardar</button> 
      </form>
    </div>
  );
};

export default CreateCountry;
