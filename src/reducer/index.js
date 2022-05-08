
//Le dossier selectors contient les fichiers qui manipule les datas avant de les envoyer dans le state
//Si on a un traitement à faire sur une donnée il passera par la.
import { } from 'src/selectors';

//On importe les actions du fichier action
import {
  CHANGE_FORM_VALUE,
  RESET_FORM
} from 'src/actions/form';

import {
  FETCH_CLIENTS_TO_STATE,
  FETCH_ONE_CLIENT_TO_STATE,
  SAVE_NEW_CLIENT
} from 'src/actions/client'

//On définie les valeurs attribuer à l'initialisation du state
// C'est l'état initial de l'application

const initialState = {
  inputs: {
    nom: '',
    email: '',
    adresse: '',
    ville: '',
    codePostal: '',
  },
  clientsList: [],
  clientDetails: {},
};

// On exporte par default le switch qui se charge de modifier le state du store
// Il prend premier paramètre le state et en second paramètre l'action reçu par le reducer
// Il fait un traitement sur le state en fonction du 'type' d'action reçu
// Il retourne toujours un objet dans lequel il déverse d'abort le state pour garder l'immutabilité,
// Ensuite il remplace le state à modifier par le nouveau.

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FORM_VALUE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        }
      };

    case FETCH_CLIENTS_TO_STATE:

      return {
        ...state,
        clientsList: action.clients
      };

    case FETCH_ONE_CLIENT_TO_STATE:
      return {
        ...state,
        clientDetails: action.client
      }

    case SAVE_NEW_CLIENT:
      return {
        ...state,
        clientsList: [
          ...state.clientsList,
          action.client
        ]
      }

    case RESET_FORM:

      return {
        ...state,
        inputs: {
          nom: '',
          email: '',
          adresse: '',
          ville: '',
          codePostal: '',
        }
      }
    default:
      return state;
  }
};
