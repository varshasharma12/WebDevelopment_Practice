//Task:Shopping Cart and Variable Arguments
//Concepts: Objects, arrays inside objects,rest parameters,loops,functions
//Create a shoppingcart object containing a customer name and an array of items.Each item should 
//Create a function caculatecarttotal(...prices)that acceppts any number of prices and returns their sum
//Create function

/*const shoppingCart={
    customerName: "Varsha",
    items:[
        { name:"Milk",price:30,quantity:2},
        { name:"Bread",price:40,quantity:1},
        { name:"Sugar",price:90,quantity:2},
        { name:"Rice",price:150,quantity:1},

    ]
};*/



const shoppingCart = {
    customerName: "Rahul",
    items: [
        { name: "Milk", price: 30, quantity: 2 },
        { name: "Bread", price: 40, quantity: 1 },
        { name: "Eggs", price: 90, quantity: 2 },
        { name: "Rice", price: 250, quantity: 1 }
    ]
};

// Function using rest parameter
function calculateCartTotal(...prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total = total + prices[i];
    }

    return total;
}

// Calculate total of one item
function calculateItemTotal(item) {
    return item.price * item.quantity;
}

// Calculate complete bill
function calculateCartBill(cart) {
    let prices = [];

    for (let i = 0; i < cart.items.length; i++) {
        prices.push(calculateItemTotal(cart.items[i]));
    }

    let subtotal = calculateCartTotal(...prices);
    let discount = 0;

    if (subtotal > 2000) {
        discount = subtotal * 10 / 100;
    }

    let finalAmount = subtotal - discount;

    return {
        subtotal: subtotal,
        discount: discount,
        finalAmount: finalAmount
    };
}

// Display checkout summary
function displayCheckoutSummary(cart) {
    console.log("Customer:", cart.customerName);
    console.log("----------------------------");

    for (let i = 0; i < cart.items.length; i++) {
        let item = cart.items[i];
        let total = calculateItemTotal(item);

        console.log(
            item.name + " x " + item.quantity + " = ₹" + total
        );
    }

    let bill = calculateCartBill(cart);

    console.log("----------------------------");
    console.log("Subtotal: ₹" + bill.subtotal);
    console.log("Discount: ₹" + bill.discount);
    console.log("Final Amount: ₹" + bill.finalAmount);
}

// Test with multiple items
displayCheckoutSummary(shoppingCart);

// Test with empty cart
console.log("\nEmpty Cart Test:");

const emptyCart = {
    customerName: "Rahul",
    items: []
};

displayCheckoutSummary(emptyCart);

// Test with single item
console.log("\nSingle Item Test:");

const singleCart = {
    customerName: "Rahul",
    items: [
        { name: "Laptop", price: 25000, quantity: 1 }
    ]
};

displayCheckoutSummary(singleCart);