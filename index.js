//========== require the prompt module and create interface ==========
const prompt = require('readline').createInterface(process.stdin, process.stdout);
const inquirer = require("inquirer");

const User = require("./lib/user");
const Admin = require("./lib/Admin");
const ATM = require("./lib/atm");

const user = new User();
const admin = new Admin(0.0)


// var Balance=0.00
// var cash=50000;
//    console.log("============You are welcome to Diamond Bank=============")
function app(){
    inquirer.prompt([{
        type: "list",
        name: "goodness",
        message: "Sign in",
        choices: ['Admin','User']
    }]).then(answer=>{
        const Atm = new ATM(user,admin);
        Atm.chooseOperation(answer.goodness)
       
    
    })
    
}

app();

exports.app = app;

// module.exports = {
//     app: app
// }