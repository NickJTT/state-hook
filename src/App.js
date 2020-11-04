import React from 'react';
import './App.css';
import HookCounter from './components/hookCounter/hookCounter';
import HookName from './components/hookName/hookName';
import HookItems from './components/hookItems/hookItems';

function App() {
  return (
    <React.Fragment>
      <HookCounter/>
      <HookName/>
      <HookItems/>
    </React.Fragment>
  );
}

export default App;
