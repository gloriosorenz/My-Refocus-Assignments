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

/* function to process each delivery item */
const processDeliveries = function (items_obj) {
    storeInvetory[items_obj.inventoryIndex].quantity += items_obj.quantity;
    storeInvetory[items_obj.inventoryIndex].price_$ = items_obj.price_$;
  };
  
/* Process All Delivered Items */
newDeliveries.forEach(processDeliveries);

/** ****************************************************************** */

// PART 2

const productSummary = (itemsObj) => {
    const itemID = itemsObj.item.slice(0,3).toLowerCase();
    var remarks = "good";
    if(itemsObj.quantity < 10){
        remarks = "item stock is low.";
    }
    var message = `itemID: ${itemID} | ${itemsObj.item} | stocks left: ${itemsObj.quantity} | Remarks: `;
    return message.concat(remarks);
}

const reportSummary = storeInvetory.map(productSummary);


console.log(`Delivered items have been added to the inventory.`);
console.log(`New inventory summary:`);
console.log(storeInvetory);
console.log(reportSummary);