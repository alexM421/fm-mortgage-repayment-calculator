import React, { useState } from 'react'

import './App.css'
import MortgageCalculator from './components/MortgageCalculator'
import MortgageResults from './components/MortgageResults.Jsx'

function App() {



  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div id="app">
      <MortgageCalculator setSubmittedData={setSubmittedData}/>
      <MortgageResults submittedData={submittedData}/>
    </div>
  )
}

export default App
