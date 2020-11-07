import React from 'react';
import MessageList from '../containers/message_list'

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="assets/images/logo.png" alt="logo" />
      </div>
      <MessageList />
    </div>
  );
};

export default App;
