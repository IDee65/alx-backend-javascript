const calculateNumber = (type, a, b) => {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    let result;
  
    switch (type) {
      case 'SUM':
        result = roundA + roundB;
        break;
      case 'SUBTRACT':
        result = roundA - roundB;
        break;
      case 'DIVIDE':
        if (roundB === 0) {
          result = 'Error';
        } else {
          result = roundA / roundB;
        }
        break;
      default:
        result = 'Unrecognised type';
        break;
    }
    return result;
  };
  
  module.exports = calculateNumber;