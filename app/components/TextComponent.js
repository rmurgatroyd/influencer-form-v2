import React from 'react';
export const Text = ({ label, input, className, placeholder }) => {
  return (
    <div>
      <div>
        {label}
      </div>
      <div>
        <input {...input} placeholder={placeholder} type="text" className={className} />

      </div>
    </div>
  );
}

export default Text;
