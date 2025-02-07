import { getUid } from "../getUid";

function AddSection({stateVal, stateFn}) {
    const handleSectionCreation = () => {
        let newId = getUid();
        const getPos = () => {
            let minMax;
            const rightNbs = stateVal.filter((x) => !x.parentId && x.pos[0]==1).map((x) => {return x.pos[1]});
            const leftNbs = stateVal.filter((x) => !x.parentId && x.pos[0]==0).map((x) => {return x.pos[1]});

            // Look for last pos in emptiest column
            const maxLeft = (leftNbs < 0 || leftNbs.length == 0) ? null : Math.max(...leftNbs);
            const maxRight = (rightNbs < 0 || rightNbs.length == 0) ? null : Math.max(...rightNbs);
            // Handle situation in which both sides are empty (null)
            if (!maxLeft && !maxRight) {
                minMax = [0,0];
            } else {
                minMax = maxLeft > maxRight ? [1, maxRight+1] : [0, maxLeft+1];
            }
            return minMax;
        }
        let newPos = getPos();
        let stateUpdate = [...stateVal, {title:'Custom section', type:'custom', class:'custom', id:newId, pos:newPos, lineVal:newPos[1], childIds:[],}]
        stateFn(stateUpdate);
        console.log(stateUpdate)
    }
    return(
        <>
            <div className="new-container">
                <div className="new-top">
                    <button onClick={(e) => handleSectionCreation(e)}>Add custom section <i className="iconoir-plus-square"></i></button>
                </div>
            </div>
        </>
    )
}

export default AddSection