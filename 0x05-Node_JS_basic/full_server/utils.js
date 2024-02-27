import fs from 'fs';
// const fs = require('fs');

const readDatabase = async (path) => {
  try {
    // read the database
    const studentData = await fs.promises.readFile(path, 'utf8');
    const students = [];

    const transformedData = studentData.trim().split('\n').slice(1);
    transformedData.forEach((data) => {
      // destructure each data in the list seperated by ,
      const [firstname, lastname, age, field] = data.split(',');
      // if the destructured exist
      if (firstname && lastname && age && field) {
        // create a student object with the property name and their value
        // eslint-disable-next-line object-curly-newline
        students.push({ firstname, lastname, age, field });
      }
    });

    const fields = {};

    students.forEach((student) => {
      // extract firstname and field for the each student object
      const { firstname, field } = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

// readDatabase('../database.csv').then((data) => {
//   console.log(data);
// });

module.exports = readDatabase;