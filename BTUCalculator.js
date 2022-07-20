//Takes in a input of sqft and gives the min and max btu necessary 
//If an input is entered that is not a number it should detect the error
"use strict";

//Allows for an input to be taken
const ps = require("prompt-sync");
const prompt = ps();

//Takes user input and converts it into BTUs
function getBTU() {
    console.log("Welcome to Erick's BTU Calculator!");

    let length = prompt("What is the length in feet? ");
    let width = prompt("What is the width in feet? ");
    console.log('');

    while (isNaN(length) || isNaN(width)) {
        console.log("Please enter a number!")
        length = prompt("What is the length in feet? ");
        width = prompt("What is the width in feet? ");
        console.log(''); 
    }

    let minBtu = (length * width * 50);
    let maxBtu = (length * width * 55);

    console.log("Your minimum amount of BTUs required is " + (minBtu) +  ' BTUs');
    console.log("Your maximum amount of BTUs required is " + (maxBtu) +  ' BTUs' + '\n');

    let repeat = prompt("Would you like to do another calculation? (Enter yes or no) ");
    console.log('')

    if (repeat == "yes") {
        getBTU();
    }
    if (repeat == "no") {
        process.exit();
    }

    while ((repeat != "yes") && (repeat != "no")) {
        console.log("Please enter yes or no! ");
        repeat = prompt("Would you like to do another calculation? ");
        console.log('')
    }

    if (repeat == "yes") {
        getBTU();
    }
    if (repeat == "no") {
        process.exit();
    }
}

//Calls getBTU function
getBTU();

