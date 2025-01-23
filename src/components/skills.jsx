import Card from "./card"
import SectionForm from "./section-form"

function Skills({skill, setSkill, onPosChange, title, sectionTitle, setSectionTitle}) {
    let newId = Object.entries(skill).length;
    const handleFormCreation = () => {
        let skillUpdate = { ...skill, [newId]: 
            {id: newId,
            title: 'Skill title',
            desc: 'Add more precisions (softwares, skill level, project illustrating it, ...)'
            }
        }
        setSkill(skillUpdate)
    }

    let skillsArr= [];
    for (let i = 0; i < Object.entries(skill).length; i++) {
        skillsArr.push(
            skill[i] && (
                    <SectionForm id={i} stateVal={skill} stateFn={setSkill} formType={'skill'} key={i}/>
            )
        )
    }

    return (
        <Card
        onPosChange={onPosChange}
        title={title}
        sectionTitle={sectionTitle}
        setSectionTitle={setSectionTitle}
        sectionClass='skill-card'
        type='skill'
        content={
        <>
            <div className="edit-skill-container">
                {skillsArr}
            </div>
            <button className="add" onClick={(e) => handleFormCreation(e)}>New</button>
        </>
        }/>
    )
}

export default Skills