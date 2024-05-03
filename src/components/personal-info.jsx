//import { useState } from "react";
import Card from "./card"
import OptField from "./Opt-field"

function PersonInfo({
    firstName, setFirstName, 
    lastName, setLastName, 
    occupation, setOccupation}) {

    return (
        <Card 
        title='Personal details' 
        content={
        <form>
            <label>First name 
            <input type="text" placeholder={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label>Last name 
            <input type="text" placeholder={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <OptField 
                label={'Occupation '} fieldState={occupation}
                fieldStateFunc={setOccupation}
            />
        </form>
        }/>
    )
}

export default PersonInfo