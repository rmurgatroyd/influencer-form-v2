import React from 'react'
import { Field, FieldArray, FormSection, reduxForm } from 'redux-form'
import Text from 'components/TextComponent'
import renderPosts from 'components/PostsComponent'
import Checkbox from 'components/CheckboxComponent'



export const FormComponent = (props) => {
  const { handleSubmit, pristine, reset, submitting, influencerName, total, formValues, otherDeliverable } = props
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
            component={Text}
          className="textcontainer poundBackground"/>
          </div>
          <h2>Usage fee</h2>
          <div className="fees">
            <h3>Are you paying {influencerName.split(' ').shift()} a usage fee for this content?</h3>
            <Field
            name={`usageFee`}
            type="text"
            component={Text}
          className="textcontainer poundBackground"/>
          </div>
        <div>
          <h2>Total fee:{total}</h2>
        </div>
      </div>
      <FormSection name="deliverables" className="section">
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
      </FormSection>
      <div className="section">
        <div className="other">
        <Field
          component={Checkbox}
          label="Event"
          value="event"
          name="event"/>
        <Field
          component={Checkbox}
          label="Influencer blog content"
          value="influencerBlogContent"
          name="influencerBlogContent"/>
        <Field
          component={Checkbox}
          label="Brand website content"
          value="brandWebsiteContent"
          name="brandWebsiteContent"/>
        <Field
          component={Checkbox}
          label="Newsletter"
          value="newsletter"
          name="newsletter"/>
        <Field
          component={Checkbox}
          label="In-store appearance"
          value="inStoreAppearance"
          name="inStoreAppearance"/>
        <Field
          component={Checkbox}
          label="Other"
          value="otherDeliverable"
          name={`otherDeliverable`}/>
        </div>
          {otherDeliverable ?
            (
              <Field
                component={Text}
                name="otherPaidContent"
              type="text"
              className="othertextcontainer"
              placeholder="Other paid content"
            />
            ) : ''
      }
      </div>
      <div className="buttons">
        <button className = "cancel" type="button" disabled={pristine || submitting} onClick={reset}>Cancel</button>
        <button className = "submit" type="submit" disabled={submitting}>Save</button>
      </div>
    </form>
  )
}

export default FormComponent;
