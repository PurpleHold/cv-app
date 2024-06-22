import { useState } from "react"


function Card({title, content, sectionClass=''}) {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className={`card ${sectionClass}`}>
            <button className={`card-header ${!isHidden ? 'on' : 'off'}`} onClick={() => setIsHidden(!isHidden)}> 
                <h2>{title}</h2>
                {isHidden ? <i className="iconoir-nav-arrow-down"></i> : <i className="iconoir-nav-arrow-up"></i>}
            </button>
            {!isHidden && (
            <div className="card-content">{content}</div>
            )}
        </div>
    )
}

export default Card