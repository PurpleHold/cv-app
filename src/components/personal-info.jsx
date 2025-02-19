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
    website, setWebsite,
    pic, setPic, onPicChange}) {

    return (
        <Card 
        title='Header'
        sectionClass='pers-card'
        content={
        <form>
            <div className="main-form">
                <label>First name 
                <input type="text" placeholder={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </label>
                <label>Last name 
                <input type="text" placeholder={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </label>
            </div>
            <p className="fields-separator">Optional fields</p>
            <div className="extra">
                <OptField 
                    label={'Picture'} fieldState={pic} fieldStateFunc={setPic}
                    onPicChange={onPicChange}
                    type='file'
                />
                <OptField 
                    label={'Occupation '} fieldState={occupation} fieldStateFunc={setOccupation}
                />
                <OptField 
                    label={'Location '} fieldState={location} fieldStateFunc={setLocation}
                />
                <OptField 
                    label={'Email '} fieldState={email} fieldStateFunc={setEmail}
                    type='email' 
                />
                <OptField 
                    label={'Phone '} fieldState={phone} fieldStateFunc={setPhone}
                    type='tel' 
                />
                <OptField 
                    label={'Website '} fieldState={website} fieldStateFunc={setWebsite}
                    type='url'
                />
            </div>
        </form>
        }/>
    )
}

export default PersonInfo