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
              occupation={occupation} setOccupation={setOccupation} 
            />
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