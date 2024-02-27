const fs = require('fs');

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

    console.log(`Number of students: ${students.length}`);

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
      console.log(
        `Number of students in ${field}: ${
          fields[field].length
        }. List: ${fields[field].join(', ')}`,
      );
    }
  } catch (err) {
    // console.log(err);
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;