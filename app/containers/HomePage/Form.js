import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import FormComponent from 'components/FormComponent';
import 'react-widgets/dist/css/react-widgets.css'
import './style.css'
import { connect } from 'react-redux'



let SelectingFormValuesForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, usageFee, influencerFee, total, formValues, otherDeliverable} = props
  const onSubmit = (formValues) => {
    console.log('submitting Form: ', formValues);
  }

  return (
    <div className="formContainer">
    <FormComponent
      influencerName="Zoe Sugg"
      handleSubmit={handleSubmit(onSubmit)}
      reset={reset}
      pristine={pristine}
      submitting={submitting}
      total={total}
      influencerFee = {influencerFee}
      usageFee = {usageFee}
      formValues={formValues}
      otherDeliverable={otherDeliverable}
    />
  </div>
  );
}


// Decorate with connect to read form values
const selector = formValueSelector('influencerForm') // <-- same as form name
SelectingFormValuesForm = connect(state => {
  // can select values individually
  const influencerFee = selector(state, 'influencerFee') || 0
  const usageFee = selector(state, 'usageFee') || 0
  const total = "£ " + (Number(influencerFee) + Number(usageFee))
  const otherDeliverable = selector(state, 'otherDeliverable')
  // or together as a group
  return {
    influencerFee,
    usageFee,
    total,
    otherDeliverable
  }
})(SelectingFormValuesForm)

SelectingFormValuesForm = reduxForm({
  form: 'influencerForm',
})(SelectingFormValuesForm)

export default SelectingFormValuesForm
