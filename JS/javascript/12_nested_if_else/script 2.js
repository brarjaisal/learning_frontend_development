let username = `Jai`;
let userAge = 18;

// if(!username) {
//     username = `Guest`;
// }


if(username) {
    console.log(`Name: ${username}`);
}

if(userAge) {
    console.log(`Age: ${userAge}`);
}

debugger

if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
} else if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
} else if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
    if(userAge >=20) {
        console.log('He/she is above 19.');
    }
    else {
        console.log('He/she is below 20.');
        if(username.length > 5) {
            console.log('And his/her name is long.');
        }
        else {
            console.log('And his/her name is short.');
        }
    }
} else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
} else if (userAge > 45 && userAge < 121) {
    console.log(`${username} is retired.`);
    console.log('And he/she reads newspaper.');
} else if (userAge >= 121) {
    console.log(`${username} is immortal.`);
    console.log('And he/she is a vampire.');
} else {
    console.log('Please enter a valid age.');
}

console.log('Program Ended!!');