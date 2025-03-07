import { getUid } from "../getUid";

function CVPersInfo({firstName, lastName, occupation, location, email, phone, website, pic, tags}) {

    let tagsDivs = [];
    if (tags) {
        tags.forEach(tag => {
            let newId = getUid();
            tagsDivs.push(
                <div className="header-tag" key={newId}>{tag}</div>
            )
        });
    }

    return (
        <div className={`cv-pers ${pic==''&&'no-pic'}`}>
            <div className="fullname">{firstName} <span className="last">{lastName}</span></div>
            <div className="occupation">{occupation}</div>
            <div className="contact">
                {location && <div className="location"><i className="iconoir-map-pin"></i>{location}</div>}
                {email && <div className="email"><i className="iconoir-mail"></i>{email}</div>}
                {phone && <div className="phone"><i className="iconoir-phone"></i>{phone}</div>}
                {website && <div className="website"><i className="iconoir-link"></i>
                    <a href={`${website.includes('https://www.')?website:('https://www.'+website)}`}>{website}</a>
                </div>}
            </div>
            {tags && <div className="tags">{tagsDivs}</div>}
        </div>
    )
}

export default CVPersInfo