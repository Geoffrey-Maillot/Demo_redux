import React from 'react'

// Semantic Ui
import { Button } from 'semantic-ui-react'

// Import Styles
import './styles.scss'

const ClientsList = ({ fetchUsers, fetchOneUser, clients = [] }) => {
  console.log(fetchUsers)
  return (
    <div className='clients-list card'>
      <h2>liste</h2>
      {clients.map((client) => (
        <p onClick={() => fetchOneUser(client.id)} style={{ border: '1px solid black', padding: '10px 5px', cursor: 'pointer' }} key={client.name}>{client.name}</p>
      ))}
      <Button onClick={fetchUsers} primary>Charger tous les clients</Button>
    </div>
  )
};

export default ClientsList;
