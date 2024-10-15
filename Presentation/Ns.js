// For a deeper understanding of functional programming, write your own implementation of map(), filter(), reduce()
//basically map function l used it most of the time in react.js 



//LETS SAY WE ARE WORKING WITH REACT AND WE HAVE A DUMMY DATA FROM AN API

// SO FOR THAT WE WILL DO SOMETHING LIKE THIS WITH MAP

  const [ data, setData] = useState()
  import axios from "axios"

  
  
  const Ns = () => {
       
    useEffect(() => {
      const fetch = ()=>{
        axios.get("https://api/jsonplaceholder.typeicode")
        .then(result =>{
          setData(result.data)
        }).catch(error =>{
          console.log(error)
        })
      }
      fetch()
    
    }, [data]);

    return (
      <div>
        {data.map((item,index)=>(
        <div key={index}>  <div>{item.name}</div>
          <div>{item.description}</div></div>
        ))}
      </div>
    )
  }
  
  export default Ns

  // .. thats my use case of map



  // for filter i use like soo


  const users = [
    {
      name:john,
      age:20,
    },
    {
      name:john,
      age:12,
    },
    {
      name:john,
      age:10,
    }
  ]

  const ageIs10 = users.filter(user => user.age == 10)
  console.log(ageIs10)

  // thats a simple use case in reduce l use it like this one


  const ages = [10,20,30,60]

  const total = ages.reduce((accumulator,age)=> {
    const total = accumulator + age
    return total
  })
total()


