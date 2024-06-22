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
    0:{id:0, title:'Some really interesting degree', orga:'Awesome University', year:'2019', desc:'Any relevant final year project, study trip, dissertation, ...'},
    1:{id:1, title:'Yet another diploma', orga:'Prestigious College', year:'2017', desc:''},
  });
  const [experience, setExperience] = useState({
    0:{id:0, title:'Lead Developer', orga:'Awesome Company', year:'2022 - Now', 
      desc:'Describe here the skills you developped in this organisation, projects completed, challenges addressed. More information about the company/organisation if relevant'
    },
    1:{id:1, title:'UX Designer', orga:'Prestigious Organisation', year:'2019 - 2022', 
      desc:'Describe here the skills you developped in this organisation, projects completed, challenges addressed. More information about the company/organisation if relevant'
    },
  });

  return (
    <>
      <Header />
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
            <Exp 
              experience={experience} setExperience={setExperience}
            />
      </div>
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
                    <CVTraining training = {training}/>
                    <CVExperience experience = {experience}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default App