import React, { useState } from 'react';
import './Posttest.css';

const Posttest = () => {
  const questions = [
    {
      question: "Which method is used to listen for events in Node.js?",
      options: [
        "a) listen()",
        "b) emit()",
        "c) on()",
        "d) trigger()"
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of the 'once' method in the EventEmitter class?",
      options: [
        "a) It emits an event once.",
        "b) It removes an event listener after the first time it is called.",
        "c) It listens for an event only once.",
        "d) It clears all listeners for a specific event."
      ],
      correctAnswer: 2,
    },
    {
      question: "Which method would you use to remove all listeners for a specific event?",
      options: [
        "a) removeAllListeners()",
        "b) remove()",
        "c) offAll()",
        "d) stopListeners()"
      ],
      correctAnswer: 0,
    },
    {
      question: "What does the 'listeners' method in Node.js return?",
      options: [
        "a) A count of all listeners.",
        "b) An array of all listeners for a specific event.",
        "c) A boolean indicating if listeners exist.",
        "d) A string with event names."
      ],
      correctAnswer: 1,
    },
    {
      question: "Which module provides the EventEmitter class?",
      options: [
        "a) events",
        "b) fs",
        "c) path",
        "d) http"
      ],
      correctAnswer: 0,
    },
    {
      question: "How can you check the count of listeners for a particular event?",
      options: [
        "a) eventCount()",
        "b) countListeners()",
        "c) listenerCount()",
        "d) getListenersCount()"
      ],
      correctAnswer: 2,
    },
    {
      question: "What will happen if an error is emitted and no error listener is registered?",
      options: [
        "a) The error will be ignored.",
        "b) Node.js will throw an unhandled 'error' event.",
        "c) The error will be logged in the console.",
        "d) The process will continue without interruption."
      ],
      correctAnswer: 1,
    },
    {
      question: "How can you add multiple listeners to the same event in Node.js?",
      options: [
        "a) Use the on() method multiple times.",
        "b) Use addMultipleListeners().",
        "c) Use chainListeners().",
        "d) Use the once() method."
      ],
      correctAnswer: 0,
    },
    {
      question: "How do you pass data to an event handler in Node.js?",
      options: [
        "a) Pass arguments directly to the on() method.",
        "b) Use the emit() method with arguments.",
        "c) Attach data to the handler.",
        "d) Bind data to the listener."
      ],
      correctAnswer: 1,
    },
    {
      question: "What happens when you register multiple 'on' handlers for the same event?",
      options: [
        "a) Only the last handler will be called.",
        "b) All handlers will be executed in the order they were registered.",
        "c) The handlers will be executed in random order.",
        "d) Node.js throws an error."
      ],
      correctAnswer: 1,
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const score = Object.keys(userAnswers).filter(
    (questionIndex) =>
      userAnswers[questionIndex] === questions[questionIndex].correctAnswer
  ).length;

  return (
    <div className="quiz-container">
      <h2 className="heading">Node.js Events Post-Test</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <h3 className="question-text">{question.question}</h3>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option-block">
                <label
                  className={`option ${
                    submitted &&
                    userAnswers[questionIndex] === optionIndex &&
                    optionIndex !== question.correctAnswer
                      ? 'incorrect-option'
                      : submitted && optionIndex === question.correctAnswer
                      ? 'correct-option'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    onChange={() =>
                      handleAnswerChange(questionIndex, optionIndex)
                    }
                    disabled={submitted}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}

        {!submitted && (
          <button type="submit" className="submit-button">
            Submit Quiz
          </button>
        )}

        {submitted && (
          <div className="score-block">
            <h4>
              Your score: {score} out of {questions.length}
            </h4>
          </div>
        )}
      </form>
    </div>
  );
};

export default Posttest;
