function CVPersInfo({firstName, lastName, occupation, location, email, phone, website}) {

    return (
        <div className="cv-pers">
            <div className="fullname">{firstName} <span className="last">{lastName}</span></div>
            <div className="occupation">{occupation}</div>
            <div className="contact">
                {location && <div className="location"><i className="iconoir-map-pin"></i>{location}</div>}
                {email && <div className="email"><i className="iconoir-mail"></i>{email}</div>}
                {phone && <div className="phone"><i className="iconoir-phone"></i>{phone}</div>}
                {website && <div className="website"><i className="iconoir-link"></i>{website}</div>}
            </div>
        </div>
    )
}

export default CVPersInfo