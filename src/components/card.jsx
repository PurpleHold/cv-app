import { useState } from "react"


function Card({title, content, sectionClass='', type, onPosChange}) {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className={`card ${sectionClass}`}>
            <div className="top">
                <button className={`card-header ${!isHidden ? 'on' : 'off'}`} onClick={() => setIsHidden(!isHidden)}>
                    <h2>{title}</h2>
                    {isHidden ? <i className="iconoir-nav-arrow-down"></i> : <i className="iconoir-nav-arrow-up"></i>}
                </button>
                {(!isHidden && sectionClass!='pers-card') && (
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
            )}
            </div>
            {!isHidden && (
                <div className="card-content">{content}</div>
            )}
        </div>
    )
}

export default Card