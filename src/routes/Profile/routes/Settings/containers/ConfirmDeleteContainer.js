import {connect} from 'react-redux';
import * as actions from '../modules/actions';
import * as selectors from '../modules/selectors';
import ConfirmDelete from '../components/ConfirmDelete';

const mapStateToProps = (state) => ({
  isDeleting: selectors.getIsFileDeleting(state),
  isOpen: selectors.getIsDeleteModalOpen(state)
});

export default connect(mapStateToProps, actions)(ConfirmDelete);
