import {reduxForm} from 'redux-form';
import * as actions from '../modules/actions';
import SaveWebhook from '../components/SaveWebhook';
import * as selectors from '../modules/selectors';
import Validator from 'validatorjs';

const rules = {
  url: 'url|required',
  webhookState: 'required',
  events: 'required'
};

const validate = values => {
  const validator = new Validator(values, rules);
  validator.passes();
  return validator.errors.all();
};

const mapStateToProps = (state, props) => {
  const webhook = selectors.getActiveWebhook(state);
  return {
    webhook: {
      ...webhook,
      channelId: props.subAccountId,
      slug: 'transaction'
    },
    initialValues: webhook,
    isOpen: selectors.getIsSaveModalOpen(state),
    isSaving: selectors.getIsSaving(state)
  };
};

export default reduxForm({
  form: 'saveWebhook',
  fields: ['url', 'webhookState', 'events'],
  validate
}, mapStateToProps, actions)(SaveWebhook);
