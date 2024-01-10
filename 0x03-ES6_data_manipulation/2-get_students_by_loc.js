const getStudentsByLocation = (studentArray, location) => {
    let result = [];
    result = studentArray.filter((obj) => obj.location === location);
    return result;
  };
  
  export default getStudentsByLocation;
