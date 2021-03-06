import {createSelector} from 'reselect';
import {stateKey} from './reducer';

const authSelector = state => state[stateKey];

export const getIsAuthenticated = createSelector(
  authSelector,
  auth => auth.isAuthenticated
);

export const getIsAuthenticating = createSelector(
  authSelector,
  auth => auth.isAuthenticating
);

