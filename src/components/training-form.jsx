import { useState } from "react";

function TrainingForm({id, training, setTraining}) {
    const [hideStatus, setHideStatus] = useState(false);
    const handleHideStatus = (e) => {
        e.preventDefault();
        setHideStatus(!hideStatus);
    };
    const handleYearChange = (e, id) => {
        setTraining({
            ...training,
            [id]: {
                ...training[id],
                year: e.target.value
            }
        })
    }
    const handleDiplomaChange = (e, id) => {
        setTraining({
            ...training,
            [id]: {
                ...training[id],
                title: e.target.value
            }
        })
    }
    const handleUnivChange = (e, id) => {
        setTraining({
            ...training,
            [id]: {
                ...training[id],
                univ: e.target.value
            }
        })
    }

    return (
        <div className={`${!hideStatus ? 'on' : 'off'}`}>
            <form action="">
                <label>Year of graduation
                <input type="text" placeholder={training[id].year} onChange={(e) => handleYearChange(e, id)}/>
                </label>
                <label>Title of diploma
                <input type="text" placeholder={training[id].title} onChange={(e) => handleDiplomaChange(e, id)}/>
                </label>
                <label>Training institute
                <input type="text" placeholder={training[id].univ} onChange={(e) => handleUnivChange(e, id)}/>
                </label>
            </form>
            <button onClick={handleHideStatus}>
            {hideStatus ? 'Add' : 'X'}
            </button>
        </div>
    )
}

export default TrainingForm