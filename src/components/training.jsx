import Card from "./card"
import TrainingForm from "./training-form"

function Training({
    training, setTraining
    }) {

    return (
        <Card 
        title='Training' 
        content={
            <TrainingForm id={0} training={training} setTraining={setTraining}/>
        }/>
    )
}

export default Training