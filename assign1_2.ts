let bookTitle: string = "มหาเวทผนึกมาร";
let isbn: string = "978-616-12-3456-7";
let price: number = 670;
let isAvailable: boolean = true;
let isPremium: boolean = price >= 500;

let bookSummary: [string, number] = [bookTitle, price];
let showcase: boolean = isPremium && isAvailable;
let netprice: number = price - (price*0.15);

console.log("-----------------------------");
console.log("รหัส ISBN is \"%s\".\n",isbn);
console.log("หนังสือ %s, ราคา %d ฿.\n",bookSummary[0],bookSummary[1]);
console.log("ส่วนลด %d ฿, ราคาสุทธิ %d ฿.\n",price*0.15,netprice);
if(isPremium == true){
	console.log("หนังสือระดับ: Premium.\n");
}else{
	console.log("หนังสือระดับ: Normal.\n");
}
if(isAvailable == true){
	console.log("สถานะ: ว่าง.\n");
}else{
	console.log("สถานะ: ไม่ว่าง.\n");
}
if(showcase == true){
	console.log("สามารถจัดแสดงที่หน้าตู้โชว์ได้.\n");
}else{
	console.log("ไม่สามารถจัดแสดงที่หน้าตู้โชว์ได้.\n");
}
console.log("-----------------------------");



