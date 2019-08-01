const inquirer = require("inquirer");

//*********************************User*********************************** */

class User{
    constructor(){

    }
    chooseOperationTypes(admin){
        inquirer.prompt([{
            type:"password",
            name:"user",
            message:"Login",
            mask:true,
        },
        {
            type:"list",
            name:"goodness",
            message:"Select Below",
            choices:['Withdraw','checkAccountBalance','Exit']
        }]).then(answer=>{
                if(answer.goodness=='checkAccountBalance'){
                    this.Balance();
                } else if(answer.goodness=='Withdraw'){
                    this.Withdraw(admin);

                }else{
                    this.Exit();
           
                }
        })
    }
    Balance(){
        console.log(`Your balance is ${Balance}`)
      }

      Withdraw(admin){
        admin.withdraw()
        
    } 
    
    
    Exit(){
        console.log("Thanks for banking with us")
        console.log(process.exit())
    }   
}

module.exports = User;