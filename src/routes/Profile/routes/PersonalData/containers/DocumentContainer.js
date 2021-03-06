import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getProfile, getIsVerificationRequested} from 'modules/profile/selectors';
import * as selectors from 'routes/Profile/modules/selectors';
import * as actions from 'routes/Profile/modules/actions';
import DocumentView from '../components/DocumentView';

class Document extends Component {
  static propTypes = {
    documentName: PropTypes.string,
    fetchFileUrl: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {documentName, fetchFileUrl} = this.props;
    if (documentName) fetchFileUrl(documentName);
  }

  componentWillUpdate({documentName}) {
    if (documentName && documentName !== this.props.documentName) {
      this.props.fetchFileUrl(documentName);
    }
  }

  render() {
    return (
      <DocumentView {...this.props} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  disabled: getIsVerificationRequested(state) || ownProps.disabled,
  documentName: getProfile(state).documentName,
  documentUrl: selectors.getFileUrl(state),
  isUploading: selectors.getIsFileUploading(state)
});

export default connect(mapStateToProps, actions)(Document);
