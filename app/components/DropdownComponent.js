import React from 'react';
import { DropdownList } from 'react-widgets'

export const renderDropdownList = ({ input, data, valueField, textField, defaultValue }) => {
  return (
    <DropdownList {...input}
      className="dropdown"
      data={data}
      valueField={valueField}
      textField={textField}
      defaultValue={defaultValue}
     />
   )
}
export default renderDropdownList;
