function CVSection({dataObj, allSections, side, sectionType, sectionName, pos, custom}) {
    let dataArr = [];
    let sideVal = side=='right'? 1 : 0;

    const renderChildren = (parent) => {
        let childItems = [];
        if(parent.childIds) {
            allSections.forEach((child) => {
                if (parent.childIds.includes(child.id)) {
                    childItems.push(
                        <div key={child.id}>
                            <div className={`${parent.type}-header`}>
                                {child.title && (<p className="title">{child.title}</p>)}
                                {child.year && (<p className="year">{child.year}</p>)}
                            </div>
                            {child.orga && (<p className="orga">{child.orga}</p>)}
                            {child.desc && (<p className="desc">{child.desc}</p>)}
                        </div>
                    )
                }
            })
        }
        return childItems;
    }

    if (!custom) {
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
                {(sectionName.trim().length!=0) && <p className="section-title">{sectionName}</p>}
                <div className={`${sectionType}-entries`}>{dataArr!=[] && dataArr}</div>
            </div>
        )
    }
    else if(custom) {

        allSections.forEach((section) => {
            (!section.parentId && section.pos[0] == sideVal) && dataArr.push(
                <div className={`cv-${section.type}-container`} key={section.id}>
                    {(section.title.trim().length!=0) && <p className="section-title">{section.title}</p>}
                    <div className={`${section.type}-entries`}>
                        {renderChildren(section)}
                    </div>
                </div>
            )
        })
        return (
            dataArr
        )
    }
}

export default CVSection