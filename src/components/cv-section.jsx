function CVSection({dataObj, sectionType, sectionName, pos}) {
    let dataArr = [];
    for (let i = 0; i < Object.entries(dataObj).length; i++) {
        dataArr.push(
            dataObj[i] && (
                <div key={dataObj[i].id}>
                    <div className={`${sectionType}-header`}>
                        {dataObj[i].title && (<p className="title">{dataObj[i].title}</p>)}
                        {dataObj[i].year && (<p className="year">{dataObj[i].year}</p>)}
                    </div>
                    {dataObj[i].orga && (<p className="orga">{dataObj[i].orga}</p>)}
                    {dataObj[i].desc && (<p className="desc">{dataObj[i].desc}</p>)}
                </div>
            )
        )
    }
    return (
        <div className={`cv-${sectionType}-container`} data-position={pos}>
            <p className="section-title">{sectionName}</p>
            <div className={`${sectionType}-entries`}>{dataArr}</div>
        </div>
    )
}

export default CVSection