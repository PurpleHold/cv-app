function CVPersInfo({firstName, lastName, occupation}) {

    return (
        <div className="cv-pers">
            <div className="fullname">{firstName} <span className="last">{lastName}</span></div>
            <div className="occupation">{occupation}</div>
        </div>
    )
}

export default CVPersInfo