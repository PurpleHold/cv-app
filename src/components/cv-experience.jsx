function CVExperience({experience}) {
    let expArr = [];
    for (let i = 0; i < Object.entries(experience).length; i++) {
        expArr.push(
            experience[i] && (
                <div key={experience[i].id}>
                    <div className="xp-header">
                        {experience[i].title && (<p className="title">{experience[i].title}</p>)}
                        {experience[i].year && (<p className="year">{experience[i].year}</p>)}
                    </div>
                    {experience[i].orga && (<p className="orga">{experience[i].orga}</p>)}
                    {experience[i].desc && (<p className="desc">{experience[i].desc}</p>)}
                </div>
            )
        )
    }
    return (
        <div className="cv-xp">
            <div className="cv-xp-container">
                <p className="section-title">experience</p>
                <div className="xp-entries">{expArr}</div>
            </div>
        </div>
    )
}

export default CVExperience