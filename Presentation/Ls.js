// For a deeper understanding of functional programming, write your own implementation of map(), filter(), reduce()

//.map()
const teammates = [
    {name:"Lynn",
    hobby: "photography",
    age:12,
    },
    {name:"Sammy",
        hobby: "soccer",
        age:15,
        },
        {name:"Nashe",
            hobby: "gamming",
            age:16,
            },
]

const hobbies = teammates.map((teammate)=> teammate.hobby);

console.log(hobbies)

//.filter()
 const olderchilden = teammates.filter((teammate)=> teammate.age > 13);
 console.log(olderchilden)


 //reduce()
 const scores = [8,9,2];
 const sum = scores.reduce(ac)
