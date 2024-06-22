import Card from "./card"
import SectionForm from "./section-form"

function Training({training, setTraining}) {
    
    let trainingsArr = [];
    for (let i = 0; i < Object.entries(training).length; i++) {
        trainingsArr.push(
            training[i] && (
                    <SectionForm id={i} stateVal={training} stateFn={setTraining} formType={'train'} key={i}/>
            )
        )
    }

    let newId = Object.entries(training).length;

    const handleFormCreation = () => {
                let trainingsUpdate = { ...training, [newId]: 
                    {id: newId,
                    title: 'Degree Name',
                    orga: 'University Name',
                    year: 'YEAR'}
                }
                setTraining(trainingsUpdate)

    }

    return (
        <Card 
        title='Training'
        sectionClass={'train-card'}
        content={
            <>
                <div className="edit-train-container">
                    {trainingsArr}
                </div>
                <button className="add" onClick={(e) => handleFormCreation(e)}>New</button>
            </>
        }/>
    )
}

export default Training