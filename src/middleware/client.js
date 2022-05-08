import api from 'src/api';

import {
  FETCH_CLIENTS,
  FETCH_ONE_CLIENT,
  saveNewClient
} from 'src/actions/client';

import {
  fetchClientsToState,
  fetchOneClientToState
} from 'src/actions/client'

import { ADD_NEW_CLIENT } from '../actions/form';

/*
    Un middleware est une fonction qu'on va donner au store
    Le store s'en servira pour traduire des actions vers des effets (autre qu'une modification de state, pour ça il y a le reducer) par ex : du debug, des requetes ajax, des timers, ...
    L'objet action passera tour à tour dans chaque middleware puis arrivera enfin dans le reducer
    Dans un middleware on a accès à:
    - store : et à ses méthodes getState (lecture du state) et dispatch (émission d'intention)
    - next : la fonction qui dit explicitement si on laisse passer ou non une action, si on n'appelle pas next(action) dans le middleware l'action n'arrive pas au middleware/reducer suivant, si on l'appelle l'action passe au middleware/reducer suivant
    - action : l'objet action, l'intention qu'on a intercepté et qu'on va potentiellement traduire
*/
export default (store) => (next) => (action) => {
  switch (action.type) {

    case FETCH_CLIENTS:
      api.get('/users')
        .then(({ data }) => store.dispatch(fetchClientsToState(data)))

      return next(action)

    case FETCH_ONE_CLIENT:
      const { id } = action
      api.get(`/users/${id}`)
        .then(({ data }) => store.dispatch(fetchOneClientToState(data)))

      return next(action)

    case ADD_NEW_CLIENT:
      const { nom, email, adresse, ville, codePostal } = store.getState().inputs
      api.post('/users', {
        nom,
        email,
        adress: {
          adresse,
          ville,
          codePostal
        }
      })
        .then(({ data }) => store.dispatch(saveNewClient(data)))
      return next(action)


    default:
      return next(action);
  }
};
