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


