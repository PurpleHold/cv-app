export const onMove = (id, move, direction) => {
    let moveUpd = allSections.map(x => {
        if (x.id == section.id) { return {...x, title: e.target.value}}
        else { return x; }
    });
    setSection(moveUpd);
}