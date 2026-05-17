import React, { useState } from "react";
import '../styles/App.css';
import Step from "./Step";

const App = () => {
  const [stepCount, setStepCount] = useState(1);
  const [cardError, setCardError] = useState('');
  const [dateError, setDateError] = useState('');
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', model: '', car_price: '', card_info: '', expiry_date: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData, 'data');
    setFormData({ first_name: '', last_name: '', model: '', car_price: '', card_info: '', expiry_date: '' });
  }

  function handleStepCount(num) {
    setStepCount(prev => prev + num);
  }

  function handleChange(e) {
    const objkey = e.target.id;
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [objkey]: value }));

    if (objkey === 'card_info') {
      setCardError(value.length !== 12 ? 'Credit card number must be exactly 12 digits long.' : '');
    }
    if (objkey === 'expiry_date') {
      setDateError(!value.match(/^\d{2}\/\d{2}$/) ? 'Expiration date must be in the format MM/YY.' : '');
    }
  }

  return (
    <Step
      stepCount={stepCount}
      dateError={dateError}
      handleChange={handleChange}
      cardError={cardError}
      handleSubmit={handleSubmit}
      formData={formData}
      handleStepCount={handleStepCount}
    />
  );
};

export default App;