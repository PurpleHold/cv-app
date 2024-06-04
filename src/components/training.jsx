import Card from "./card"
import TrainingForm from "./training-form"

function Training({
    training, setTraining
    }) {
    
    let trainingsArr = [];
    for (let i = 0; i < Object.entries(training).length; i++) {
        trainingsArr.push(
            training[i] && (
                    <TrainingForm id={i} training={training} setTraining={setTraining} key={i}/>
            )
        )
    }

    let newId = Object.entries(training).length;

    const handleFormCreation = () => {
                let trainingsUpdate = { ...training, [newId]: 
                    {id: newId,
                    title: 'Degree Name',
                    univ: 'University Name',
                    year: 'XXXX'}
                }
                setTraining(trainingsUpdate)

    }

    return (
        <Card 
        title='Training'
        sectionClass={'training'} 
        content={
            <>
            <div>
                <div className="cv-train-container">
                    {trainingsArr}
                </div>
            </div>
                <button className="add" onClick={(e) => handleFormCreation(e)}>New</button>
            </>
        }/>
    )
}

export default Training