import { connect } from 'react-redux';
import NewClient from '../components/NewClient';
import { addNewClient, changeFormValue, resetForm } from '../actions/form';


// Les states à passer en props au composant
const mapStateToProps = (state) => ({
  inputs: state.inputs

});

// Les fonctions à passer en props au composant qui dispatchent les actions
const mapDispatchToProps = (dispatch) => ({
  changeFormValue: (name, value) => dispatch(changeFormValue(name, value)),
  addNewClient: () => dispatch(addNewClient()),
  resetForm: () => dispatch(resetForm())

});

export default connect(mapStateToProps, mapDispatchToProps)(NewClient);