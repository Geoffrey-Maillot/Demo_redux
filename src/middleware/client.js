import api from 'src/api';

import {
  FETCH_USERS,
  FETCH_ONE_USER
} from 'src/actions/client';

import {
  fetchUsersToState,
  fetchOneUserToState
} from 'src/actions/client'

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
  // console.log('Passage dans le middleware', action);
  switch (action.type) {

    case FETCH_USERS:
      api.get('/users')
        .then(({ data }) => store.dispatch(fetchUsersToState(data)))

      return next(action)

    case FETCH_ONE_USER:
      console.log(action)
      const { id } = action
      api.get(`/users/${id}`)
        .then(({ data }) => store.dispatch(fetchOneUserToState(data)))

      return next(action)


    default:
      return next(action);
  }
};
