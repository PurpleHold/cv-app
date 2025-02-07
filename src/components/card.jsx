import { useState } from "react"

function Card({title, stateFn, state, id, sectionTitle, setSectionTitle, content, sectionClass='', type, onPosChange}) {
    const [isHidden, setIsHidden] = useState(true);
    const [editStatus, setEditStatus] = useState(false);
    const handleTitleChange = (e) => {
        if (type != 'custom') {
            const newTitles = Array.prototype.map.call(sectionTitle, (val) => {
                if (val == title) {
                    return e.target.value;
                } else {
                    return val;
                }
            });
            setSectionTitle(newTitles);
        }
        else {
            let titleUpd = state.map(x => {
                if (x.id != id) { return x;}
                else {
                    return{
                        ...x,
                        title: e.target.value,
                    };
                }
            }
            )
            stateFn(titleUpd);
        }
    }

    return (
        <div className={`card ${sectionClass}`}>
            <div className="top">
                <button className={`card-header ${!isHidden ? 'on' : 'off'}`} onClick={() => setIsHidden(!isHidden)}>
                    {(title && title.trim().length!=0) && <h2>{title}</h2>}
                    {isHidden ? <i className="iconoir-nav-arrow-down"></i> : <i className="iconoir-nav-arrow-up"></i>}
                </button>
                {(!isHidden && sectionClass!='pers-card') && (
                <div className="card-head-btns">
                    <div className={`edit-title ${editStatus? 'on':'off'}-edit`}>
                        {!editStatus &&
                        <button onClick={() => setEditStatus(!editStatus)}>
                            Edit title<i className="iconoir-edit-pencil"></i>
                        </button>}
                        {editStatus &&
                        <>
                            <input type="text" placeholder={title} onChange={(e) => handleTitleChange(e)}/>
                            <button onClick={() => setEditStatus(!editStatus)}><i className="iconoir-check-circle"></i></button>
                        </>}
                    </div>
                    <div className="position">
                        <p>Position</p>
                        <div className="pos-container">
                            <button aria-label="up" className="pos-up" onClick={() => onPosChange(type, -1, 'ver')}>
                                <i className="iconoir-page-up"></i>
                            </button>
                            <button aria-label="left" className="pos-left" onClick={() => onPosChange(type, -1, 'hor')}>
                                <i className="iconoir-page-left"></i>
                            </button>
                            <button aria-label="right" className="pos-right" onClick={() => onPosChange(type, 1, 'hor')}>
                                <i className="iconoir-page-right"></i>
                            </button>
                            <button aria-label="down" className="pos-down" onClick={() => onPosChange(type, 1, 'ver')}>
                                <i className="iconoir-page-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>
            {!isHidden && (
                <div className="card-content">{content}</div>
            )}
        </div>
    )
}

export default Card