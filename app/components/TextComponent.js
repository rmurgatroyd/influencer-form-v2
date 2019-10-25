import React from 'react';
import { validate } from '../containers/HomePage/validate.js'

export const Text = ({ label, input, className, placeholder, meta:{error, touched} }) => {
  return (
    <div>
      <div>
        {label}
      </div>
      <div>
        <input {...input} placeholder={placeholder} type="text" className={className} />
        {touched && (error && (
          <div>
            {error}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Text;
