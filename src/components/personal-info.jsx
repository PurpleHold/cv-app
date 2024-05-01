import Card from "./card"

function PersonInfo({name}) {
    return (
        <Card 
        title='Personal details' 
        content={
        <div>
            <label> Name:
            <input type="text" value="" placeholder={name}/>
            </label>
        </div>
    }/>
    )
}

/* Without Card component
import { useState } from "react"


function PersonInfo() {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="person-info card">
            <div className="card-header">
                <h2>Personal Details</h2>
                <button
                    onClick={() => setIsHidden(!isHidden)}> {isHidden ? <i className="iconoir-nav-arrow-down"></i> : <i className="iconoir-nav-arrow-up"></i>}
                </button>
            </div>
            {!isHidden && (
                <div className="card-content">content</div>
            )}
        </div>
    )
}
*/
export default PersonInfo