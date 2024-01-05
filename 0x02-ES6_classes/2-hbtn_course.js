export default class HolbertonCourse {
    constructor(name, length, students) {
      if (typeof name !== 'string') throw new TypeError('Name must be a string');
      else this._name = name;
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      } else this._length = length;
      if (students instanceof Array) this._students = students;
      else throw new TypeError('must be an array');
    }
  
    // name getter
    get name() {
      return this._name;
    }
  
    // name setter
    set name(name) {
      if (typeof name !== 'string') throw new TypeError('Name must be a string');
      else this._name = name;
    }
  
    // length getter
    get length() {
      return this._length;
    }
  
    set length(length) {
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a numebr');
      } else this._length = length;
    }
  
    get students() {
      return this._students;
    }
  
    // set students
    set students(students) {
      if (students instanceof Array) this._students = students;
      else throw new TypeError('must be an array');
    }
  }
