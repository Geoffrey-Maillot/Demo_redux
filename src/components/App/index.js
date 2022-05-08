import React from 'react';

// Import Styles
import './styles.css';
import 'semantic-ui-css/semantic.min.css'

// Import Components

// Import container
import NewClient from '../../container/NewClient';
import ClientsContainer from '../../container/ClientsContainer';

// == Composant
const App = () => (
  <div className="app">
    <h1>Démo Redux</h1>
    <NewClient />
    <ClientsContainer />
  </div>
);

// == Export
export default App;
