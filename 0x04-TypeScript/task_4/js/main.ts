export const cpp: Subjects.Cpp = new Subjects.Cpp;
export const java: Subjects.Java = new Subjects.Java;
export const react: Subjects.React = new Subjects.React

export const cTeacher: Subjects.Teacher = {
    firstName: 'Ayobami',
    lastName: 'Alaran'
}

cpp.setTeacher(cTeacher)

console.log(`C++ ${cpp.getAvailableTeacher()} ${cpp.getRequirements()}`)

java.setTeacher(cTeacher);

console.log(`Java ${java.getAvailableTeacher()} ${java.getRequirements()}`)

react.setTeacher(cTeacher);

console.log(`React ${react.getAvailableTeacher()} ${react.getRequirements()}`)
