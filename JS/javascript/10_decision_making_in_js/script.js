const username = prompt('Please Enter Your Name.') || 'Jane Doe';
const userAge = parseInt(prompt('Please Enter Your Age.')) || '-';
const userGender = prompt('Please Enter Your Pronoun.') || 'he/she';

debugger;
console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log(`And ${userGender} is playing.`);
}

if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log(`And ${userGender} is learning science and maths.`);
}

if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log(`And ${userGender} is learning computer science.`);
}

if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log(`And ${userGender} is a web developer.`);
}

if (userAge > 45) {
    console.log(`${username} is retired.`);
    console.log(`And ${userGender} reads newspaper.`);
}

console.log('Program Ended!!'); 