import Card from "./card"

function PersonInfo({
    firstName, setFirstName, 
    lastName, setLastName, occupation, setOccupation}) {

    return (
        <Card 
        title='Personal details' 
        content={
        <form>
            <label>First name :
            <input type="text" placeholder={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label>Last name :
            <input type="text" placeholder={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <label>Occupation:
            <input type="text" placeholder={occupation} onChange={(e) => setOccupation(e.target.value)}/>
            </label>
        </form>
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