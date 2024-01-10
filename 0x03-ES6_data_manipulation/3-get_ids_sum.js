export default function getStudentIdsSum(array) {
    const initValue = 0;
    const sum = array.reduce(
      (accumulator, obj) => accumulator + obj.id,
      initValue,
    );
    return sum;
  }
