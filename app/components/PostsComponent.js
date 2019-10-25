import React from 'react'
import { Field} from 'redux-form'
import Text from 'components/TextComponent'
import renderDropdownList from 'components/DropdownComponent'
import renderDateTimePicker from 'components/DatePickerComponent'

export const renderPosts = ({ fields, meta: {error} }) => (
  <div className="mediaType">
    {fields.map((post, index) =>
      <div className="postContainer" key={index}>
        <Field
          name={`${post}.postType`}
          component={renderDropdownList}
          defaultValue={"Post"}
          data={["Post", "Story", "Video"]}
          />
          <Field
      name={`${post}.date`}
      showTime={false}
      component={renderDateTimePicker}
    />

          <button className="postButton remove" type="button" onClick={() => fields.remove(index)}>- Remove Post</button>
      </div>

    )}
{error && <div>{error}</div>}
    <button className="postButton add" type="button" onClick={() => fields.push({})}>+ Add Post</button>
  </div>
)

export default renderPosts
