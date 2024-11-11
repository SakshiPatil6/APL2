import React from 'react';
import './Procedure.css'; 

const Procedure = () => {
  return (
    <div className="procedure-content">
      <h3>Procedure</h3>
      <p>Follow these steps to experiment with Node.js events:</p>
      <ol>
        <li>
          <strong>Initialize Event Emitter:</strong> Import the `events` module and create an instance of `EventEmitter`. This object will manage your custom events.
        </li>
        <li>
          <strong>Define Events:</strong> Use `emitter.on(eventName, listener)` to define event listeners. This function tells Node.js what code to execute when the event is emitted.
        </li>
        <li>
          <strong>Trigger Events:</strong> Use `emitter.emit(eventName, ...args)` to emit the event you’ve created. This will run the listener code associated with that event.
        </li>
        <li>
          <strong>Use Data in Events:</strong> Pass data to event listeners by including arguments in `emit()`. This is useful for sending dynamic data when the event is triggered.
        </li>
        <li>
          <strong>Handle Errors:</strong> Define a listener for an `error` event to handle any errors emitted by `EventEmitter`. By default, Node.js will throw an error if an `error` event has no listeners.
        </li>
        <li>
          <strong>Remove Listeners:</strong> Use `emitter.removeListener(eventName, listener)` to detach listeners when they’re no longer needed, helping optimize memory usage.
        </li>
        <li>
          <strong>Verify Execution:</strong> Log messages or use a debugger to ensure your events are being emitted and handled as expected.
        </li>
      </ol>
    </div>
  );
};

export default Procedure;
