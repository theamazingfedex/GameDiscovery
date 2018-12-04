import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from '../components/Settings';
import * as LibraryActions from '../actions/library';

function mapStateToProps(state) {
  return {
    library: state.library
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LibraryActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
