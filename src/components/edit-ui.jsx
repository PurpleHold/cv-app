import PersonInfo from "./personal-info"
import Training from "./training"
import Exp from "./experience"

function EditUi() {
    return (
        <div className="edit-ui">
            <PersonInfo />
            <Training />
            <Exp />
        </div>
    )
}

export default EditUi