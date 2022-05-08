// Actions list
export const FETCH_CLIENTS = 'FETCH_CLIENTS'
export const FETCH_ONE_CLIENT = 'FETCH_ONE_CLIENT'

export const FETCH_CLIENTS_TO_STATE = 'FETCH_CLIENTS_TO_STATE '
export const FETCH_ONE_CLIENT_TO_STATE = 'FETCH_ONE_CLIENT_TO_STATE '

export const SAVE_NEW_CLIENT = 'SAVE_NEW_CLIENT'

// Actions creator
export const fetchClients = () => ({
  type: FETCH_CLIENTS,
});

export const fetchOneClient = (id) => ({
  type: FETCH_ONE_CLIENT,
  id
});

export const fetchClientsToState = (clients) => ({
  type: FETCH_CLIENTS_TO_STATE,
  clients
});

export const fetchOneClientToState = (client) => ({
  type: FETCH_ONE_CLIENT_TO_STATE,
  client
});

export const saveNewClient = (client) => ({
  type: SAVE_NEW_CLIENT,
  client
})