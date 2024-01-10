const groceriesList = () => {
    const foodMap = new Map();
    const foodObj = {
      Apples: 10,
      Tomatoes: 10,
      Pasta: 1,
      Rice: 1,
      Banana: 5,
    };
    for (const [key, value] of Object.entries(foodObj)) {
      foodMap.set(key, value);
    }
    return foodMap;
  };
  
  export default groceriesList;
