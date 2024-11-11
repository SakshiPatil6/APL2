import React, { useState } from 'react';

function Simulation() {
  const [selectedEvent, setSelectedEvent] = useState('clickEvent');
  const [userInput, setUserInput] = useState('');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const reset = () => {
    setUserInput('');
    setCode('');
    setOutput('');
  };

  const simulateEvent = () => {
    if (selectedEvent === 'clickEvent') {
      setCode(`
        document.querySelector('button').addEventListener('click', () => {
          console.log("Click event triggered. User input: ${userInput}");
        });
      `);
      setOutput(`Click event triggered. User input: ${userInput}`);
    } else if (selectedEvent === 'timeoutEvent') {
      setCode(`
        setTimeout(() => {
          console.log("Timeout reached, executing code now.");
        }, ${userInput});
      `);
      setTimeout(() => {
        setOutput(`Timeout reached, executing code now.`);
      }, parseInt(userInput));
    } else if (selectedEvent === 'intervalEvent') {
      setCode(`
        setInterval(() => {
          console.log("Function executed.");
        }, ${userInput});
      `);
      let intervalId = setInterval(() => {
        setOutput(prev => prev + `Function executed at: ${new Date().toLocaleTimeString()}\n`);
      }, parseInt(userInput));
      setTimeout(() => clearInterval(intervalId), 5000); // stop after 5 seconds
    } else if (selectedEvent === 'emitEvent') {
      setCode(`
        const EventEmitter = require('events');
        const emitter = new EventEmitter();
        emitter.emit("${userInput}", { message: "Hello, world!" });
      `);
      setOutput(`Event '${userInput}' emitted with data: {"message": "Hello, world!"}`);
    } else if (selectedEvent === 'fileReadEvent') {
      setCode(`
        const fs = require('fs');
        fs.readFile('${userInput}', 'utf8', (err, data) => {
          if (err) console.log(err);
          else console.log(data);
        });
      `);
      setOutput(`Reading file: ${userInput}...\nFile content: This is the content of the file.`);
    } else if (selectedEvent === 'errorEvent') {
      setCode(`
        throw new Error("${userInput}");
      `);
      setOutput(`Error event triggered. Error message: ${userInput}`);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Node.js Event Simulation</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        {/* Problem Section */}
        <div style={{ width: '32%', border: '3px solid #555', padding: '30px', backgroundColor: '#d3d3d3', marginRight: '10px', borderRadius: '10px' }}>
          <h2>Problem</h2>
          <select
            value={selectedEvent}
            onChange={handleEventChange}
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: '#fff',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          >
            <option value="clickEvent">Click Event</option>
            <option value="timeoutEvent">Timeout Event</option>
            <option value="intervalEvent">Interval Event</option>
            <option value="emitEvent">Emit Event</option>
            <option value="fileReadEvent">File Read Event</option>
            <option value="errorEvent">Error Event</option>
          </select>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter any input or delay"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: '#fff',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
          <div>
            <button
              onClick={simulateEvent}
              style={{
                padding: '15px 25px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                marginRight: '15px',
                fontSize: '16px',
                borderRadius: '5px',
              }}
            >
              Start
            </button>
            <button
              onClick={reset}
              style={{
                padding: '15px 25px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                borderRadius: '5px',
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Step Execute Section */}
        <div style={{ width: '32%', border: '3px solid #555', padding: '30px', backgroundColor: '#d3d3d3', marginRight: '10px', borderRadius: '10px' }}>
          <h2>Step Execute</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontSize: '16px' }}>{code}</pre>
        </div>

        {/* Result Section */}
        <div style={{ width: '32%', border: '3px solid #555', padding: '30px', backgroundColor: '#d3d3d3', borderRadius: '10px' }}>
          <h2>Result</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontSize: '16px' }}>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default Simulation;
