import { useState } from 'react'
import './App.css'
import {initialSections, initialHead} from './initial-sections.js'
//import { bdlSections, bdlHead } from '../bdl-sections.js'
import placeHolder from './assets/placeholder.png'
//import picGreen from '../picGreen.png'

import Header from './components/header.jsx'
import PersonInfo from "./components/personal-info.jsx"
import CVSection from './components/cv-section.jsx'
import CVPersInfo from "./components/cv-personal-info"
import AddSection from './components/add-section.jsx'
import InputSection from './components/input-section.jsx'



function App() {

  let head = initialHead;
  let sections = initialSections;
  
  const [firstName, setFirstName] = useState(head.firstName);
  const [lastName, setLastName] = useState(head.lastName);
  const [occupation, setOccupation] = useState(head.occupation);
  const [location, setLocation] = useState(head.location);
  const [email, setEmail] = useState(head.email);
  const [phone, setPhone] = useState(head.phone);
  const [website, setWebsite] = useState(head.website);
  const [pic, setPic] = useState(placeHolder);
  const [tags, setTags] = useState(head.tags);

  const [newSection, setNewSection] = useState(sections);

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
              tags={tags} setTags={setTags}
              pic={pic} setPic={setPic} onPicChange={onPicChange}
            />
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
                      tags={tags}
                      pic={pic}
                    />
                    <div className="cv-pic">
                        <img src={pic} alt="profile picture dimensions, 250 height 200 width pixels" />
                    </div>
                    <div className="cv-left">
                      <div className="contents">
                        <CVSection allSections={newSection} side={'left'} custom={true}/>
                      </div>
                    </div>
                    <div className="cv-right">
                      <div className="contents">
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