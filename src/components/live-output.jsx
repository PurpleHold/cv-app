import placeHolder from '../assets/placeholder.png'
import CVPersInfo from "./cv-personal-info"
import CVTraining from "./cv-training"
import CVExperience from "./cv-experience"

function LiveOutput() {
    return (
        <div className="doc-container">
            <div className="paper">
                <div className="output">
                    <CVPersInfo />
                    <div className="cv-pic">
                        <img src={placeHolder} alt="profile picture dimensions, 250 height 200 width pixels" />
                    </div>
                    <CVTraining />
                    <CVExperience />
                </div>
            </div>
        </div>
    )
}

export default LiveOutput