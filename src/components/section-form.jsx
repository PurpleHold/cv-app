import { useState } from "react";

function SectionForm({id, stateVal, stateFn, formType}) {
    const [hideStatus, setHideStatus] = useState(false);
    const handleHideStatus = (e) => {
        e.preventDefault();
        setHideStatus(!hideStatus);
    };
    const handleYearChange = (e, id) => {
        stateFn({
            ...stateVal,
            [id]: {
                ...stateVal[id],
                year: e.target.value
            }
        })
    }
    const handleTitleChange = (e, id) => {
        stateFn({
            ...stateVal,
            [id]: {
                ...stateVal[id],
                title: e.target.value
            }
        })
    }
    const handleOrgaChange = (e, id) => {
        stateFn({
            ...stateVal,
            [id]: {
                ...stateVal[id],
                orga: e.target.value
            }
        })
    }
    const handleDescChange = (e, id) => {
        stateFn({
            ...stateVal,
            [id]: {
                ...stateVal[id],
                desc: e.target.value
            }
        })
    }
    const handleDelete = (e, id) => {
        e.preventDefault();
        console.log(stateVal)
        stateFn({...stateVal, [id]:null});
        console.log(stateVal)
    }

    if (formType == 'train' || formType == 'xp') {
    return (
        <>
            {stateVal[id] && (
            <div className={`${formType}-form ${!hideStatus ? 'off' : 'on'}`}>
                <div className="form-header">
                    <button className="form-title" onClick={handleHideStatus}>
                    {stateVal[id].title} <i className={`iconoir-${!hideStatus ? 'plus-circle' : 'minus-circle'}`}></i>
                    </button>
                    <button className="form-delete" onClick={(e) => handleDelete(e, id)}>Delete</button>
                </div>
                <form action="">
                    <div className="main-form">
                        <label>{formType == 'train' ? 'Title of diploma' : 'Position title'}
                        <input type="text" placeholder={stateVal[id].title} onChange={(e) => handleTitleChange(e, id)}/>
                        </label>
                        <label>{formType == 'train' ? 'Training institute' : 'Organisation'}
                        <input type="text" placeholder={stateVal[id].orga} onChange={(e) => handleOrgaChange(e, id)}/>
                        </label>
                        <label>{formType == 'train' ? 'Year of graduation' : 'Start year - End year'}
                        <input type="text" placeholder={stateVal[id].year} onChange={(e) => handleYearChange(e, id)}/>
                        </label>
                    </div>
                    <div className="extra">
                        <label>{formType == 'train' ? 'Extra information (optional)' : 'Description'}
                        <textarea placeholder={stateVal[id].desc} onChange={(e) => handleDescChange(e, id)} rows={3}>
                        </textarea>
                        </label>
                    </div>
                </form>
            </div>
            )}
        </>
    )
    }
    else if(formType == 'skill') {
        return (
            <>
                {stateVal[id] && (
                <div className={`${formType}-form ${!hideStatus ? 'off' : 'on'}`}>
                    <div className="form-header">
                        <button className="form-title" onClick={handleHideStatus}>
                        {stateVal[id].title} <i className={`iconoir-${!hideStatus ? 'plus-circle' : 'minus-circle'}`}></i>
                        </button>
                        <button className="form-delete" onClick={(e) => handleDelete(e, id)}>Delete</button>
                    </div>
                    <form action="">
                        <div className="main-form">
                            <label>Skill name
                            <input type="text" placeholder={stateVal[id].title} onChange={(e) => handleTitleChange(e, id)}/>
                            </label>
                        </div>
                        <div className="extra">
                            <label>Description
                            <textarea placeholder={stateVal[id].desc} onChange={(e) => handleDescChange(e, id)} rows={3}>
                            </textarea>
                            </label>
                        </div>
                    </form>
                </div>
                )}
            </>
        )
    }
    else {
        return null;
    }
}

export default SectionForm