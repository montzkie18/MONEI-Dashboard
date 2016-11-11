import * as types from './types';
import {SET_PROFILE_SANDBOX} from 'modules/profile/types';
import {mergeArrays} from 'lib/utils';
import {combineReducers} from 'redux';

export const stateKey = 'subAccounts';

const ids = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_SUB_ACCOUNTS_REQUEST:
      return [];
    case types.FETCH_SUB_ACCOUNTS_SUCCESS:
      return mergeArrays(state, action.ids);
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SUB_ACCOUNTS_REQUEST:
      return {};
    case types.FETCH_SUB_ACCOUNTS_SUCCESS:
      return Object.assign({}, state, action.byId);
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_SUB_ACCOUNTS_REQUEST:
      return true;
    case types.FETCH_SUB_ACCOUNTS_SUCCESS:
    case types.FETCH_SUB_ACCOUNTS_FAIL:
      return false;
    default:
      return state;
  }
};

const isUpToDate = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_SUB_ACCOUNTS_SUCCESS:
      return true;
    case SET_PROFILE_SANDBOX:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  byId,
  isFetching,
  isUpToDate
});
