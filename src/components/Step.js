import React from 'react';

const Step = ({ stepCount, cardError, dateError, handleStepCount, formData, handleChange, handleSubmit }) => {
  return (
    <form
      key={stepCount}
      className='form'
      id={stepCount === 1 ? 'step1' : stepCount === 2 ? 'step2' : 'step3'}
      onSubmit={handleSubmit}
    >
      {stepCount === 1 && (
        <>
          <h3>Customer Details</h3>
          <label htmlFor='first_name'>First Name:</label>
          <input type='text' id='first_name' value={formData.first_name} onChange={handleChange} />
          <label htmlFor='last_name'>Last Name:</label>
          <input type='text' id='last_name' value={formData.last_name} onChange={handleChange} />
          <div className='btn-container'>
            <button type='button' onClick={() => handleStepCount(1)}>Next</button>
          </div>
        </>
      )}

      {stepCount === 2 && (
        <>
          <h3>Car Details</h3>
          <label htmlFor='model'>Brand:</label>
          <input type='text' id='model' value={formData.model} onChange={handleChange} />
          <label htmlFor='car_price'>Model:</label>
          <input type='text' id='car_price' value={formData.car_price} onChange={handleChange} />
          <div className='btn-container'>
            <button type='button' onClick={() => handleStepCount(-1)}>Prev</button>
            <button type='button' onClick={() => handleStepCount(1)}>Next</button>
          </div>
        </>
      )}

      {stepCount === 3 && (
        <>
          <h3>Payment Details</h3>
          <label htmlFor='card_info'>Credit Card Number:</label>
          <input type='text' id='card_info' value={formData.card_info} onChange={handleChange} />
          <p className='validation'>{cardError}</p>
          <label htmlFor='expiry_date'>Expiration Date:</label>
          <input type='text' id='expiry_date' value={formData.expiry_date} onChange={handleChange} />
          <p className='validation'>{dateError}</p>
          <div className='btn-container'>
            <button type='button' onClick={() => handleStepCount(-1)}>Prev</button>
            <button type='submit'>Submit</button>
          </div>
        </>
      )}
    </form>
  );
};

export default Step;