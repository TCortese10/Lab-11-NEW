class ProductProperties{
    // constructor method to set properties
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    // method to return the product in stock
    getTotalValue() {
        return this.price * this.quantity;
    }
    // displays product information
    toString () {
        console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`);
    }
        // static method created
    static applyDiscount(products, discount) {
        for (let product of products) { // goes through each item and then applies the discount
            product.price = product.price - (product.price * discount)
        }
        
    }

}

// subclass of productProperties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // calls the parent constructor
        this.expirationDate = expirationDate; // add expiration date
    }

    toString () { //overwrites and adds expiration date
        console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`);
    }

}

// two instances of the PerishableProcuts class
let item1 = new PerishableProductProperties("Banana", 25, 5, "2025-05-10");
item1.toString();

let item2 = new PerishableProductProperties("Canned Soup", 5, 108, "2032-03-21");
item2.toString();

//created new items and array that applies a discount

let item3 = new ProductProperties("Beans", 15, 12);
let item4 = new ProductProperties("Peas", 22.50, 23);
let item5 = new ProductProperties("Carrots", 8.50, 455);
let item6 = new ProductProperties("Beans", 15.25, 233);

ProductProperties.applyDiscount([item3, item4, item5, item6], 0.2);
//outputs discounted items
console.log("");
console.log("Discounted Items");
console.log("----------------");
item3.toString();
item4.toString();
item5.toString();
item6.toString();


// create a store inventory

class Store {
    constructor() {
        this.inventory = []; //creating an inventory that will store items
    }

    addProduct(product){
        this.inventory.push(product); //adds items to an array
    }

    getInventoryValue() {
        let value = 0;
        for (let product of this.inventory) {
            value += product.getTotalValue() //runs through a loop and gets the total value of all items in inventory
        }
        return value;
    }

    findProductByName(name) { // runs through inventory and looks for mathcing name. if not found null is returned
        for (let product of this.inventory) {
            if (product.name === name) {
                return product;
            }
        }
        return null;
    }
}

// 5 new products created
let product1 = new ProductProperties("Chicken", 33.99, 94);
let product2 = new ProductProperties("Rice", 7.25, 126);
let product3 = new ProductProperties("Pork", 27.50, 52);
let product4 = new PerishableProductProperties("Onions", 67, 330);
let product5 = new PerishableProductProperties("Cake", 55, 21);

//add products to the store object

let store = new Store();
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(product4);
store.addProduct(product5);

console.log("");
console.log("Total Inventory Value Before Discount: $" + store.getInventoryValue().toFixed(2)); // displays value before discount

//applies discount on inventory
ProductProperties.applyDiscount(store.inventory, .15);

console.log("");
console.log("Total Inventory Value After Discount: $" + store.getInventoryValue().toFixed(2)); // displays value after discount
console.log("");

// search product by name
let findProduct = store.findProductByName("Chicken");
if (findProduct) { // if the name matches anything in the store, it calls the string method and outputs information
    findProduct.toString();
}