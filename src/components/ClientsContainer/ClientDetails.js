import React from 'react'

// Import styles
import './styles.scss'

const ClientDetail = ({ client }) => (
  <div className='client-details card'>
    <h2>Détails</h2>
    <p>{JSON.stringify(client)}</p>
  </div>
);

export default ClientDetail;
