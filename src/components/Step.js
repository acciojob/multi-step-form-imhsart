import React from 'react';

const Step = ({ stepCount, cardError, dateError, handleStepCount, formData, handleChange, handleSubmit }) => {
  return (
    <form className='form' onSubmit={handleSubmit}>

      <div id='step1' style={{ display: stepCount === 1 ? 'block' : 'none' }}>
        <h3>Customer Details</h3>
        <label htmlFor='first_name'>First Name:</label>
        <input type='text' id='first_name' value={formData.first_name} onChange={handleChange} />
        <label htmlFor='last_name'>Last Name:</label>
        <input type='text' id='last_name' value={formData.last_name} onChange={handleChange} />
        <div className='btn-container'>
          <button type='button' onClick={() => handleStepCount(1)}>Next</button>
        </div>
      </div>

      <div id='step2' style={{ display: stepCount === 2 ? 'block' : 'none' }}>
        <h3>Car Details</h3>
        <label htmlFor='model'>Brand:</label>
        <input type='text' id='model' value={formData.model} onChange={handleChange} />
        <label htmlFor='car_price'>Model:</label>
        <input type='text' id='car_price' value={formData.car_price} onChange={handleChange} />
        <div className='btn-container'>
          <button type='button' onClick={() => handleStepCount(-1)}>Previous</button>
          <button type='button' onClick={() => handleStepCount(1)}>Next</button>
        </div>
      </div>

      <div id='step3' style={{ display: stepCount === 3 ? 'block' : 'none' }}>
        <h3>Payment Details</h3>
        <label htmlFor='card_info'>Credit Card Number:</label>
        <input type='text' id='card_info' value={formData.card_info} onChange={handleChange} />
        <p className='validation'>{cardError}</p>
        <label htmlFor='expiry_date'>Expiration Date:</label>
        <input type='text' id='expiry_date' value={formData.expiry_date} onChange={handleChange} />
        <p className='validation'>{dateError}</p>
        <div className='btn-container'>
          <button type='button' onClick={() => handleStepCount(-1)}>Previous</button>
          <button type='submit'>Submit</button>
        </div>
      </div>

    </form>
  );
};

export default Step;