import readDatabase from '../utils';

let DBPATH = '';

if (process.argv.length > 2) {
  DBPATH = process.argv[2].toString();
}

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(DBPATH)
      .then((data) => {
        const result = ['This is the list of our students'];
        // sort data by keys
        const entries = Object.entries(data);
        entries.sort((a, b) => a[0] - b[0]);
        const sortedData = Object.fromEntries(entries);
        // eslint-disable-next-line guard-for-in
        for (const data in sortedData) {
          result.push(
            `Number of students in ${data}: ${
              sortedData[data].length
            }. List: ${sortedData[data].join(', ')}`,
          );
        }
        res.status(200).send(result.join('\n'));
      })
      .catch((err) => {
        res.status(500).send(err.message.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    readDatabase(DBPATH)
      .then((data) => {
        if (!(major in data)) {
          res.status(500).send('Major parameter must be CS or SWE');
        } else {
          res.status(200).send(`List: ${data[major].join(', ')}`);
        }
      })
      .catch((err) => {
        res.status(500).send(err.message.toString());
      });
  }
}

module.exports = StudentsController;