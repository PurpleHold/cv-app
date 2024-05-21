//import { useState } from "react";
import Card from "./card"
import OptField from "./Opt-field"

function PersonInfo({
    firstName, setFirstName, 
    lastName, setLastName, 
    occupation, setOccupation,
    location, setLocation,
    email, setEmail,
    phone, setPhone,
    website, setWebsite}) {

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
            <OptField 
                label={'Location '} fieldState={location}
                fieldStateFunc={setLocation}
            />
            <OptField 
                label={'Email '} type='email' fieldState={email}
                fieldStateFunc={setEmail}
            />
            <OptField 
                label={'Phone '} type='tel' fieldState={phone}
                fieldStateFunc={setPhone}
            />
            <OptField 
                label={'Website '} fieldState={website}
                fieldStateFunc={setWebsite} empty={true}
            />
        </form>
        }/>
    )
}

export default PersonInfo