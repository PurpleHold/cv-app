import Card from "./card"
import SectionForm from "./section-form"

function Exp({experience, setExperience, onPosChange}) {
    let newId = Object.entries(experience).length;
    const handleFormCreation = () => {
        let xpUpdate = { ...experience, [newId]: 
            {id: newId,
            title: 'Position',
            orga: 'Organisation / Company name',
            year: 'YEAR'}
        }
        setExperience(xpUpdate)
    }

    let expArr = [];
    for (let i = 0; i < Object.entries(experience).length; i++) {
        expArr.push(
            experience[i] && (
                    <SectionForm id={i} stateVal={experience} stateFn={setExperience} formType={'xp'} key={i}/>
            )
        )
    }

    return (
        <Card 
        onPosChange={onPosChange}
        title='Experience'
        sectionClass='exp-card'
        type='xp'
        content={
        <>
            <div className="edit-xp-container">
                {expArr}
            </div>
            <button className="add" onClick={(e) => handleFormCreation(e)}>New</button>
        </>
        }/>
    )
}

export default Exp