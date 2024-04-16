// 'use strict';

// // // Initiates an Item class
// // function Item(name, category) {
// // 	this.name = name;
// // 	this.category = category;
// // }

// // // Create a method called getDetaills() for an Item
// // Item.prototype.getDetails = function () {
// // 	return `${this.name} - ${this.category}`;
// // };

// // // Initialize a PurchasedItem class, inherits the Item class
// // function PurchasedItem(name, category, price) {
// // 	Item.call(this, name, category);
// // 	this.price = price;
// // }

// // // Set the inherited methods and properties of the base class
// // PurchasedItem.prototype = Object.create(Item.prototype);
// // PurchasedItem.prototype.constructor = PurchasedItem;

// // // Create a new methhod just for the extended PurchasedItem class
// // PurchasedItem.prototype.getDetailsWithPrice = function () {
// // 	return `${this.name} - ${this.category} - $${this.price}`;
// // };

// // var item = new Item('Coffee', 'Food');
// // item.category = 'Drinks';

// // var PurchasedItem = new PurchasedItem('Sugar', 'Food', '2.49');

// class Item {
// 	constructor(name, category) {
// 		this.name = name;
// 		this.category = category;
// 	}

// 	static maxItem = 10;

// 	static getHelperText() {
// 		return 'Add some items to your grocery list';
// 	}

// 	getDetails() {
// 		return `${this.name} - ${this.category}`;
// 	}
// }

// class PurchasedItem extends Item {
// 	constructor(name, category, price) {
// 		super(name, category);
// 		this.price = price;
// 	}

// 	getDetailsWithPrice() {
// 		return `${this.name} - ${this.category} - ${this.price}`;
// 	}

// 	static getNumbersOfItems() {
// 		return `3 / ${sup.maxItem}`;
// 	}
// }

// // let item = new Item('Coffe', 'Food');
// // item.category = 'Drinks';

// // let purchasedItem = new PurchasedItem('Sugar', 'Food', '2.49');

// // document.getElementById('output').innerHTML = item.getDetails();

// // btn.addEventListener('click', function () {
// // 	document.getElementById('output').innerHTML = purchasedItem.getDetailsWithPrice();
// // });
// document.getElementById('output').innerHTML = PurchasedItem.getNumbersOfItems();
