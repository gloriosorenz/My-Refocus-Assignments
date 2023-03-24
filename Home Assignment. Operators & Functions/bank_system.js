// bank system

/**
 * Object
 *  Bank Name - string
 *  Address - string
 *  Bank Money - number
 *  Accounts - array of objects
 *      - Name - string
 *      - Last name - string
 *      - Gender - string
 *      - Address - string
 *      - Balance - number
 *      - Pin - number
 *      - Username - string
 *      - Password - string
 */
var isLoggedIn = false;
var userID = null;

var bank = {
    bankName: "Bank of Refocus",
    address: "Philippines",
    bankMoney: 0,
    accounts: [
        {
            firstname: "Renz",
            lastName: "Glorioso",
            gender: "Male",
            address: "Laguna",
            balance: 0,
            pin: 123456,
            username: "abc123",
            password: "abc123"
        },
        {
            firstname: "Tony",
            lastName: "Stark",
            gender: "Male",
            address: "California",
            balance: 0,
            pin: 654321,
            username: "ironman",
            password: "ironman143"
        },
        {
            firstname: "Bruce",
            lastName: "Banner",
            gender: "Male",
            address: "Hawaii",
            balance: 0,
            pin: 000111,
            username: "hulk",
            password: "hulk143"
        },
    ],
    checkBankBalance: function(){
        console.log("The bank balance is: ₱" + bank.bankMoney);
    },
    depositBankMoney: function(amount){
        this.bankMoney += amount;
        console.log("Added ₱" + amount.toFixed(2) + " to the VAULT!");
    },
    withdrawBankMoney: function(amount) {
        if(amount <= this.bankMoney && amount > 0){
            this.bankMoney -= amount;
            console.log("Deducted ₱" + amount.toFixed(2) + " to the VAUL!");
        }
        else{
            console.log("Insufficient balance");
        }
    }
}

function accountControl(){
    // login
    function loginUser(username, password){
        bank.accounts.forEach((element, index) => {
            if(element.username == username && element.password == password){
                isLoggedIn = true;
                userID = index;

                console.log("Hi " + element.firstname + " " + element.lastName)
            }
        });

        if(!isLoggedIn){
            userID = null;

            console.log("Invalid Credentials!");
        }
    }

    // deposit money to account
    function depositMoney(amount){
        if(isLoggedIn){
            bank.accounts[userID].balance += amount;
            bank.depositBankMoney(amount);

            console.log("You deposited: ₱" + amount.toFixed(2));
        }
        else{
            showError("You are not logged in, please log in!");
        }
    }

    // showing error message
    function showError(msg){
        console.log(msg);
    }

    // checking account balance
    function checkBalance(){
        if(isLoggedIn){
            console.log("Your account balance is " + bank.accounts[userID].balance.toFixed(2));
        }
        else{
            showError("Please log in!");
        }
    }

    // withdraw money to account
    function withdrawMoney(amount){
        if(isLoggedIn){
            if(bank.accounts[userID].balance >= amount && amount > 0){
                bank.accounts[userID].balance -= amount;
                bank.withdrawBankMoney(amount);

                console.log("You withdrawn: ₱" + amount.toFixed(2));
            }
            else{
                showError("Something went wrong!");
            }
        }
        else{
            showError("Please log in!");
        }
    }

    return {
        showError,
        withdrawMoney,
        checkBalance,
        depositMoney,
        loginUser
    }
}



var renz = accountControl();
renz.loginUser("abc123", "abc123");
renz.depositMoney(500);
renz.depositMoney(800);
renz.withdrawMoney(250);
renz.checkBalance();

console.log("---------------------");

var tony = accountControl();
tony.loginUser("ironman", "ironman143");
tony.depositMoney(350000);
tony.depositMoney(350000);
tony.checkBalance();

console.log("---------------------");

bank.checkBankBalance();

console.log("---------------------");


// PART 2

function bankControl(callback, data){
    callback(data);
}

// add user
function addUser(info){
    bank.accounts.push(info);

    console.log(info.firstname + " " + info.lastName + " has beed added");
}

// remove user
function removeUser(id){
    isLoggedIn = false;
    userID = null;
    
    console.log(bank.accounts[id].firstname + " " + bank.accounts[id].lastName + " has been removed");
    bank.accounts.splice(id, 1);
}

bankControl(addUser,{
    firstname: "Jason",
    lastName: "Beggar",
    gender: "Male",
    address: "Poorville",
    balance: 0,
    pin: 555000,
    username: "iampoor",
    password: "iampoor"
});


console.log("---------------------");
var jason = accountControl();
jason.loginUser("iampoor", "iampoor");
jason.depositMoney(70);
jason.depositMoney(20);

console.log("---------------------");

bankControl(removeUser, 2);

var hulk = accountControl();
hulk.loginUser("hulk", "hulk143");
// console.log(bank.accounts);
