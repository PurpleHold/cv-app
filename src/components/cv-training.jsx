function CVTraining({training}) {

    return (
        <div className="cv-training">
            <div className="cv-train-container">
                <p className="section-title">training</p>
                {training[0].year}
                <br />
                {training[0].title}
                <br />
                {training[0].univ}
            </div>
        </div>
    )
}

export default CVTraining