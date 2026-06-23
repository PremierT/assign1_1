let bookTitle: string = "มหาเวทผนึกมาร";
let isbn: string = "978-616-12-3456-7";
let price: number = 670; //canlessthan500
let isAvailable: boolean = true; //can_be_false
let isPremium: boolean = price > 500;

let bookSummary: [string, number] = [bookTitle, price];
let showcase: boolean = isPremium && isAvailable;
let netprice: number = price - (price*0.15);

console.log("-----------------------------");
console.log(`รหัส ISBN is ${isbn}.\n`);
console.log(`หนังสือ ${bookSummary[0]}, ราคา ${bookSummary[1]} ฿.\n`);
console.log(`ส่วนลด ${price*0.15} ฿, ราคาสุทธิ ${netprice} ฿.\n`);
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
console.log("-----------------------------");//end

