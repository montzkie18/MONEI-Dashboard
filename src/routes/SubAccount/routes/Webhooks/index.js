import Webhooks from './containers/WebhooksContainer';
import {injectReducer} from 'store/reducers';
import reducer, {stateKey} from './modules/reducer';

export default (store) => {
  injectReducer(store, {key: stateKey, reducer});
  return {
    path: 'webhooks',
    component: Webhooks
  };
};
