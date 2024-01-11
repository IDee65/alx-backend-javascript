interface MajoCredits {
    credits: number;
    brand: 'Major';

}

interface MinorCredit {
    credits: number;
    brand: 'Minor';
}

function sumMajorCredits(subject1: MajoCredits, subject2: MajoCredits): number{
    const sum = subject1.credits + subject2.credits;
    return sum;
}

function sumMinorCredit(subject1: MinorCredit, subject2: MinorCredit): number {
    const sum = subject1.credits + subject2.credits;
    return sum;
}

const minor1: MinorCredit = {
    credits: 5,
    brand: 'Minor'
}

const minor2: MinorCredit = {
    credits: 15,
    brand: 'Minor'
}

console.log(sumMinorCredit(minor1, minor2));
