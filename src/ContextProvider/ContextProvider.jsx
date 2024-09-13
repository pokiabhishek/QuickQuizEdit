

import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addQuestion = (question) => {
    setQuestions((prevQuestions) => [...prevQuestions, question]);
    setEditingIndex(null); 
  };

  const updateQuestion = (index, updatedQuestion) => {
    setQuestions((prevQuestions) => 
      prevQuestions.map((question, i) => (i === index ? updatedQuestion : question))
    );
    setEditingIndex(null);
  };

  const removeQuestion = (index) => {
    setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
  };

  return (
    <QuizContext.Provider value={{ questions, addQuestion, updateQuestion, removeQuestion, startEditing, editingIndex }}>
      {children}
    </QuizContext.Provider>
  );
};

// Export the provider and the custom hook
export { QuizProvider };
export const useQuizContext = () => useContext(QuizContext);
