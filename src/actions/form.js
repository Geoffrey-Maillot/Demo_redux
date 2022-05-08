//Action lists
// On stocke le type de l'actions dans une variable pour limiter le risque d'erreur 
export const CHANGE_FORM_VALUE = 'CHANGE_FORM_VALUE'
export const ADD_NEW_CLIENT = 'ADD_NEW_CLIENT'
export const RESET_FORM = 'RESET_FORM'


// Action creator
// On exporte une fonction qui retourne notre objet d'action
export const changeFormValue = (name, value) => ({
  type: CHANGE_FORM_VALUE,
  name,
  value
})

export const addNewClient = () => ({
  type: ADD_NEW_CLIENT,
})

export const resetForm = () => ({
  type: RESET_FORM
})