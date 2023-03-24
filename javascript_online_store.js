/**
 *  Individual Project: Online Clothing Store
 *  Created by: Renz Glorioso
 */

var isLoggedIn = false;
var userID = null;
var cart = [];

const shop = {
    shopName: "Zara",
    address: "Manhattan Avenue, New York",
    uniqueCode: "NY656",
    users: [
        {
            firstName: "Angelina",
            lastName: "Jolie",
            age: 47,
            birthday: new Date("1975-04-06"),
            pin: 123456,
            username: "ange",
            password: "ange123"
        },
        {
            firstName: "Brad",
            lastName: "Pitt",
            age: 48,
            birthday: new Date("1974-02-14"),
            pin: 112233,
            username: "brad",
            password: "brad123"
        },
    ],
    clothingItems: [
        {
            itemName: "Blue jeans",
            category: "Trousers",
            price: 50,
            stock: 10
        },
        {
            itemName: "White t-shirt",
            category: "Tops",
            price: 10,
            stock: 25
        },
        {
            itemName: "Converse",
            category: "shoes",
            price: 100,
            stock: 5
        },
    ],
    checkItems: () => {
        console.log("Available Items: ")
        shop.clothingItems.forEach(element => console.log(element.itemName));
    },
    decreaseStock: (element, index) => {
        shop.clothingItems[index].stock -= element;
    },
    addStock: (element, index) => {
        shop.clothingItems[index].stock += element;
    },

}

/** ******************************************************************************************************************************************** */



// ADMIN ACTIONS
function shopControl(callback, data){
    callback(data);
}

function addUser(info){
    shop.users.push(info);

    console.log(info.firstName + " " + info.lastName + " has beed added!");
}

function addItems(info){
    shop.clothingItems.push(info);
    console.log(info.itemName + " has beed added!");
}

function productSummary(itemsObj){
    var remarks = "good";
    if(itemsObj.stock < 10){
        remarks = "item stock is low.";
    }
    var message = `Item: ${itemsObj.itemName} | Stocks: ${itemsObj.stock} | Remarks: `;
    return message.concat(remarks);
}




// USER ACTIONS
function userControl(){
    // USER LOGIN
    function loginUser(username, password){
        shop.users.forEach((element, index) => {
            if(element.username == username && element.password == password){
                isLoggedIn = true;
                userID = index;
                console.log("Hi " + element.firstName + " " + element.lastName);
            }
        });

        if(!isLoggedIn){
            userID = null;
            console.log("Invalid Credentials!");
        }
    }

    // USER CHECK AVAILABLE ITEMS
    function checkAvailableItems(){
        if(isLoggedIn){
            console.log("These are the available items today:");
            shop.clothingItems.forEach(element => {
                if(element.stock > 0){
                    console.log(element.itemName);
                }
            });
        }
        else{
            showError("You are not logged in.");
        }
    }

    // USER ADDS ITEM TO CART
    function addToCart(itemName, quantity){
        if(isLoggedIn){
            shop.clothingItems.forEach(element => {
                if(element.itemName === itemName){
                    cart.push({
                        itemName: element.itemName,
                        price: element.price,
                        quantity: quantity
                    });
                    console.log(element.itemName + " has beed added to your cart!");
                }
            });
        }
        else{
            showError("You are not logged in.");
        }
    }

    // USER CHECKS CART
    function showCart(){
        if(isLoggedIn){
            console.log("CART ITEMS: ");
            console.log(cart);
        }
        else{
            showError("You are not logged in. \n");
        }
    }

    // USER CONFIRMS ORDER FUNCTION
    function confirmOrder(msg, cart, amount){
        let index = 0;
        let total = 0;
        if(msg === "Yes" && isLoggedIn){
            cart.forEach(element => {
                if(shop.clothingItems.filter(e => e.itemName === element.itemName)){
                    total = computeTotal(cart);
                    shop.decreaseStock(element.quantity, index);
                    index++;
                }
            });
        }
        else{
            showError("You are not logged in. \n");
        }

        let change = amount - total;
        showReceipt(total, amount, change);

    }

    // TO SHOW RECEIPT
    function showReceipt(total, amount, change){
        console.log("RECEIPT: ");
        cart.forEach(element => {
            console.log(element.quantity + " x " + element.itemName + " = " + (element.price * element.quantity));
        });
        console.log("Total: " + total);
        console.log(`You paid ₱${amount.toFixed(2)}. Your change is ₱${change.toFixed(2)}. Thank you, come again!`);
    }



    // COMPUTES THE TOTAL AMOUNT INSIDE THE CART
    function computeTotal(cart){
        let total = 0;
        cart.forEach(element => {
            total = total + (element.price * element.quantity);
        });

        return total;
    }

    // SHOWING ERROR MESSAGE
    function showError(msg){
        console.log(msg);
    }

    return {
        loginUser,
        checkAvailableItems,
        addToCart,
        showCart,
        confirmOrder,
        computeTotal,
        showReceipt,
        showError
    }
}


/** ******************************************************************************************************************************************** */

// OUTPUT
// ADD NEW USER
shopControl(addUser,{
    firstName: "John",
    lastName: "Cena",
    age: 45,
    birthday: new Date("1978-04-06"),
    pin: 654321,
    username: "johncena",
    password: "ucantseeme"
});

// ADD NEW SHOP ITEM
shopControl(addItems, {
    itemName: "Black Jacket",
    category: "Jackets",
    price: 10,
    stock: 31
});

// SHOWS THE CURRENT PRODUCT DETAILS
console.log("PRODUCTS:")
console.log(shop.clothingItems);


console.log("---------------------");

// USER LOGS IN
var angelina = userControl();
angelina.showCart(); // TO CHECK IF USER IS LOGGED IN
angelina.loginUser("johncena", "ucantseeme");
angelina.checkAvailableItems();

console.log("---------------------");

// USER ADDS ITEM TO CART
angelina.addToCart("White t-shirt",5);
angelina.addToCart("Converse", 2);
angelina.addToCart("Blue jeans", 3);
angelina.addToCart("Black Jacket", 4);
console.log("---------------------");

// USER CHECKS CART ITEMS
angelina.showCart();
console.log("---------------------");

// USER CONFIRMS ORDER
angelina.confirmOrder("Yes", cart, 1000);
console.log("---------------------");


// REPORT SUMMARY OF CLOTHING ITEMS AFTER CUSTOMER CHECKS OUT
console.log("PRODUCT REPORT:")
const reportSummary = shop.clothingItems.map(productSummary);
console.log(reportSummary);





