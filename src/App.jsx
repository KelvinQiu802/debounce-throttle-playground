import './App.css';
import React from 'react';
import Counter from './components/counter';
import Input from './components/Input';

function App() {
  return (
    <div className='App'>
      <Counter />
      <hr />
      <Input />
    </div>
  );
}

export default App;
