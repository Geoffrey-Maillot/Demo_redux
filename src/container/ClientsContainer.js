import { connect } from 'react-redux';
import ClientsContainer from 'src/components/ClientsContainer'
import { fetchClients, fetchOneClient } from 'src/actions/client';


// Les states à passer en props au composant
const mapStateToProps = (state) => ({
  clients: state.clientsList,
  client: state.clientDetails

});

// Les fonctions à passer en props au composant qui dispatchent les actions
const mapDispatchToProps = (dispatch) => ({
  fetchClients: () => dispatch(fetchClients()),
  fetchOneClient: (id) => dispatch(fetchOneClient(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);