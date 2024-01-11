interface AdminInterface { 
    workFromHome: () => string;
    getCoffeeBreak?: () => string;
}

interface DirectorInterface extends AdminInterface { 
    workDirectorTasks: () => string;
}

interface TeacherInterface extends AdminInterface { 
    workTeacherTasks: () => string;

}

class Director implements DirectorInterface { 
    workFromHome(): string { 
        return "Working from home";
    }

    goToWork(): string { 
        return "Getting coffee break";
    }

    workDirectorTasks(): string { 
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface { 
    workFromHome(): string { 
        return "Cannot work from home";
    }

    getCoffeeBreak(): string { 
        return "Cannot have a break";
    }

    workTeacherTasks(): string { 
        return "Getting to work";
    }
}

type salaryType = number | string;
type employeeType = Director | Teacher;

function createEmployee(salary: salaryType): employeeType { 
    if (typeof salary !== 'number') { 
        if (salary.startsWith('$')) { 
            salary = salary.slice(1);
        }
        const salaryNumber = Number(salary);
    }
    const salaryNumber = Number(salary);
    if (salaryNumber < 500) { 
        return new Teacher();
    } else if (salaryNumber >= 500) { 
        return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: employeeType): boolean { 
    return employee instanceof Director;
}

function executeWork(employee: employeeType): void { 
    if (employee instanceof Director) { 
        console.log(employee.workDirectorTasks());
    }
    else { 
        console.log(employee.workTeacherTasks());
    }
}

console.log(executeWork(new Director()));
console.log(executeWork(new Teacher()));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Students = 'Math' | 'History';

function teachClass(todayClass: Students): string { 
    if (todayClass === 'Math') { 
        return 'Teaching Math';
    } else if (todayClass === 'History') { 
        return 'Teaching History';
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
