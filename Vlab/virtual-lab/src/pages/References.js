import React from 'react';
import './References.css';

const References = () => (
  <div className="references-container">
    <h2 className="references-heading">References</h2>
    
    <p>Here are some useful resources to learn more about Node.js Events:</p>

    <div className="section">
      <h3>URLs</h3>
      <ul>
        <li>
          <a href="https://www.geeksforgeeks.org/node-js-events-module/" target="_blank" rel="noopener noreferrer">
            GeeksforGeeks: Node.js Events Module
          </a>
        </li>
        <li>
          <a href="https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm" target="_blank" rel="noopener noreferrer">
            TutorialsPoint: Node.js EventEmitter
          </a>
        </li>
        <li>
          <a href="https://nodejs.org/api/events.html" target="_blank" rel="noopener noreferrer">
            Official Node.js Documentation: Events
          </a>
        </li>
        <li>
          <a href="https://www.w3schools.com/nodejs/nodejs_events.asp" target="_blank" rel="noopener noreferrer">
            W3Schools: Node.js Events
          </a>
        </li>
      </ul>
    </div>

    <div className="section">
      <h3>Books</h3>
      <ul>
        <li>
          <strong>Node.js Design Patterns</strong> by Mario Casciaro and Luciano Mammino - Covers Node.js core modules, including events, and shows design patterns for effective event handling.
        </li>
        <li>
          <strong>Mastering Node.js</strong> by Sandro Pasquali - Provides an in-depth understanding of Node.js, with dedicated sections on events, event-driven architecture, and building scalable applications.
        </li>
        <li>
          <strong>Pro Node.js for Developers</strong> by Colin J. Ihrig - This book explores Node.js modules, including events, and demonstrates how to handle asynchronous tasks using event-driven programming.
        </li>
      </ul>
    </div>
  </div>
);

export default References;
