/* eslint-disable import/prefer-default-export */
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint exists in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high.');
    }
    weakMap.set(endpoint, count + 1);
  }
}
