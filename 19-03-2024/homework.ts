let storeCategory:string[]=['grocery','crokery','beauty'];

let groceryList:string[]=['vegetables','fruits','frozen items'];
let vegetableList:string[]=['onion','tomato','garlic','ginger'];
type vegetables={
name: string;
specification: string;
origin: string;
price:number;
quality:boolean;
};

let vegetablesList0:vegetables={
name:'Onion',
specification:'white onion is good for heart',
origin:'pakistan',
price: 250,
quality:true,
};

let vegetablesList1:vegetables={
name:'tomato',
specification:'tomato supports barin health',
origin: 'pakistan',
price: 150,
quality:true,
};

console.log(vegetablesList0);
console.log(vegetablesList1);
