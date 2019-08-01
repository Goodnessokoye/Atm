const inquirer = require("inquirer");
class Atm {
    constructor(user,admin){
        this.user = user;
        this.admin = admin;
    }
    chooseOperation(goodness){
        if(goodness=='Admin'){
            this.admin.chooseOperation()
        }else{
          this.user.chooseOperationTypes(this.admin)
        }
    }

   
}

module.exports = Atm;