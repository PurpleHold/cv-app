import { useState } from "react";

function TrainingForm({id, training, setTraining, create=false}) {
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
    const handleDelete = (e, id) => {
        e.preventDefault();
        console.log(training)
        setTraining({...training, [id]:null});
        console.log(training)
    }

    return (
        <>
            {training[id] && (
            <div className={`train-form ${!hideStatus ? 'on' : 'off'}`}>
            <form action="">
                <label>Title of diploma
                <input type="text" placeholder={create ? '' : training[id].title} onChange={(e) => handleDiplomaChange(e, id)}/>
                </label>
                <label>Training institute
                <input type="text" placeholder={create ? '' : training[id].univ} onChange={(e) => handleUnivChange(e, id)}/>
                </label>
                <label>Year of graduation
                <input type="text" placeholder={create ? '' : training[id].year} onChange={(e) => handleYearChange(e, id)}/>
                </label>
                <button onClick={(e) => handleDelete(e, id)}>Delete</button>
            </form>
            <button onClick={handleHideStatus}>
            {hideStatus ? 'Add' : 'X'}
            </button>
        </div>)
        }
        </>
    )
}

export default TrainingForm