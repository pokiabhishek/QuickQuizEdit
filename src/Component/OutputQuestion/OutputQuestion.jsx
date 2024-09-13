// src/components/OutputQuestion.js

import React from "react";
import { useQuizContext } from "../../ContextProvider/ContextProvider";
import "./OutputQuestion.css";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const OutputQuestion = () => {
  const { questions, removeQuestion, startEditing } = useQuizContext();

  return (
    <div className="OutputQuestion">
      <h2>Questions List</h2>
      {questions.length === 0 ? (
        <p>No questions added yet.</p>
      ) : (
        <ol>
          {questions.map((question, index) => (
            <li key={index}>
              <input readOnly value={question.text} className="Output" />               
                <IconButton
                  onClick={() => startEditing(index)}
                  color="primary"
                  aria-label="Edit question"
                >
                  <Edit />
                </IconButton>
                <IconButton
                  onClick={() => removeQuestion(index)}
                  color="secondary"
                  aria-label="Delete question"
                >
                  <Delete />
                </IconButton>
              
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default OutputQuestion;
