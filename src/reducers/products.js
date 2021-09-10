var initialState = [
	{
		id: 1,
		name: "Chocolate Truffles",
		image: "./assets/images/product-1.png",
		descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing",
		priceOld: 150000,
		price: 100000,
		productType: "sale",
		inventory: 10
	},
	{
		id: 2,
		name: "Milk Chocolate Pudding ",
		image: "./assets/images/product-2.png",
		descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing",
		priceOld: 0,
		price: 200000,
		productType: "",
		inventory: 15
	},
	{
		id: 3,
		name: "Chocolate Van",
		image: "./assets/images/product-3.png",
		descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing",
		priceOld: 0,
		price: 300000,
		productType: "new",
		inventory: 5
	},
	{
		id: 4,
		name: "Chocolate Cookies",
		image: "./assets/images/product-4.png",
		descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing",
		priceOld: 0,
		price: 30000,
		productType: "",
		inventory: 5
	},
	{
		id: 5,
		name: "Chocolate Truffles",
		image: "./assets/images/product-3.png",
		descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing",
		priceOld: 350000,
		price: 50000,
		productType: "",
		inventory: 5
	},
	{
		id: 6,
		name: "Chocolate Pudding",
		image: "./assets/images/product-4.png",
		descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing",
		priceOld: 300000,
		price: 250000,
		productType: "new",
		inventory: 25
	},
	{
		id: 7,
		name: "Dark Chocolate Cake",
		image: "./assets/images/product-1.png",
		descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing",
		priceOld: 400000,
		price: 300000,
		productType: "",
		inventory: 3
	},
	{
		id: 8,
		name: "Chocolate Cookies",
		image: "./assets/images/product-2.png",
		descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing",
		priceOld: 0,
		price: 300000,
		productType: "",
		inventory: 15
	},
];

const products = (state = initialState, action) => {
	switch (action.type) {
		default: return [...state];
	}
};

export default products;