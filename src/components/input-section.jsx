import { useState } from "react";
import { getUid } from "../getUid";
import SectionForm from "./section-form"

function InputSection({sectionId, allSections, setSection}) {
    const [isHidden, setIsHidden] = useState(true);
    const [editStatus, setEditStatus] = useState(false);

    const section = allSections.filter((x) => x.id == sectionId)[0];
    let col = section.pos[0];
    let line = section.pos[1];
    let childComps = [];

    const onMove = (id, move, direction) => {
    let moveUpd = [...allSections];

        if (direction == 'hor') {
            // Force col position to be within boundaries
            let newCol = col+move <= 0 ? 0 : 1;

            // Prevent unnecessary changes if move is beyond boundaries
            if (newCol != col) {
                // Get newLine number (last line +1)
                const lineNbs = allSections.filter((section) => !section.parentId && section.pos[0]==newCol).map((x) => {return x.pos[1]});
                // Prevent -Infinity if no data in selected col
                let max = (lineNbs < 0 || lineNbs.length == 0) ? null : Math.max(...lineNbs);
                let newLine = max == null ? 0 : max+1;

                //moveupd ElseIf line: items from prev col that were after moved item, move up (-1) by 1
                moveUpd = allSections.map(x => {
                    if (x.id == id) { return {...x, pos:[newCol,newLine], lineVal:newLine}}
                    else if(x.pos[0] == col && x.pos[1]>line) {return {...x, pos:[x.pos[0], x.pos[1]-1], lineVal:x.lineVal-1}}
                    else { return x; }
                });
                moveUpd.sort((a, b) => a.lineVal - b.lineVal);
            }
        }
        else if (direction == 'ver') {
            const lineNbs = allSections.filter((section) => !section.parentId && section.pos[0]==col).map((x) => {return x.pos[1]}
            );
            let max = (lineNbs < 0 || lineNbs.length == 0) ? null : Math.max(...lineNbs);

            const getLine = () => {
                if (line+move < 0 || max == null ) {return 0;}
                else if (line+move > max) {return max;}
                else {return line+move;}
            } 
            let newLine = getLine();

            if (line != newLine) {
                let toSwap = allSections.filter((x) => (x.pos[0] == col && x.pos[1] == newLine))[0];
                moveUpd = allSections.map(x => {
                    // Swap sections
                    if (x.id == id) {return {...x, lineVal:newLine, pos:[col, newLine]}}
                    else if (x.id == toSwap.id) {return {...x, lineVal:line, pos:[col, line]}}
                    else {return x; }
                });
                moveUpd.sort((a, b) => a.lineVal - b.lineVal);
            }
        }
        setSection(moveUpd);
    }

    if (section.childIds) { 
        allSections.forEach((item) =>  {
            if (item.parentId == sectionId) {
                childComps.push(
                    <SectionForm sectionChild={item} stateVal={allSections} stateFn={setSection} formType={'custom'} key={item.id} custom={true}/>
                )
            }
        });
    }

    const handleTitleChange = (e) => {
        let titleUpd = allSections.map(x => {
            if (x.id == section.id) { return {...x, title: e.target.value}}
            else { return x; }
        });
        setSection(titleUpd);
    }
    
    const handleFormCreation = () => {
        const newId = getUid();
        let addChild = [ ...allSections,
            {title: 'Entry title',
            id: newId,
            pos:(section.childIds.length)+1,
            parentId: sectionId,
            desc: 'Entry description',
            }
        ];
        let childAndRef = addChild.map(x => {
            if (x.id == sectionId) {return {...x, childIds:[...x.childIds, newId]}}
            else { return x;}
        })
        console.log(childAndRef);
        setSection(childAndRef);
    }

    const handleSectionDelete = (id) => {
        let sectionsUpd = allSections.map((x) => {
            if (x.parentId == id) { return undefined}
            else if (x.id != id && x.pos[0] != col) { return x;}
            else if (x.pos[0] == col && x.pos[1]<line) { return {...x, pos:[x.pos[0], x.pos[1]-1]}}
            else if (x.id != id) {return x;}
        }).filter((x) => x != undefined);
        setSection(sectionsUpd);
    }

    return(
        <>
        <div className={`card ${section.class}`}>
            <div className="top">
                <button className={`card-header ${!isHidden ? 'on' : 'off'}`} onClick={() => setIsHidden(!isHidden)}>
                    {(section.title.trim().length!=0) && <h2>{section.title}</h2>}
                    {isHidden ? <i className="iconoir-nav-arrow-down"></i> : <i className="iconoir-nav-arrow-up"></i>}
                </button>
                {(!isHidden && section.class!='pers-card') && (
                <div className="card-head-btns">
                    <div className={`edit-title ${editStatus? 'on':'off'}-edit`}>
                        {!editStatus &&
                        <button onClick={() => setEditStatus(!editStatus)}>
                            Edit title<i className="iconoir-edit-pencil"></i>
                        </button>}
                        {editStatus &&
                        <>
                            <input type="text" placeholder={section.title} onChange={(e) => handleTitleChange(e)}/>
                            <button onClick={() => setEditStatus(!editStatus)}><i className="iconoir-check-circle"></i></button>
                        </>}
                    </div>
                    <div className="position">
                        <p>Position</p>
                        <div className="pos-container">
                            <button aria-label="up" className="pos-up" onClick={() => onMove(section.id, -1, 'ver')}>
                                <i className="iconoir-page-up"></i>
                            </button>
                            <button aria-label="left" className="pos-left" onClick={() => onMove(section.id, -1, 'hor')}>
                                <i className="iconoir-page-left"></i>
                            </button>
                            <button aria-label="right" className="pos-right" onClick={() => onMove(section.id, 1, 'hor')}>
                                <i className="iconoir-page-right"></i>
                            </button>
                            <button aria-label="down" className="pos-down" onClick={() => onMove(section.id, 1, 'ver')}>
                                <i className="iconoir-page-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>
            {!isHidden && (
                <div className="card-content">
                    <div className={`edit-${section.type}-container`}>{childComps}</div>
                    <div className="edit-btns-container">
                        <button className="add" onClick={(e) => handleFormCreation(e)}>New</button>
                        <button className="del" onClick={() => handleSectionDelete(section.id)}>Delete section</button>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default InputSection