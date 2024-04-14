#! usr/bin/env/ node
import inquirer from "inquirer";
let mybalance = 10000;
let mypincode = 2005;
let pinanswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
if (pinanswer.pin === mypincode) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please selecet option",
            type: "list",
            choices: ["withdraw", "checkbalance"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter withdrawl amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > mybalance) {
            console.log("Insufficient balance");
        }
        else {
            mybalance -= amountAns.amount;
            console.log("Your remaining balance is: " + mybalance);
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log("Your currecnt balance is " + mybalance);
    }
}
else {
    console.log("Incorrect pin code");
}
