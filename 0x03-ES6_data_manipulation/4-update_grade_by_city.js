export default function updateStudentGradeByCity(students, city, newGrades) {
    // get all students in the location
    const studentByLocation = students.filter(
      (student) => student.location === city,
    );
  
    // map the studentByLocation array and update grades
    const updatedStudents = studentByLocation.map((student) => {
      const studentWithId = newGrades.find(
        (studentById) => student.id === studentById.studentId,
      );
      return {
        ...student,
        grade: studentWithId ? studentWithId.grade : 'N/A',
      };
    });
  
    return updatedStudents;
  }
