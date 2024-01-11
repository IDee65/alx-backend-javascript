interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher { 
    numberOfReports: number;
}

interface printTeacherFunction { 
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => { 
    return `${firstName.charAt(0)}. ${lastName}`;
}

const teacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    yearsOfExperience: 3,
}

console.log(printTeacher(teacher.firstName, teacher.lastName));


interface StudentConstructor { 
    constructor(firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface extends StudentConstructor { 
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface { 
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) { 
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ["constructor"](firstName: string, lastName: string): StudentInterface {
        return new StudentClass(firstName, lastName);
    }
    workOnHomework(): string { 
        return 'Currently working';
    }
    displayName(): string { 
        return this.firstName;
    }
}

console.log(new StudentClass('John', 'Doe').workOnHomework());
