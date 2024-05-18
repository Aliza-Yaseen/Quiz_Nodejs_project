#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "What is the correct way to check if two values are not equal in TypeScript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Which is the following characters are commonly allowed in variables in TypeScript ?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Which operators is commonly used for string concatination in TypeScript ?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "In TypeScript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "which method of inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
        break;
}
switch (quiz.question_2) {
    case "$":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
        break;
}
switch (quiz.question_3) {
    case "+":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
        break;
}
switch (quiz.question_4) {
    case ";":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
        break;
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
        break;
}
console.log(`Score ${score}`);
