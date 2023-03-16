import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { List } from './components/list';
import { Posts } from './components/posts';

function App() {
  return (
    <div className="App">
      <>
      {/* <Counter/>
      <List/> */}
      <Posts/>

      </>
      
    </div>
  );
}

export default App;
