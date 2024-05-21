import { useState } from "react";

function OptField({label, type='text', fieldState, fieldStateFunc, empty=false}) {
    const [hideStatus, setHideStatus] = useState(empty ? true : false);
    const handleHideStatus = (e) => {
        e.preventDefault();
        setHideStatus(!hideStatus);
        !hideStatus && fieldStateFunc('');
    };

    return (
        <div className={`opt ${!hideStatus ? 'on' : 'off'}`}>
            <label>{label}
                 <input type={type} value={fieldState} placeholder={fieldState} onChange={(e) => fieldStateFunc(e.target.value)}/>
            </label>
            <button onClick={handleHideStatus}>
            {hideStatus ? 'Add' : 'X'}
            </button>
        </div>
    )
}

export default OptField