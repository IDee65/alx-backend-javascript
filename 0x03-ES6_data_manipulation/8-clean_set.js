export default function cleanSet(set, startString) {
    if (startString === '') return '';
    const setCopy = [...set];
    const processedSet = setCopy
      .filter((item) => item.startsWith(startString))
      .map((item) => item.slice(startString.length))
      .join('-');
    return processedSet;
  }
