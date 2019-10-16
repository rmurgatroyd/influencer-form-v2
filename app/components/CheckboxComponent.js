import React from 'react';
export const Checkbox = ({ label, input, value}) => {
  return (
    <label className="checkBox">
        <input {...input} type="checkbox" value={value} className="box" />
        {label}
      </label>
  );
}

export default Checkbox;
