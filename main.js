#! /use/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colorfull Welcome Message
console.log(chalk.green("Welcome to the Word Counter!"));
console.log("=".repeat(60));
// prompt the user to enter a Sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: "
    }
]);
// Triming the sentence and spliting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// analyses of user input sentences
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words."));
console.log(words);
console.log(chalk.bold(`\n - word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
