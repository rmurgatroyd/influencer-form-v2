import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import Text from 'components/TextComponent'
import renderPosts from 'components/PostsComponent'



export const FormComponent = (props) => {
  const { handleSubmit, pristine, reset, submitting, influencerName, total } = props
  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="section">
        <h1>{influencerName}</h1>
      </div>
      <div className="section">
          <h2>Influencer fee</h2>
          <div className="fees">
            <h3>How much are you paying {influencerName.split(' ').shift()} for the agreed deliverables?</h3>
            <Field
            name={`influencerFee`}
            type="text"
            component={Text}/>
          </div>
          <h2>Usage fee</h2>
          <div className="fees">
            <h3>Are you paying {influencerName.split(' ').shift()} a usage fee for this content?</h3>
            <Field
            name={`usageFee`}
            type="text"
            component={Text}/>
          </div>
        <div>
          <h2>Total fee:{total}</h2>
        </div>
      </div>
      <div className="section">
        <h2>Social Deliverables</h2>
        <h3>What posts have you asked {influencerName.split(' ').shift()} to do?</h3>
        <div>
          <h4>INSTAGRAM</h4>
          <FieldArray name="instagram" component={renderPosts}/>
        </div>
        <div>
          <h4>YOUTUBE</h4>
          <FieldArray name="youtube" component={renderPosts}/>
        </div>
        <div>
          <h4>FACEBOOK</h4>
          <FieldArray name="facebook" component={renderPosts}/>
        </div>
      </div>
      <div className="buttons">
        <button className = "cancel" type="button" disabled={pristine || submitting} onClick={reset}>Cancel</button>
        <button className = "submit" type="submit" disabled={submitting}>Save</button>
      </div>
    </form>
  )
}

export default FormComponent;
