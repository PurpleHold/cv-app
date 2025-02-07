import { useState } from 'react'
import './App.css'
import {initialSections} from './initial-sections.js'

import Header from './components/header.jsx'
import PersonInfo from "./components/personal-info.jsx"
import CVSection from './components/cv-section.jsx'
import CVPersInfo from "./components/cv-personal-info"
import placeHolder from './assets/placeholder.png'
import AddSection from './components/add-section.jsx'
import InputSection from './components/input-section.jsx'



function App() {
  
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');
  const [occupation, setOccupation] = useState('Mathematician & Inventor');
  const [location, setLocation] = useState('Ockham, Surrey, UK');
  const [email, setEmail] = useState('noemailin1852@email.com');
  const [phone, setPhone] = useState('XX.XX.XX.XX');
  const [website, setWebsite] = useState('');
  const [pic, setPic] = useState(placeHolder);

  const [newSection, setNewSection] = useState(initialSections);

  const renderNewSections = () => {
    let cardsList = [];
    newSection.map((section) => {
      if (!section.parentId) {
        cardsList.push(
          <InputSection sectionId={section.id} key={section.id} 
          allSections={newSection} setSection={setNewSection}/>
        )
      }
    })
    return cardsList;
  }

  const onPicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPic(URL.createObjectURL(e.target.files[0]))
        console.log(URL.createObjectURL(e.target.files[0]))
        console.log(e.target.files[0])
      }
    else {console.log('else')}
}

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
              pic={pic} setPic={setPic} onPicChange={onPicChange}
            />
            {/*
            <Training 
              title={sectionTitle[0]} sectionTitle={sectionTitle} setSectionTitle={setSectionTitle}
              training={training} setTraining={setTraining} onPosChange={onPosChange}
            />
            <Exp
              title={sectionTitle[1]} sectionTitle={sectionTitle} setSectionTitle={setSectionTitle}
              experience={experience} setExperience={setExperience} onPosChange={onPosChange}
            />
            <Skills
              title={sectionTitle[2]} sectionTitle={sectionTitle} setSectionTitle={setSectionTitle}
              skill={skill} setSkill={setSkill} onPosChange={onPosChange}
            />
            */}
            {renderNewSections()}
            <AddSection stateVal={newSection} stateFn={setNewSection}/>
            
      </div>
      <div className="doc-container">
            <div className="paper">
                <div className="output">
                    <CVPersInfo 
                      firstName={firstName} lastName={lastName} 
                      occupation={occupation} 
                      location={location} email={email} phone={phone} website={website}
                      pic={pic}
                    />
                    <div className="cv-pic">
                        <img src={pic} alt="profile picture dimensions, 250 height 200 width pixels" />
                    </div>
                    <div className="cv-left">
                      <div className="contents">
                        {/*leftPos && renderCol('left')*/}
                        <CVSection allSections={newSection} side={'left'} custom={true}/>
                      </div>
                    </div>
                    <div className="cv-right">
                      <div className="contents">
                        {/*rightPos && renderCol('right')*/}
                        <CVSection allSections={newSection} side={'right'} custom={true}/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App