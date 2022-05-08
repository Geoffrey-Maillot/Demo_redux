import React from 'react'
import './styles.scss'

// Import Components
import ClientDetail from './ClientDetails';
import ClientsList from './ClientsList';


const ClientsContainer = ({ fetchUsers, clients, fetchOneUser, client }) => (
  <div className='clients-container card'>
    <h1>Clients</h1>
    <div className='flex-container'>
      <ClientsList fetchUsers={fetchUsers} clients={clients} fetchOneUser={fetchOneUser} />
      <ClientDetail client={client} />
    </div>
  </div>
);

export default ClientsContainer;
