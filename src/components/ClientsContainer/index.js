import React from 'react'
import './styles.scss'

// Import Components
import ClientDetail from './ClientDetails';
import ClientsList from './ClientsList';


const ClientsContainer = ({ fetchClients, clients, fetchOneClient, client }) => (
  <div className='clients-container card'>
    <h1>Clients</h1>
    <div className='flex-container'>
      <ClientsList fetchClients={fetchClients} clients={clients} fetchOneClient={fetchOneClient} />
      <ClientDetail client={client} />
    </div>
  </div>
);

export default ClientsContainer;
