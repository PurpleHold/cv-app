let firstId = 15;

export  const getUid = () => {
    firstId ++
    return firstId;
  }

/* 
  --> La fonction prend un argument type (soit child/parent)
  --> Elle stocke {type:parent/child, }
*/