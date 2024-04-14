// TopicContent.js

import React from 'react';
import './TopicContent.css';

const QuestionCard = ({ question, index, onToggleAnswer, showAnswer }) => {
  const handleToggleAnswer = () => {
    onToggleAnswer(index);
  };

  // Find the index of the correct answer in the options array
  const correctAnswerIndex = question.options.indexOf(question.answer);

  return (
    <>

      <div className="question-card">
        {/* <h3>{question.difficulty} Difficulty</h3> */}
        <p>● {question.question}</p>
        <ol type="A">
          {question.options.map((option, optionIndex) => (
            <li key={optionIndex}>{`${String.fromCharCode(65 + optionIndex)}. ${option}`}</li>
          ))}
        </ol>

        <button className='show-answer-btn' onClick={handleToggleAnswer}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
        {showAnswer && (
          <div>
            <p>
              <strong>Answer:</strong> {`${String.fromCharCode(65 + correctAnswerIndex)}. ${question.answer}`}
            </p>
            <p>
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

const TopicContent = ({ data }) => {
  console.log('Received data:', data); // Add this line for debugging
  const [showAnswers, setShowAnswers] = React.useState(() => Array(data.questions.length).fill(false));

  if (!data) {
    return <div className="topic-content">Select a topic to view its content.</div>;
  }

  const handleToggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <div className="topic-content">
      <h2>{data.name}</h2>
      <ul>
        {data.questions.map((question, index) => (
          <li key={index}>
            <QuestionCard
              question={question}
              index={index}
              onToggleAnswer={handleToggleAnswer}
              showAnswer={showAnswers[index]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicContent;
