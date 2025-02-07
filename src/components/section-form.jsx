import { useState } from "react";

function SectionForm({id, stateVal, stateFn, formType, custom, sectionChild}) {
    const [hideStatus, setHideStatus] = useState(false);
    const handleHideStatus = (e) => {
        e.preventDefault();
        setHideStatus(!hideStatus);
    };
    const handleDelete = (e, id) => {
        e.preventDefault();
        if (custom) {
            let formDel = stateVal.filter((x) => x.id != sectionChild.id);
            let delRef = formDel.map((x) => {
                if (x.id == sectionChild.parentId) {
                    let oneLessChild = x.childIds.filter((x) => x != sectionChild.id);
                    x.sectionChild = oneLessChild
                    return x;
                }
                else { return x}
            })
            stateFn(delRef);
        }
        else {
            stateFn({...stateVal, [id]:null});
        }
        
    }
    const handleFormChange = (e, id, field) => {
        if (custom) {
            let formUpd = stateVal.map(x => {
                if (x.id == sectionChild.id) { return {...x, [field]: e.target.value}}
                else { return x; }
            });
            stateFn(formUpd);
        }
        else {
            stateFn({
                ...stateVal,
                [id]: {
                    ...stateVal[id],
                    [field]: e.target.value
                }
            })
        }
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
                        <input type="text" placeholder={stateVal[id].title} onChange={(e) => handleFormChange(e, id, 'title')}/>
                        </label>
                        <label>{formType == 'train' ? 'Training institute' : 'Organisation'}
                        <input type="text" placeholder={stateVal[id].orga} onChange={(e) => handleFormChange(e, id, 'orga')}/>
                        </label>
                        <label>{formType == 'train' ? 'Year of graduation' : 'Start year - End year'}
                        <input type="text" placeholder={stateVal[id].year} onChange={(e) => handleFormChange(e, id, 'year')}/>
                        </label>
                    </div>
                    <div className="extra">
                        <label>{formType == 'train' ? 'Extra information (optional)' : 'Description'}
                        <textarea placeholder={stateVal[id].desc} onChange={(e) => handleFormChange(e, id, 'desc')} rows={3}>
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
                            <input type="text" placeholder={stateVal[id].title} onChange={(e) => handleFormChange(e, id, 'title')}/>
                            </label>
                        </div>
                        <div className="extra">
                            <label>Description
                            <textarea placeholder={stateVal[id].desc} onChange={(e) => handleFormChange(e, id, 'desc')} rows={3}>
                            </textarea>
                            </label>
                        </div>
                    </form>
                </div>
                )}
            </>
        )
    }
    else if(formType == 'custom') {
        custom = true;
        return (
            <>
                {sectionChild && (
                <div className={`${formType}-form ${!hideStatus ? 'off' : 'on'}`}>
                    <div className="form-header">
                        <button className="form-title" onClick={handleHideStatus}>
                        {sectionChild.title} <i className={`iconoir-${!hideStatus ? 'plus-circle' : 'minus-circle'}`}></i>
                        </button>
                        <button className="form-delete" onClick={(e) => handleDelete(e, id)}>Delete</button>
                    </div>
                    <form action="">
                        <div className="main-form">
                            <label>Custom name
                            <input type="text" placeholder={sectionChild.title} onChange={(e) => handleFormChange(e, id, 'title')}/>
                            </label>
                        </div>
                        <div className="extra">
                            <label>Description
                            <textarea placeholder={sectionChild.desc} onChange={(e) => handleFormChange(e, id, 'desc')} rows={3}>
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