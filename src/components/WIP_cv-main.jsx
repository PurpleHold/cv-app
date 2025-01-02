import CVSection from "./cv-section"

function CVMain({data, key, index, }) {
    return (
        <>
            <div className="cv-left">
                <div className="contents">
                    <CVSection dataObj={training} sectionType={'train'} sectionName={'Training'}/>
                    <CVSection dataObj={experience} sectionType={'xp'} sectionName={'Experience'}/>
                </div>
            </div>
            <div className="cv-right">
                <div className="contents">
                    <CVSection dataObj={skill} sectionType={'skill'} sectionName={'Skills'}/>
                </div>
            </div>
        </>
    )
}

export default CVMain