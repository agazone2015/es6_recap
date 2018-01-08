import { error } from "util";
// import { resolve } from "dns";

//const name = "Agnes is great programmer";

///////////////////////////////// TEMPLATE LITERALS /////////////////////////////////

let name = "Aga";

let message = `Dear

                     Student`;

console.log(mesage);

let message2 = `Dear

                     ${name}`;

console.log(mesage2);
/////////////////////////////////
let num = 10;
let num2 = 20;

let sum = `The total was: $${num1 + num2}`;
console.log(sum);

/////////////////////////////////
let title = function() {
    return "Sam Smith";
}

let link = `<a href="">${title()}</a>`;

console.log(link);


///////////////////////////////// SPREAD OPERATORS ... /////////////////////////////////

let adults = ["Jon", "Peter", "Maria"];

let kids = ["Johnny", "Pablito", "Marinita"];

let people = ["Human", "Sapience", ...adults, ...kids];

console.log(people);
console.log(...people);
/////////////////////////////////

var sendData = function(usename, email, password) {
    console.log("DATA SENT", username, email, passwoed);
}

var someData = ["Rico", "rico@coding.com", "code"];

sendData(...someData);

/////////////////////////////////
var cars = [
    {barnd: "Honda", doors: 2},
    {barnd: "BMW", doors: 4}
];

var newCars = [
    {barnd: "Toyota", doors: 2},
    {barnd: "Volvo", doors: 4}
];

cars.push(...newCars);
console.log(...cars);

///////////////////////////////// FUNCTION DEFAULT PARAMETERS /////////////////////////////////

function cars(car1 = "Honda", car2 = "BMW") {
    console.log(car1, car2);
}

cars("Ferrari", "Porche");

////////////////////////////////////////// ARROW FUNCTIONS /////////////////////////////////////
// old way: 
var cal = function(num1, num2) {
    return num1 + nmu2;
}
console.log(cal(4 + 6));
//same as ES:

var calculate = (num1, num2) => {num1 + num2};
console.log(calculate(2 + 6));

//////////////////////////////////// SHORTHAND PROPERTIES /////////////////////////////////////

// old way:
var person1 = {
    named: "Anna",
    runns: function() {
        console.log("Anna is running");
    }
}
/////////////////////////////////
person1.age = 14;
person1.runs();

// same as es6:

var nameoa  = "Anna";
var runs = () => {
            console.log("Anna is running");
    };
var person = {nameoa, runs};
person.runs();

/////////////////////////////////

var student = "Edwin";
var lastName = "Diaz";
    var human = {
        name,
        running() {
            console.log("Anna is running");
        },
        walking() {
            console.log("Anna is walks");
        }
    };
    human.running();

//////////////////////////////////// THIS KEYWORD /////////////////////////////////////

// var ludzik = {
//     firstName: "Aggie",
//     moves: ['running', 'fighting', 'flying'],
//     displayMoves: function() {

//         var that = this;

//         this.moves.forEach(function(move) {
//             var string = that.firstName + " is" + move + " towards enemy";
//             console.log(string);
//         });
//     }
// };
// ludzik.displayMoves();

//or the same but different trick ---bind---

// var ludzik = {
//     firstName: "Aggie",
//     moves: ['running', 'fighting', 'flying'],
//     displayMoves: function() {

//         this.moves.forEach(function(move) {
//             var string = that.firstName + " is" + move + " towards enemy";
//             console.log(string);
//         }.bind(this));
//     }
// };
// ludzik.displayMoves();

//or the same but ES6:

var ludzik = {
    firstName: "Aggie",
    moves: ['running', 'fighting', 'flying'],
    displayMoves(){

        this.moves.forEach(move => {
            var string = that.firstName + " is" + move + " towards enemy";
            console.log(string);
        });
    }
};
ludzik.displayMoves();

//////////////////////////////////// DESTRUCTURING /////////////////////////////////////

// old way with Arrays:
var cars = ["BMW", "Audi", "Ferrari"];
console.log(cars[0]);

// ES6 new way with Arrays:
var [bmw,,Ferrari] = ["BMW", "Audi", "Ferrari"];
console.log(bmw, Ferrari);

/////////////////////////////////

// old way with Objects:
var ludz = {
    nameer: "Stefan",
    bio: "is a programmer"
};
console.log(ludz.nameer);

// ES6 new way with Objects:
var {nameer, bio} = {
    nameer: "Stefan",
    bio: "is a programmer"
};
console.log(nameer, bio);

////////////////////////////////////////////////////////////////// EXTRUCTING DATA ON THE GO

// real deal process of EXTRUCTING DATA from arrays or objects and assigning them to veriables on the go
// create an object with some properties
let Aga = {
    profesion: "Programmer",
    level: 8
};
// create method (function) that EXTRACTS properties and returns them
let displayData = ({profession, level}) => {
    return `${profession} ${level}`;
};
// here - calling the function pass the object that you want to EXTRACT properties from
console.log(displayData(Aga));

//////////////////////////////////// CLASSES /////////////////////////////////////
//////////////////////////////////// CLASSES /////////////////////////////////////

class Person {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    displayInfo() {
        console.log(`${this.name} is a great ${this.title}`);
    }
}

let object = new Person("Anna", "Professor");
displayInfo();

//////////////////////////////////// CLASS INHERITANCE /////////////////////////////////////

class Spicies {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    displayInfo() {
        console.log(`${this.name} is a great ${this.title}`);
    }
}

class Alien extends Spicies {
    constructor() {
        super("Rico", "Web Developer");
    }
}

let alien = new Alien();
alien.displayInfo();

//////////////////////////////////// DEFINING PROMISES /////////////////////////////////////
//////////////////////////////////// ASYNCHRONOUS /////////////////////////////////////

db.query("SELECT users", function(result) {
    console.log(result);
});
console.log("do something else at the same time - asynchronous");
//////////////////////////////////// PROMISES /////////////////////////////////////
//////////////////////////////////// PROMISES /////////////////////////////////////
//////////////////////////////////// PROMISES /////////////////////////////////////
//////////////////////////////////// PROMISES /////////////////////////////////////
//////////////////////////////////// PROMISES /////////////////////////////////////
//////////////////////////////////// PROMISES /////////////////////////////////////

let myPromise = (resolve, reject)=>{   // always 2 parameters - one for success and one for rejection
    let isComplete = false; // or true;

    if(isComplete) {
        resolve("This will be resolve of completion");
    } else {
        reject("This is result of NOT completion");
    }
}

//////////////////////////////////// USING PROMISES /////////////////////////////////////

myPromise.then((result)=>{
    console.log(result);
}, (error)=>{
    console.log(error);
});

//////////////////////////////////// CHAINING PROMISES /////////////////////////////////////

let turnOnComputer = function() {
    return new Promise((resolve, reject)=> {
        resolve("Computer is on");
    });
};

let openBrowser = function(msg) {
    return new Promise((resolve, reject)=> {
        resolve(msg + "Browser is open");
    });
};

let goToThisPage= function(msg) {
    return new Promise((resolve, reject)=>{
        resolve(msg + "Go to eduweb.pl");
    });
};

turnOnComputer().then((result)=>{
    return openBrowser(result);
}).then((result)=>{
    return goToThisPage(result);
}).then((result)=>{
    console.log("We are done here " + result);
});

//////////////////////////////////// MORE CHAINING PROMISES AND ERROR HANDELING /////////////////////////////////////

turnOnComputer().then((result)=>{
    return openBrowser(result);
}, (error)=>{
    console.log(error);
}).then((result)=>{
    return goToThisPage(result);
}, (error)=>{
    console.log(error);
}).then((result)=>{
    console.log("We are done here " + result);
});


//////////////////////////////////// MORE CHAINING PROMISES AND ERROR CATCHING /////////////////////////////////////

let turnOnMonitor = function() {
    return new Promise((resolve, reject)=> {
        resolve("Computer is on");
    });
};

let openProgram = function(msg) {
    return new Promise((resolve, reject)=> {
        reject(msg + "Browser is failed");
    });
};

let goToThisChanel= function(msg) {
    return new Promise((resolve, reject)=>{
        resolve(msg + "Go to eduweb.pl");
    });
};

turnOnMonitor().then((result)=>{
    return openProgram(result);
}).then((result)=>{
    return goToThisChanel(result);
}).catch((errror)=>{
    console.log(error);
});

// or

Promise.all([turnOnMonitor(), openProgram(), goToThisChanel()]).then(function() { // but all promises must be resolve!!!!!
    console.log("Done");
});