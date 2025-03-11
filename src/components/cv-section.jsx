function CVSection({allSections, side}) {
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
                            {child.link && (<a href={`${child.link.includes('https://www.')?child.link:('https://www.'+child.link)}`}>{(child.linkName)?child.linkName:child.link}</a>)}
                        </div>
                    )
                }
            })
        }
        return childItems;
    }

        allSections.forEach((section) => {
            (!section.parentId && section.pos[0] == sideVal) && dataArr.push(
                <div className={`cv-${section.class}-container`} key={section.id}>
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

export default CVSection