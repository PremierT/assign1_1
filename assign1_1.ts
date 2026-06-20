let productName: string = "T-shirt";
let pricePerUnit: number = 200;
let quantity: number = 6;
let isMember: boolean = false;

let totalPrice: number = pricePerUnit * quantity;
let discount: boolean = totalPrice > 1000 || isMember;
let discountrate: number;
if(discount == true){
	discountrate = 0.10;
}else{
	discountrate = 0;
}


console.log("Product is %s, Quantity is %d.\n",productName,quantity);
console.log("Totalprice is %d ฿.\n",totalPrice);
console.log("Discount?: %s, it's %d.\n",discount,totalPrice*discountrate);
let netprice: number = totalPrice-(totalPrice*discountrate);
console.log("Net price is %d. ฿",netprice);
