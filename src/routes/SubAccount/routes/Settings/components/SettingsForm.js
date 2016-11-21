import React, {PropTypes} from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import Select, {SelectItem} from 'components/Select';

const SettingsForm = ({
  fields: {
    customName,
    bankAccountId
  },
  handleSubmit,
  invalid,
  onFormSubmit,
  isFetching,
  bankAccounts,
  isLoading
}) => {
  return (
    <div className="ui stackable grid">
      <form className="ui form nine wide column" onSubmit={handleSubmit(onFormSubmit)}>
        <Input type="text" {...customName} />
        <Select
          label="Bank account"
          hint="where you want your money to be settled"
          loading={isFetching}
          {...bankAccountId}>
          {bankAccounts.map((sender, i) => (
            <SelectItem
              key={i}
              value={bankAccounts.id}>
              {bankAccounts.last4Digits}
            </SelectItem>
          ))}
        </Select>
        <Button
          primary
          loading={isLoading}
          type="submit"
          disabled={invalid || isLoading}>
          Update
        </Button>
      </form>
    </div>
  );
};

SettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
  bankAccounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default SettingsForm;
