import { useState } from "react";
import placeHolder from '../assets/placeholder.png'

function OptField({label, type='text', fieldState, fieldStateFunc, empty=false, onPicChange}) {
    const [hideStatus, setHideStatus] = useState(empty ? true : false);
    const handleHideStatus = (e) => {
        e.preventDefault();
        setHideStatus(!hideStatus);
        !hideStatus && fieldStateFunc('');
        if (label=='Picture' && hideStatus) {
            fieldStateFunc(placeHolder)
        }
    };

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

export default OptField