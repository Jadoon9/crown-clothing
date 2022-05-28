import React from 'react';
import './form-input.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      {label && (
        <div className='group'>
          <input className='form-input' {...otherProps} />
          <label
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        </div>
      )}
    </>
  );
};

export default FormInput;
