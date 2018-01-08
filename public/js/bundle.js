/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _console, _console2;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//const name = "Agnes is great programmer";

///////////////////////////////// TEMPLATE LITERALS /////////////////////////////////

var name = "Aga";

var message = "Dear\n\n                     Student";

console.log(mesage);

var message2 = "Dear\n\n                     " + name;

console.log(mesage2);
/////////////////////////////////
var num = 10;
var num2 = 20;

var sum = "The total was: $" + (num1 + num2);
console.log(sum);

/////////////////////////////////
var title = function title() {
    return "Sam Smith";
};

var link = "<a href=\"\">" + title() + "</a>";

console.log(link);

///////////////////////////////// SPREAD OPERATORS ... /////////////////////////////////

var adults = ["Jon", "Peter", "Maria"];

var kids = ["Johnny", "Pablito", "Marinita"];

var people = ["Human", "Sapience"].concat(adults, kids);

console.log(people);
(_console = console).log.apply(_console, _toConsumableArray(people));
/////////////////////////////////

var sendData = function sendData(usename, email, password) {
    console.log("DATA SENT", username, email, passwoed);
};

var someData = ["Rico", "rico@coding.com", "code"];

sendData.apply(undefined, someData);

/////////////////////////////////
var cars = [{ barnd: "Honda", doors: 2 }, { barnd: "BMW", doors: 4 }];

var newCars = [{ barnd: "Toyota", doors: 2 }, { barnd: "Volvo", doors: 4 }];

cars.push.apply(cars, newCars);
(_console2 = console).log.apply(_console2, cars);

///////////////////////////////// FUNCTION DEFAULT PARAMETERS /////////////////////////////////

function cars() {
    var car1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Honda";
    var car2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "BMW";

    console.log(car1, car2);
}

cars("Ferrari", "Porche");

////////////////////////////////////////// ARROW FUNCTIONS /////////////////////////////////////
// old way: 
var cal = function cal(num1, num2) {
    return num1 + nmu2;
};
console.log(cal(4 + 6));
//same as ES:

var calculate = function calculate(num1, num2) {
    num1 + num2;
};
console.log(calculate(2 + 6));

//////////////////////////////////// SHORTHAND PROPERTIES /////////////////////////////////////

// old way:
var person1 = {
    named: "Anna",
    runns: function runns() {
        console.log("Anna is running");
    }
    /////////////////////////////////
};person1.age = 14;
person1.runs();

// same as es6:

var nameoa = "Anna";
var runs = function runs() {
    console.log("Anna is running");
};
var person = { nameoa: nameoa, runs: runs };
person.runs();

/////////////////////////////////

var student = "Edwin";
var lastName = "Diaz";
var human = {
    name: name,
    running: function running() {
        console.log("Anna is running");
    },
    walking: function walking() {
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
    displayMoves: function displayMoves() {

        this.moves.forEach(function (move) {
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
var _ref = ["BMW", "Audi", "Ferrari"],
    bmw = _ref[0],
    Ferrari = _ref[2];

console.log(bmw, Ferrari);

/////////////////////////////////

// old way with Objects:
var ludz = {
    nameer: "Stefan",
    bio: "is a programmer"
};
console.log(ludz.nameer);

// ES6 new way with Objects:
var _nameer$bio = {
    nameer: "Stefan",
    bio: "is a programmer"
},
    nameer = _nameer$bio.nameer,
    bio = _nameer$bio.bio;

console.log(nameer, bio);

////////////////////////////////////////////////////////////////// EXTRUCTING DATA ON THE GO

// real deal process of EXTRUCTING DATA from arrays or objects and assigning them to veriables on the go
// create an object with some properties
var Aga = {
    profesion: "Programmer",
    level: 8
};
// create method (function) that EXTRACTS properties and returns them
var displayData = function displayData(_ref2) {
    var profession = _ref2.profession,
        level = _ref2.level;

    return profession + " " + level;
};
// here - calling the function pass the object that you want to EXTRACT properties from
console.log(displayData(Aga));

//////////////////////////////////// CLASSES /////////////////////////////////////
//////////////////////////////////// CLASSES /////////////////////////////////////

/***/ })
/******/ ]);