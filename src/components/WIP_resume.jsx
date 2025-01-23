import Card from "./card"
import SectionForm from "./section-form"

function Resume({resume, setResume, onPosChange}) {

    /* Titre + corps de texte */
    /* Bouton pour cacher / effacer le résumé */

    return (
        <Card
        onPosChange={onPosChange}
        title='Training'
        sectionClass={'train-card'}
        type='train'
        content={
            <>
                <div className="edit-train-container">
                    {trainingsArr}
                </div>
                <button className="add" onClick={(e) => handleFormCreation(e)}>New</button>
            </>
        }/>
    )
}

export default Resume