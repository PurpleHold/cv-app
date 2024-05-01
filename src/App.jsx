import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import PersonInfo from "./components/personal-info.jsx"
import Training from "./components/training"
import Exp from "./components/experience"
import CVPersInfo from "./components/cv-personal-info"
import CVTraining from "./components/cv-training"
import CVExperience from "./components/cv-experience"
import placeHolder from './assets/placeholder.png'

function App() {
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');
  const [occupation, setOccupation] = useState('Mathematician & Inventor');


  return (
    <>
      <div className="edit-ui">
            <PersonInfo 
            firstName={firstName} setFirstName={setFirstName} 
            lastName={lastName} setLastName={setLastName} 
            occupation={occupation} setOccupation={setOccupation}/>
            <Training />
            <Exp />
      </div>
      <Header />
      <div className="doc-container">
            <div className="paper">
                <div className="output">
                    <CVPersInfo firstName={firstName} lastName={lastName} occupation={occupation} />
                    <div className="cv-pic">
                        <img src={placeHolder} alt="profile picture dimensions, 250 height 200 width pixels" />
                    </div>
                    <CVTraining />
                    <CVExperience />
                </div>
            </div>
        </div>
    </>
  )
}

export default App

/* 
Default Vite-React App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/