import { useState } from "react"


function Card({title, content}) {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="card">
            <div className="card-header">
                <h2>{title}</h2>
                <button
                    onClick={() => setIsHidden(!isHidden)}> {isHidden ? <i className="iconoir-nav-arrow-down"></i> : <i className="iconoir-nav-arrow-up"></i>}
                </button>
            </div>
            {!isHidden && (
                <div className="card-content">{content}</div>
            )}
        </div>
    )
}

export default Card