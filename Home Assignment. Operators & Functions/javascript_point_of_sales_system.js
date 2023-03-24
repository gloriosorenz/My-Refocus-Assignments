// PART 1
const storeInvetory = [
    {
        item: "Shampoo",
        quantity: 1,
        price_$: 3
    }, 
    {
        item: "Soap",
        quantity: 0,
        price_$: 2
    }, 
    {
        item: "Toothpaste",
        quantity: 2,
        price_$: 3
    }
];

const newDeliveries = [
    {
        item: "Shampoo",
        quantity: 5,
        price_$: 4,
        inventoryIndex: 0
    },
    {
        item: "Soap",
        quantity: 10,
        price_$: 2,
        inventoryIndex: 1
    },
    {
        item: "Toothpaste",
        quantity: 10,
        price_$: 3,
        inventoryIndex: 2
    },
];

function processDeliveries(itemsObj){
    let index = 0;
    itemsObj.forEach((element) => {
        if(element.item === storeInvetory[index].item){
            // update quantity
            storeInvetory[index].quantity += element.quantity;
            // update price
            storeInvetory[index].price_$ = element.price_$;

            index++;
        }
    });

    // console.log("Delivered items have been added to the inventory.");
    // console.log("New invetory summary:");
    // console.log(storeInvetory);
}

processDeliveries(newDeliveries);

/** ****************************************************************** */

// PART 2

function productSummary(itemsObj){
    const itemID = itemsObj.item.slice(0,3).toLowerCase();
    var remarks = "good";
    if(itemsObj.quantity < 10){
        remarks = "item stock is low.";
    }
    var message = `itemID: ${itemID} | ${itemsObj.item} | stocks left: ${itemsObj.quantity} | Remarks: `;
    return message.concat(remarks);
}

const reportSummary = storeInvetory.map(productSummary);

console.log(reportSummary);