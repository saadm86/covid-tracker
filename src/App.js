import React from 'react'
import CenteredGrid from './Components/Cards'
import './App.css'
import NativeSelects from './Components/Countrypicker'

function App() {

  return (
    <div>
      <h1 className='heading'>COVID Tracker - Pakistan</h1>
      <CenteredGrid />
      <NativeSelects />
    </div>
  );
}

export default App;
