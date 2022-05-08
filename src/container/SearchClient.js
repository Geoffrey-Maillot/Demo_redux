import { connect } from 'react-redux';
import SearchClient from '../components/SearchClient';
import { changeFormValue } from '../actions/form';


// Les states à passer en props au composant
const mapStateToProps = (state) => ({
  inputs: state.inputs

});

// Les fonctions à passer en props au composant qui dispatchent les actions
const mapDispatchToProps = (dispatch) => ({
  changeFormValue: (name, value) => dispatch(changeFormValue(name, value))

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchClient);