export const initialSections = [
    {title:'Profile', type:'custom', class:'custom', id:5, pos:[0,0], lineVal:0, childIds:[11],},
    {title:'', id:11, pos:0, lineVal:0, parentId:5, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut eros risus. Vestibulum et dui et mi egestas tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer iaculis eu odio non aliquet.'},
    {title:'Training', type:'train', class:'custom', id:1, pos:[0,1], lineVal:0, childIds:[2,6]},
    {title:'Some really interesting degree', id:2, pos:0, lineVal:0, parentId:1, orga:'Awesome University', year:'2019', desc:'Any relevant final year project, study trip, dissertation, ...'},
    {title:'Yet another diploma', id:6, pos:1, lineVal:1, parentId:1, orga:'Prestigious College', year:'2017', desc:'',},
    {title:'Experience', type:'xp', class:'custom', id:3, pos:[0,2], lineVal:0, childIds:[7,8],},
    {title:'Lead Developer', id:7, pos:0, lineVal:0, parentId:3, orga:'Awesome Company', year:'2022 - Now', desc:'Describe here the skills you developped in this organisation, projects completed, challenges addressed. More information about the company/organisation if relevant',},
    {title:'UX Designer', id:8, pos:1, lineVal:1, parentId:3, orga:'Prestigious Organisation', year:'2019 - 2022', desc:'',},
    {title:'Skills', type:'skill', class:'custom', id:4, pos:[1,1], lineVal:1, childIds:[9,10,12],},
    {title:'Skill1', id:9, pos:0, lineVal:0, parentId:4, desc:'Some desc',},
    {title:'Skill2', id:10, pos:1, lineVal:1, parentId:4, desc:'Some other desc',},
    {title:'Skill3', id:12, pos:2, lineVal:2, parentId:4, desc:'Yet another desc',},
  ];

  