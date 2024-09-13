// src/components/AddQuestion.js

import React, { useState, useEffect } from 'react';
import { useQuizContext } from '../../ContextProvider/ContextProvider';
import "./AddQuestion.css";

const AddQuestion = () => {
  const { addQuestion, updateQuestion, editingIndex, questions } = useQuizContext();
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['']);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null); // Track the correct option

  useEffect(() => {
    if (editingIndex !== null) {
      const questionToEdit = questions[editingIndex];
      setQuestionText(questionToEdit.text);
      setOptions(questionToEdit.options);
      setCorrectOptionIndex(questionToEdit.correctOptionIndex ?? null);
    }
    console.log(questions);    
  }, [editingIndex, questions]);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCorrectOptionChange = (index) => {
    setCorrectOptionIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if a correct option is selected
    if (questionText && options.every(option => option.trim() !== '')) {
      if (correctOptionIndex === null) {
        alert('Please select the option.');
        return;
      }
      
      const questionData = { text: questionText, options, correctOptionIndex };
      if (editingIndex !== null) {
        updateQuestion(editingIndex, questionData);
      } else {
        addQuestion(questionData);
      }      
      setQuestionText('');
      setOptions(['']);
      setCorrectOptionIndex(null); 
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='Addquestion'>
      <h2>{editingIndex !== null ? 'Edit Question' : 'Add a Question'}</h2>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Question text"
        className='Question'
      />
      <div>
        {options.map((option, index) => (
          <div key={index} className='OptionContainer'>
            <input
              type="radio"
              name="correctOption"
              checked={correctOptionIndex === index}
              onChange={() => handleCorrectOptionChange(index)}
            />
            <input
              type="text"
              value={option}
              className='Options'
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}         
            />
          </div>
        ))}
        <button type="button" onClick={handleAddOption} className='Add'>Add Option</button>
      </div>
      <button type="submit" className='Submit'>{editingIndex !== null ? 'Update Question' : 'Add Question'}</button>
    </form>
  );
};

export default AddQuestion;
