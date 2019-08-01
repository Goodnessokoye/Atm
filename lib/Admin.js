const inquirer = require("inquirer");
const app = require("../index.js")


console.log(app)
//*************************Admin****************************


class Admin{
    constructor(cash){
        this.cash = cash || 0.0;

       
    }
    chooseOperation(){
        inquirer.prompt([{
            type: "password",
            name: "admin",
            message: "Sign in",
            mask:true,
        },
        {
            type:"list",
            name:"admin",
            message:"which operation do you want to perform?",
            choices:["load money","Disable the machine","Exit"]
        },
        
    ]).then(answer=>{
        console.log(answer.admin)
        if(answer.admin==="load money"){
            this.UploadMoney()

        }else{
            this.DisableMachine()
        }
    })
    }
withdraw(){
    inquirer.prompt({
        type: "list",
        name: "user",
        message: "Amount",
        choices:[0.00,1000,2000,5000,10000]
    }).then(answer=>{
        console.log(answer.user)
        console.log(this.cash)
        if(answer.user < this.cash){
            this.cash= this.cash - answer.user;
            console.log("You've withdrawn " + answer.user)
            console.log("your account balance is " + this.cash)
            
        }else{
            console.log("Insufficient Balance")
        }
    })
}


  

    UploadMoney(){
        inquirer.prompt({
            type: "input",
            name: "topUp",
            message: "The amount avaliable for Loading?",
          
        }).then(answer=>{
            this.cash = this.cash + Number(answer.topUp)
            if(answer.topUp){
                console.log("Topup successful/n "+"your topup of " + answer.topUp +" is successful " +"The avaliable cash is  " + this.cash)
                app.app()
            }else{
            console.log("E go be my G")
            process.exit()
            }
          
        })

    }



    DisableMachine(){


    }

    Exit(){
        console.log("Have a nice day")
        console.log(process.exit())

    }
      
    } 
    

    module.exports = Admin;

    