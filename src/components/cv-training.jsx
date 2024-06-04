function CVTraining({training}) {
    let trainingsArr = [];
    for (let i = 0; i < Object.entries(training).length; i++) {
        trainingsArr.push(
            training[i] && (
                <div key={training[i].id}>
                    {training[i].title && (<p className="title">{training[i].title}</p>)}
                    {training[i].univ && (<p className="univ">{training[i].univ}</p>)}
                    {training[i].year && (<p className="year">{training[i].year}</p>)}
                </div>
            )
        )
    }

    return (
        <div className="cv-training">
            <div className="cv-train-container">
                <p className="section-title">training</p>
                <div className="train-entries">{trainingsArr}</div>
            </div>
        </div>
    )
}

export default CVTraining