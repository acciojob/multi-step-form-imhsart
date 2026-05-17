import React, {useState} from 'react'

const Step = ({stepCount, cardError, dateError, handleStepCount, formData, handleChange, handleSubmit}) => {

  const [currFormData, setCurrFormData] = useState({})
  

  if(stepCount === 1){
    return (
      <form className='form' id='step1' onSubmit={handleSubmit}>
        <h3>Customer Details</h3>
        <label htmlFor='first_name'>First Name:</label>
        <input type='text' id='first_name' value={formData.first_name} onChange={handleChange}></input>
        <label htmlFor='last_name'>Last Name:</label>
        <input type='text' id='last_name' value={formData.last_name} onChange={handleChange}></input>
        <div className='btn-container'>
          <button type='button' onClick={() => handleStepCount(1)}>Next</button>
        </div>
      </form>
    )
  }

  if(stepCount === 2){
    return (
      <form className='form' id='step2' onSubmit={handleSubmit}>
        <h3>Car Details</h3>
        <label htmlFor='model'>Brand:</label>
        <input type='text' id='model' value={formData.model} onChange={handleChange}></input>
        <label htmlFor='car_price'>Model:</label>
        <input type='text' id='car_price' value={formData.car_price} onChange={handleChange}></input>
        <div className='btn-container'>
          <button type='button' onClick={() => handleStepCount(-1)}>Prev</button>
          <button type='button' onClick={() => handleStepCount(1)}>Next</button>
        </div>
      </form>
    )
  }
  return (
      <form className='form' id='step3' onSubmit={handleSubmit}>
        <h3>Payment Details</h3>
        <label htmlFor='card_info'>Credit Card Number:</label>
        <input type='text' id='card_info' value={formData.card_info}  onChange={handleChange}></input>
        <p className='validation'>{cardError}</p>
        <label htmlFor='expiry_date'>Expiration Date:</label>
        <input type='text' id='expiry_date' value={formData.expiry_date} onChange={handleChange}></input>
        <p className='validation'>{dateError}</p>
        <div className='btn-container'>
          <button type='button' onClick={() => handleStepCount(-1)}>Prev</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
  )
}

export default Step