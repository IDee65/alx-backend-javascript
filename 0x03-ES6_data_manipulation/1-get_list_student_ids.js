const getListStudentIds = (array) => {
    const temp = array;
    let idList = [];
    if (temp instanceof Array) {
      idList = temp.map((obj) => obj.id);
      return idList;
    }
    return idList;
  };
  
  export default getListStudentIds;
