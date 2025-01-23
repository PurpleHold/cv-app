import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import PersonInfo from "./components/personal-info.jsx"
import Training from "./components/training"
import Skills from './components/skills.jsx'
import Exp from "./components/experience"
import CVSection from './components/cv-section.jsx'
import CVPersInfo from "./components/cv-personal-info"
import placeHolder from './assets/placeholder.png'

function App() {
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');
  const [occupation, setOccupation] = useState('Mathematician & Inventor');
  const [location, setLocation] = useState('Ockham, Surrey, UK');
  const [email, setEmail] = useState('noemailin1852@email.com');
  const [phone, setPhone] = useState('XX.XX.XX.XX');
  const [website, setWebsite] = useState('');
  const [pic, setPic] = useState(placeHolder)
  const [sectionTitle, setSectionTitle] = useState(['Training', 'Experience', 'Skills'])

  const [training, setTraining] = useState({
    0:{id:0, title:'Some really interesting degree', orga:'Awesome University', year:'2019', desc:'Any relevant final year project, study trip, dissertation, ...'},
    1:{id:1, title:'Yet another diploma', orga:'Prestigious College', year:'2017', desc:''},
  });
  const [experience, setExperience] = useState({
    0:{id:0, title:'Lead Developer', orga:'Awesome Company', year:'2022 - Now', 
      desc:'Describe here the skills you developped in this organisation, projects completed, challenges addressed. More information about the company/organisation if relevant'
    },
    1:{id:1, title:'UX Designer', orga:'Prestigious Organisation', year:'2019 - 2022', 
      desc:''
    },
  });
  const [skill, setSkill] = useState({
    0:{id:0, title:'Skill1', desc:'Some desc'},
    1:{id:1, title:'Skill2', desc:'Some other desc'},
  });

  const [rightPos, setRightPos] = useState([2]);
  const [leftPos, setLeftPos] = useState([0,1]);

  let dataIds = [
      {data:training,type:'train',name:sectionTitle[0]},
      {data:experience,type:'xp',name:sectionTitle[1]},
      {data:skill,type:'skill',name:sectionTitle[2]},
    ];

  let dataMap = new Map();
  // Initialize first positions
  dataMap.set('train', [0,0])
  dataMap.set('xp', [0,1])
  dataMap.set('skill', [1,2])

  const onPosChange = (type, move, direction) => {
    let min = 0;
    let id = dataMap.get(`${type}`);

    if (direction == 'ver') {
      if (id[0] > 0) {
        let max = rightPos.length-1;
        let pos = rightPos.findIndex((x) => x == id[1]);
        let newPos = pos + move;
  
        if ((newPos < min) || newPos > max) {
          return;
        }
        let posUpdate = [...rightPos];
        move == 1 ? [posUpdate[newPos], posUpdate[pos]] = [posUpdate[pos], posUpdate[newPos]] :
        [posUpdate[pos], posUpdate[newPos]] = [posUpdate[newPos], posUpdate[pos]];
        setRightPos(posUpdate);
  
        dataMap.set(`${type}`, [1, newPos]);
        return;
      }
      else {
        let max = leftPos.length-1;
        let pos = leftPos.findIndex((x) => x == id[1]);
        let newPos = pos + move;
  
        if ((newPos < min) || newPos > max) {
          return;
        }
        let posUpdate = [...leftPos];
        move == 1 ? [posUpdate[newPos], posUpdate[pos]] = [posUpdate[pos], posUpdate[newPos]] :
        [posUpdate[pos], posUpdate[newPos]] = [posUpdate[newPos], posUpdate[pos]];
        setLeftPos(posUpdate);
  
        dataMap.set(`${type}`, [1, newPos]);
        return;
      }
    }
    else if (direction == 'hor') {
      if (move+id[0] <= -1 || move+id[0] >= 2) {
        //Outside limits
        return;
      }
      //if right col
      if (id[0] > 0) {
        
        if (rightPos.length > 1) {
          //Update current array to remove component val
          let rightPosUpdate = rightPos.filter((val) => val != id[1]);
          setRightPos(rightPosUpdate);
        }
        else if (rightPos.length == 1) {
          setRightPos([]);
        }
        //place val as first item of new col
        let leftPosUpdate = [id[1], ...leftPos];
        setLeftPos(leftPosUpdate);
        //change col in Map, keep same val
        dataMap.set(`${type}`, [0, id[1]]);
        return;
      }
      else {
        if (leftPos.length > 1) {
          //Update current array to remove component val
          let leftPosUpdate = leftPos.filter((val) => val != id[1]);
          setLeftPos(leftPosUpdate);
        }
        else if (leftPos.length == 1) {
          setLeftPos([]);
        }
        //place val as first item of new col
        let rightPosUpdate = [id[1], ...rightPos];
        setRightPos(rightPosUpdate);
        //change col in Map, keep same val
        dataMap.set(`${type}`, [1, id[1]]);
        return;
      }
    }
  }

  const renderCol = (side) => {
    let compsList = [];
    if (side == 'right') {
      for (let i = 0; i < rightPos.length; i++) {
        let val = rightPos[i];
        compsList.push(<CVSection dataObj={dataIds[val].data} sectionType={dataIds[val].type} 
          sectionName={dataIds[val].name} pos={val} key={dataIds[val].type}/>)
          dataMap.set(`${dataIds[val].type}`, [1, val])
      }
      return compsList;
    }
    else if (side == 'left') {
      for (let i = 0; i < leftPos.length; i++) {
        let val = leftPos[i];
        compsList.push(<CVSection dataObj={dataIds[val].data} sectionType={dataIds[val].type} 
          sectionName={dataIds[val].name} pos={val} key={dataIds[val].type}/>)
          dataMap.set(`${dataIds[val].type}`, [0, val])
      }
      return compsList;
    }
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
                        {leftPos && renderCol('left')}
                      </div>
                    </div>
                    <div className="cv-right">
                      <div className="contents">
                        {rightPos && renderCol('right')}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App