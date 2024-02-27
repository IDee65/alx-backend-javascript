const fs = require('fs');
const express = require('express');

const app = express();

let DBPATH = '';

if (process.argv.length > 2) {
  DBPATH = process.argv[2].toString();
}

const PORT = 1245;

const countStudents = async (path) => {
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

    let result = `Number of students: ${students.length}\n`;

    const fields = {};

    students.forEach((student) => {
      // extract firstname and field for the each student object
      const { firstname, field } = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // eslint-disable-next-line guard-for-in
    for (const field in fields) {
      result += `Number of students in ${field}: ${
        fields[field].length
      }. List: ${fields[field].join(', ')}\n`;
    }
    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(DBPATH)
    .then((data) => {
      res.send(['This is the list of our students', data].join('\n'));
    })
    .catch((err) => {
      // eslint-disable-next-line prefer-template
      res.send('This is the list of our students\n' + err.message.toString());
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;