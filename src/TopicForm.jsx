// src/PollForm.js
import React, { useState } from 'react';
import './TopicForm.css';


function PollForm() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the backend)
    console.log({ question, options });
  };
// src/PollForm.js
// ...
// src/PollForm.js
// ...

return (
    <div>
      <h2>Create a New Poll</h2>
      <form onSubmit={handleSubmit}>
        <div className="question-container">
          <label>Topic: </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className = "question-input"
          />
        </div>
        <div className="options-container">
          <label>Options:</label>
          {options.map((option, index) => (
  <div key={index}>
    <input
      type="text"
      value={option}
      onChange={(e) => handleOptionChange(index, e.target.value)}
      className="topics-input"
    />
    <button
      type="button"
      className="remove-button"
      onClick={() => removeOption(index)}
    >
      &#x2716; {/* 'X' icon */}
    </button>
  </div>
))}



          <button type="button" onClick={addOption}>
            Add Option
          </button>
        </div>
        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
  
}

export default PollForm;
