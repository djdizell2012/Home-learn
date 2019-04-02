let money = prompt ('Ваш бюджет?');
let score = prompt ('Название магазина');
let mainList = {
	bydget: money,
	nameScore: score,
	shopGoods: [],
	employers: {},
	open: false
};


mainList.shopGoods[0] = prompt ('Как вид товаров будем продавать?');
mainList.shopGoods[1] = prompt ('Как вид товаров будем продавать?');
mainList.shopGoods[2] = prompt ('Как вид товаров будем продавать?');
alert(mainList.bydget / 30);
console.log(mainList);
