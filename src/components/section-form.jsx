import { useState } from "react";
import OptField from "./Opt-field";

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
    const handleFormChange = (e, field, isEmpty=false) => {
        if (isEmpty) {
            let formUpd = stateVal.map(x => {
                if (x.id == sectionChild.id) { return {...x, [field]: ''}}
                else { return x; }
            });
            stateFn(formUpd);
        }
        else {
            let formUpd = stateVal.map(x => {
                if (x.id == sectionChild.id) { return {...x, [field]: e.target.value}}
                else { return x; }
            });
            stateFn(formUpd);
        }
    }

    if (formType == 'train' || formType == 'xp') {
    return (
        <>
            {sectionChild && (
            <div className={`${formType}-form ${!hideStatus ? 'off' : 'on'}`}>
                <div className="form-header">
                    <button className="form-title" onClick={handleHideStatus}>
                    {sectionChild.title?sectionChild.title:'No title'} <i className={`iconoir-${!hideStatus ? 'plus-circle' : 'minus-circle'}`}></i>
                    </button>
                    <button className="form-delete" onClick={(e) => handleDelete(e, id)}>Delete</button>
                </div>
                <form action="">
                    <div className="main-form">
                        <label>{formType == 'train' ? 'Title of diploma' : 'Position title'}
                        <input type="text" placeholder={sectionChild.title} onChange={(e) => handleFormChange(e, 'title')}/>
                        </label>
                        <label>{formType == 'train' ? 'Training institute' : 'Organisation'}
                        <input type="text" placeholder={sectionChild.orga} onChange={(e) => handleFormChange(e, 'orga')}/>
                        </label>
                        <label>{formType == 'train' ? 'Year of graduation' : 'Start year - End year'}
                        <input type="text" placeholder={sectionChild.year} onChange={(e) => handleFormChange(e, 'year')}/>
                        </label>
                    </div>
                    <div className="extra">
                        <label>{formType == 'train' ? 'Extra information (optional)' : 'Description'}
                        <textarea placeholder={sectionChild.desc} onChange={(e) => handleFormChange(e, 'desc')} rows={3}>
                        </textarea>
                        </label>
                        <OptField label='Link ' empty="true" type="url" custom={true} propName='link' id={id}
                        val={sectionChild.link?sectionChild.link:''} handleChange={(e) => handleFormChange(e, 'link')}/>
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
                {sectionChild && (
                <div className={`${formType}-form ${!hideStatus ? 'off' : 'on'}`}>
                    <div className="form-header">
                        <button className="form-title" onClick={handleHideStatus}>
                        {sectionChild.title?sectionChild.title:'No title'} <i className={`iconoir-${!hideStatus ? 'plus-circle' : 'minus-circle'}`}></i>
                        </button>
                        <button className="form-delete" onClick={(e) => handleDelete(e, id)}>Delete</button>
                    </div>
                    <form action="">
                        <div className="main-form">
                            <label>Skill name
                            <input type="text" placeholder={sectionChild.title} onChange={(e) => handleFormChange(e, 'title')}/>
                            </label>
                        </div>
                        <div className="extra">
                            <label>Description
                            <textarea placeholder={sectionChild.desc} onChange={(e) => handleFormChange(e, 'desc')} rows={3}>
                            </textarea>
                            </label>
                        </div>
                    </form>
                </div>
                )}
            </>
        )
    }
    else if(formType == 'custom' || formType == 'intro') {
        custom = true;
        return (
            <>
                {sectionChild && (
                <div className={`${formType}-form ${!hideStatus ? 'off' : 'on'}`}>
                    <div className="form-header">
                        <button className="form-title" onClick={handleHideStatus}>
                        {sectionChild.title?sectionChild.title:'No title'} <i className={`iconoir-${!hideStatus ? 'plus-circle' : 'minus-circle'}`}></i>
                        </button>
                        <button className="form-delete" onClick={(e) => handleDelete(e, id)}>Delete</button>
                    </div>
                    <form action="">
                        <div className="main-form">
                            <label>Title
                            <input type="text" placeholder={sectionChild.title} onChange={(e) => handleFormChange(e, 'title')}/>
                            </label>
                        </div>
                        <div>
                            <label>Description
                            <textarea placeholder={sectionChild.desc} onChange={(e) => handleFormChange(e, 'desc')} rows={3}></textarea>
                            </label>
                        </div>
                        <div className="extra">
                            <OptField label='Link ' empty="true" type="url" custom={true} propName='link' id={id}
                            val={sectionChild.link?sectionChild.link:''} handleChange={(e) => handleFormChange(e, 'link')}/>
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