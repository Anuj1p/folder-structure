import React, { useState } from 'react';
import './App.css';
import Folder from './components/Folder';
import explorer from './data/folderData';
import Input from './Input';

function App() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // }

  // const handleEmailChange = e => {
  //   setEmail(e.target.value)
  // }

  // console.log(name, email);
  return (
    <div className="App">
      <Folder data={explorer} />
      {/* <Input 
        handleNameChange={handleNameChange} 
        handleEmailChange={handleEmailChange}
      /> */}
    </div>
  );
}

export default App;
