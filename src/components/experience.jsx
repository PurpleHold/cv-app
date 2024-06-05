import Card from "./card"
import SectionForm from "./section-form"

function Exp({experience, setExperience}) {

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
        title='Experience' 
        content={
        <>
            <div>
                <div className="cv-train-container">
                    {expArr}
                </div>
            </div>
        </>
        }/>
    )
}

export default Exp