#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let myBalance = 50000;
const myPin = 9876;
console.log(chalk.yellowBright.bold.underline("\n\t\tAutomated Teller Machine\n"));
console.log(chalk.blue.italic(`My Current Balance is $${myBalance}.\n`));
const pinAnswer = await inquirer.prompt([
    {
        message: chalk.green("Enter Your Pin Number :"),
        type: "number",
        name: "pin",
    }
]);
do {
    // CONDITION FOR PIN 
    if (pinAnswer.pin === myPin) {
        console.log(chalk.magentaBright.italic("\nCorrect Pin Code!!\n"));
        const questions = await inquirer.prompt([{
                message: chalk.green("What do you want to do?"),
                type: "list",
                name: "operation",
                choices: [{ value: 'Fast Cash' }, { value: 'Withdraw' }, { value: 'Check Balance' }]
            },
        ]);
        //CONDITION FOR OPERATIONS 
        //   CONDITION FOR FAST CASH
        if (questions.operation === "Fast Cash") {
            let fastCash = await inquirer.prompt([{
                    message: chalk.green("Select One Option !"),
                    type: "list",
                    name: "cash",
                    choices: [{ value: '1000' }, { value: '2000' }, { value: '5000' }, { value: '7000' }, { value: '10000' }],
                }]);
            //CONDITION FOR FAST CASH AMOUNT
            if (myBalance >= fastCash.cash) {
                if (fastCash.cash === '1000') {
                    myBalance -= fastCash.cash;
                    console.log(chalk.blueBright(`\nAmount`) + chalk.yellow(` $${fastCash.cash} `) + chalk.blueBright(`is successfully withdraw. \nYour Remaining balance is `) + chalk.yellow(`$${myBalance}\n`));
                }
                else if (fastCash.cash === '2000') {
                    myBalance -= fastCash.cash;
                    console.log(chalk.blueBright(`\nAmount`) + chalk.yellow(` $${fastCash.cash} `) + chalk.blueBright(`is successfully withdraw. \nYour Remaining balance is `) + chalk.yellow(`$${myBalance}\n`));
                }
                else if (fastCash.cash === '5000') {
                    9;
                    myBalance -= fastCash.cash;
                    console.log(chalk.blueBright(`\nAmount`) + chalk.yellow(` $${fastCash.cash} `) + chalk.blueBright(`is successfully withdraw. \nYour Remaining balance is `) + chalk.yellow(`$${myBalance}\n`));
                }
                else if (fastCash.cash === '7000') {
                    myBalance -= fastCash.cash;
                    console.log(chalk.blueBright(`\nAmount`) + chalk.yellow(` $${fastCash.cash} `) + chalk.blueBright(`is successfully withdraw. \nYour Remaining balance is `) + chalk.yellow(`$${myBalance}\n`));
                }
                else if (fastCash.cash === '10000') {
                    myBalance -= fastCash.cash;
                    console.log(chalk.blueBright(`\nAmount`) + chalk.yellow(` $${fastCash.cash} `) + chalk.blueBright(`is successfully withdraw. \nYour Remaining balance is `) + chalk.yellow(`$${myBalance}\n`));
                }
            }
            else {
                console.log("Insufficient Balance!!");
            }
        }
        // CONDITION FOR WITHDRAW
        else if (questions.operation === "Withdraw") {
            let withdrawAmount = await inquirer.prompt([{
                    message: chalk.green("\nEnter amount you want to withdraw"),
                    name: "amount",
                    type: "number",
                }]);
            // CONDITION IF BALANCE IS INSUFFUICIENT 
            if (myBalance >= withdrawAmount.amount) {
                myBalance -= withdrawAmount.amount;
                console.log(chalk.blueBright(`\nAmount `) + chalk.yellow(`$${withdrawAmount.amount}`) + chalk.blueBright(` is successfully withdraw. \nYour Remaining balance is `) + chalk.yellow(`$${myBalance}.\n`));
            }
            else {
                console.log(chalk.redBright.italic(`\nInsufficient Balance !!\n`));
            }
        }
        // CONDITION FOR CHECK BALANCE 
        else if (questions.operation === "Check Balance") {
            console.log(chalk.cyan(`\nYour Balance is ${myBalance}.\n`));
        }
    }
    else {
        console.log(chalk.redBright.italic("\nIncorrect Pin!!\n"));
        process.exit();
    }
    // Confirmation
    const confirm = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "Do Want To continue ?",
        choices: [{ value: "Yes" }, { value: "No" }],
    });
    if (confirm.ans === "Yes") {
        console.log(chalk.blackBright.bold("\nYou Are Continue In ATM\n"));
        continue;
    }
    else {
        console.log((chalk.gray("\nYou Successfully Exit From The ATM")));
        process.exit();
    }
} while (true);
