import { useState } from "react";
import placeHolder from '../assets/placeholder.png'

function OptField({label, type='text', fieldState, fieldStateFunc, empty=false, onPicChange, custom=false, val, propName, handleChange}) {
    const [hideStatus, setHideStatus] = useState(empty ? true : false);
    const [tagStatus, setTagStatus] = useState(true);

    const handleHideStatus = (e) => {
        e.preventDefault();
        setHideStatus(!hideStatus);
        if (custom) {
            handleChange(e, propName, true)
        }
        else {
            !hideStatus && fieldStateFunc('');
            if (label=='Picture' && hideStatus) {
            fieldStateFunc(placeHolder)
            }
        }
    };
    const handleTagStatus = (e) => {
        e.preventDefault();
        setTagStatus(!tagStatus);
        handleChange(e, propName, true);
    }



    if (label == 'Tags list' || label == 'Etiquettes') {
        return (
            <div className={`opt ${!tagStatus ? 'on' : 'off'} taglist`}>
                <label>{tagStatus ? label : `${label} (Use commas to separate tags)`}
                     <input type={type} value={val} placeholder={val} onChange={(e) => handleChange(e, propName)}/>
                </label>
                <button onClick={handleTagStatus} className="tagsBtn">
                {tagStatus ? 'Add' : 'X'}
                </button>
            </div>
        )
    }
    else if (custom) {
        return (
            <div className={`opt ${!hideStatus ? 'on' : 'off'}`}>
                <label>{label}
                     <input type={type} value={val} placeholder={val} onChange={(e) => handleChange(e, propName)}/>
                </label>
                <button onClick={handleHideStatus}>
                {hideStatus ? 'Add' : 'X'}
                </button>
            </div>
        )
    }
    else {
        return (
            <div className={`opt ${!hideStatus ? 'on' : 'off'}`}>
                <label>{label}
                     {type!='file' &&
                     <input type={type} value={fieldState} placeholder={fieldState} onChange={(e) => fieldStateFunc(e.target.value)}/>}
                     {type=='file' &&
                     <input type={type} placeholder={fieldState} onChange={onPicChange}/>}
                </label>
                <button onClick={handleHideStatus}>
                {hideStatus ? 'Add' : 'X'}
                </button>
            </div>
        )
    }
}

export default OptField