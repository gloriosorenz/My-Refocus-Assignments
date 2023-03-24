let customer = {
    customer_name: "Johnny Manggo",
    points: 12300,
    cart: [
        {
            item: "Shampoo",
            quantity: 2,
            price_$: 3
        },
        {
            item: "Soap",
            quantity: 2,
            price_$: 2
        },
        {
            item: "Toothpaste",
            quantity: 1,
            price_$: 3
        },
    ]    
}

console.log(`Hi ${customer.customer_name}! We are happy to see you today.\nYour current points are: ${customer.points}.`);

let total_bill = 0;

console.log("Purchased items:");
for(let i=0; i <= customer.cart.length-1; i++){
    console.log(`${customer.cart[i].quantity} x ${customer.cart[i].item} ---- $ ${customer.cart[i].price_$.toFixed(2)}`);

    total_bill += customer.cart[i].price_$ * customer.cart[i].quantity;;
    customer.points += customer.cart[i].quantity;

}

console.log(`Total Bill: $ ${total_bill.toFixed(2)}`);
console.log(`New Current Points: ${customer.points}`);

