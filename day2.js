//create a array of objects with food data
//with properties (name,price,quantity)

//and display it using a for loop in the console
let food=[
    {
        name:"Pizza",
        price:350,
        quantity:1
    }
    ,
    {
        name:"Dark Chocolate",
        price:750,
        quantity:2
    }
    ,
    {
        name:"Chilly Chicken",
        price:450,
        quantity:1
    }
]

for(let num=0;num<food.length;num++){
    console.log(food[num]);
}
