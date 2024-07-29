import React, { useState } from 'react';

const SectionPriceSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='price'>
      <h1>Price</h1>
      <div className="slidecontainer">
        <input
          type="range"
          min="0"
          max="500"
          value={value}
          className="slider"
          id="myRange"
          onChange={handleChange}
        />
        <p><span id="demo">{value}</span></p>
      </div>
    </div>
  );
};

export default SectionPriceSlider;