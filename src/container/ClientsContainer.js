import { connect } from 'react-redux';
import ClientsContainer from 'src/components/ClientsContainer'
import { fetchUsers, fetchOneUser } from 'src/actions/client';


// Les states à passer en props au composant
const mapStateToProps = (state) => ({
  clients: state.clientsList,
  client: state.clientDetails

});

// Les fonctions à passer en props au composant qui dispatchent les actions
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchOneUser: (id) => dispatch(fetchOneUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);