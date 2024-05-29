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
  const [location, setLocation] = useState('Ockham, Surrey, UK');
  const [email, setEmail] = useState('noemailin1852@email.com');
  const [phone, setPhone] = useState('XX.XX.XX.XX');
  const [website, setWebsite] = useState('');

  const [training, setTraining] = useState({
    0:{id:'ex1', title:'Some really interesting degree', univ:'Awesome University', year:'1835'},
    1:{id:'ex2', title:'Yet another diploma', univ:'Prestigious College', year:'1838'},
  });

  return (
    <>
      <div className="edit-ui">
            <PersonInfo 
              firstName={firstName} setFirstName={setFirstName} 
              lastName={lastName} setLastName={setLastName} 
              occupation={occupation} setOccupation={setOccupation} 
              location = {location} setLocation={setLocation}
              email = {email} setEmail={setEmail}
              phone={phone} setPhone={setPhone}
              website={website} setWebsite={setWebsite}
            />
            <Training 
              training={training} setTraining={setTraining}
            />
            <Exp />
      </div>
      <Header />
      <div className="doc-container">
            <div className="paper">
                <div className="output">
                    <CVPersInfo 
                      firstName={firstName} lastName={lastName} 
                      occupation={occupation} 
                      location={location} email={email} phone={phone} website={website}
                    />
                    <div className="cv-pic">
                        <img src={placeHolder} alt="profile picture dimensions, 250 height 200 width pixels" />
                    </div>
                    <CVTraining 
                      training = {training}
                    />
                    <CVExperience />
                </div>
            </div>
        </div>
    </>
  )
}

export default App