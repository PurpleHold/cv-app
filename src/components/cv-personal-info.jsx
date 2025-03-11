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
                {location && <div className="location"><img className="cv-ico" src="/src/assets/map-pin-line.svg"/><p>{location}</p></div>}
                {email && <div className="email"><img className="cv-ico" src="/src/assets/mail-line.svg"/><p>{email}</p></div>}
                {phone && <div className="phone"><img className="cv-ico" src="/src/assets/phone-line.svg"/><p>{phone}</p></div>}
                {website && <div className="website"><img className="cv-ico" src="/src/assets/link.svg"/>
                    <a href={`${website.includes('https://www.')?website:('https://www.'+website)}`}>{website}</a>
                </div>}
            </div>
            {tags && <div className="tags">{tagsDivs}</div>}
        </div>
    )
}

export default CVPersInfo