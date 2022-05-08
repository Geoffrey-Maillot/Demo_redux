//Action lists
// On stocke le type de l'actions dans une variable pour limiter le risque d'erreur 
export const CHANGE_FORM_VALUE = 'CHANGE_FORM_VALUE'


// Action creator
// On exporte une fonction qui retourne notre objet d'action
export const changeFormValue = (name, value) => ({
  type: CHANGE_FORM_VALUE,
  name,
  value
})
