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


  

  const [rightPos, setRightPos] = useState([0]);
  const [leftPos, setLeftPos] = useState([0,1]);

  let dataIds = {
    left:[
      {data:training,type:'train',name:'Training', id:'L0'},
      {data:experience,type:'xp',name:'Experience', id:'L1'},
    ],
    right:[
      {data:skill,type:'skill',name:'Skills', id:'R0'},
    ],
  }
  let dataMap = new Map();

  const onPosChange = (type, move) => {
    let min = 0;
    let id = dataMap.get(`${type}`);

    if (id[0] > 0) {
      let max = (dataIds.right.filter((obj) => obj.data!='')).length-1;
      console.log(max);
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
      let max = (dataIds.left.filter((obj) => obj.data!='')).length-1;
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

  const renderCol = (side) => {
    let compsList = [];
    if (side == 'right') {
      for (let i = 0; i < rightPos.length; i++) {
        let val = rightPos[i];
        compsList.push(<CVSection dataObj={dataIds.right[val].data} sectionType={dataIds.right[val].type} 
          sectionName={dataIds.right[val].name} pos={val} key={dataIds.right[val].id}/>)
          dataMap.set(`${dataIds.right[val].type}`, [1, val])
      }
      return compsList;
    }
    else if (side == 'left') {
      for (let i = 0; i < leftPos.length; i++) {
        let val = leftPos[i];
        compsList.push(<CVSection dataObj={dataIds.left[val].data} sectionType={dataIds.left[val].type} 
          sectionName={dataIds.left[val].name} pos={val} key={dataIds.left[val].id}/>)
          dataMap.set(`${dataIds.left[val].type}`, [0, val])
      }
      return compsList;
    }
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
            />
            <Training 
              training={training} setTraining={setTraining} onPosChange={onPosChange}
            />
            <Exp 
              experience={experience} setExperience={setExperience} onPosChange={onPosChange}
            />
            <Skills 
              skill={skill} setSkill={setSkill} pos={rightPos[0]} onPosChange={onPosChange}
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