import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import MaterialLayoutView from './MaterialLayout';
import {getIsAuthenticated} from 'modules/auth/selectors';
import {getProfile, getIsWaiting} from 'modules/profile/selectors';
import * as actions from 'modules/auth/actions';
import {connect as connectToNotifications} from 'modules/notifications/actions';
import queryString from 'query-string';

class MaterialLayout extends Component {
  static propTypes = {
    finalizeAuth: PropTypes.func.isRequired,
    getTokenInfo: PropTypes.func.isRequired,
    signInWithToken: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    profile: PropTypes.object
  };

  componentWillMount() {
    const hash = queryString.parse(location.hash);
    if (hash.id_token) {
      this.props.signInWithToken(hash.id_token);
    }
  }

  componentDidMount() {
    const {profile, isAuthenticated, finalizeAuth, getTokenInfo} = this.props;
    if (isAuthenticated) {
      getTokenInfo();
      finalizeAuth(profile);
    }
  }

  render() {
    return (
      <MaterialLayoutView {...this.props} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: getProfile(state),
  isWaiting: getIsWaiting(state),
  isAuthenticated: getIsAuthenticated(state),
  isPlain: ownProps.routes && ownProps.routes.some(r => r.isPlain)
});

export default connect(mapStateToProps, {...actions, connectToNotifications})(MaterialLayout);
