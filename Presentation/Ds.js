// For a deeper understanding of functional programming, write your own implementation of map(), filter(), reduce()
//map()
const cgpa = [
    { name: "John", cgpa: 4.5 },
    { name: "Jane", cgpa: 3.0 },
    { name: "Jim", cgpa: 4.0 }
]

const firstClass = 4.5
const secondClass = 3.0
const thirdClass = 2.0

const result = cgpa.map((i)=>(i.cgpa));
console.log(result);

//reduce() && filter()
const items =[
    {name:"apple",price:1.00, qty:5, isTock: true},
    {name:"banana",price:0.50, qty:5, isTock: true},
    {name:"orange",price:1.50, qty:5, isTock: false}
]

const letFilt = items.filter((i)=>(i.isTock=true))

const finalPrice = letFilt.reduce((pri,items)=>(pri+items.price * items.qty));
console.log(finalPrice);
