import React, { useState } from 'react';
import './Pretest.css';

const Pretest = () => {
  const questions = [
    {
      question: "What is the purpose of the EventEmitter class in Node.js?",
      options: [
        "To manage file operations.",
        "To handle HTTP requests.",
        "To handle and emit events.",
        "To manage asynchronous I/O.",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which method is used to emit events in Node.js?",
      options: ["emit()", "on()", "trigger()", "fire()"],
      correctAnswer: 0,
    },
    {
      question: "How do you register an event listener in Node.js?",
      options: ["listen()", "register()", "on()", "emit()"],
      correctAnswer: 2,
    },
    {
      question: "What does the 'once' method do in Node.js events?",
      options: [
        "Listens for an event multiple times.",
        "Emits an event only once.",
        "Listens for an event only once.",
        "Removes an event listener after it fires once.",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which module provides the EventEmitter class in Node.js?",
      options: ["events", "http", "stream", "path"],
      correctAnswer: 0,
    },
    {
      question: "How can you remove an event listener in Node.js?",
      options: ["remove()", "detach()", "off()", "removeListener()"],
      correctAnswer: 3,
    },
    {
      question: "How can data be passed to an event listener in Node.js?",
      options: [
        "Using the 'args' property.",
        "Passing arguments to emit().",
        "Using the 'data' property.",
        "Attaching it to the listener.",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the role of the 'removeAllListeners' method?",
      options: [
        "It clears all listeners for a specific event.",
        "It removes only one listener for an event.",
        "It emits the event for all listeners.",
        "It adds multiple listeners to an event.",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which method returns the count of listeners for a specific event?",
      options: ["listenerCount()", "countListeners()", "getListeners()", "allListeners()"],
      correctAnswer: 0,
    },
    {
      question: "How do you create a new EventEmitter instance?",
      options: [
        "new EventEmitter()",
        "EventEmitter.create()",
        "new events.EventEmitter()",
        "EventEmitter.new()",
      ],
      correctAnswer: 2,
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: optionIndex });
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
      <h2 className="heading">Node.js Events Pre-Test</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <h3 className="question-text">{question.question}</h3>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option-block">
                <label
                  className={`option-label ${
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
                    onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                    disabled={submitted}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}

        {!submitted ? (
          <button type="submit" className="submit-button">
            Submit Quiz
          </button>
        ) : (
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

export default Pretest;
