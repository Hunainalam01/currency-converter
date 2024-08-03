#! /usr/bin/env/ node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    PKR: 278,
    INR: 83,
    SAR: 3.75,
    AFN: 70.9,
    BDT: 117,
    AED: 3.6,
};
const answer = await inquirer.prompt([
    {
        message: "Enter money change From",
        name: "changeFrom",
        type: "list",
        choices: ["PKR", "USD", "INR", "SAR", " AFN", "BDT", "AED"]
    },
    {
        message: "Enter money change into",
        name: "into",
        type: "list",
        choices: ["PKR", "USD", "INR", "SAR", " AFN", "BDT", "AED"]
    }, {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[answer.changeFrom];
let intoAmount = currency[answer.into];
let changedAmount = answer.amount;
// change into base amount
let baseAmount = changedAmount / fromAmount;
// convert amount 
let converted = baseAmount * intoAmount;
converted = parseFloat(converted.toFixed(2));
console.log(`You choose to convert ${answer.changeFrom} amount into ${answer.into} amount `);
console.log(`Your converted amount is ${converted} ${answer.into}`);
