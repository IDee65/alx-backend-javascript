export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
    const arrayBuf = new ArrayBuffer(length);
    const int8 = new Int8Array(arrayBuf, 0, length);
    int8.set([value], position);
    return new DataView(arrayBuf);
  }
