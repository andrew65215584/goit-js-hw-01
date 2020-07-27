class SHOP {
	constructor(item, quantity) {
		this.item = item;
		this.quantity = quantity;
	}

	showBuy(item) {
		console.log(`Вы купили ${this.item}`);
	}

	buy(item, quantity) {
		this.quantity += quantity;
	}
}

const myShop = new SHOP('socks', 10);

console.log(myShop);





