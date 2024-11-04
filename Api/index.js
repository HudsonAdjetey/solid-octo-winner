//⚠️ You can join using the link shared

// Axios Vs Fetch

fetch("https://dummy.api.axios.com")
  .then((res) => {
    return res.json();
  })
/*   .then((data) => {
    return CompositionEvent(data);
  }) */
  .then((data) => {
    return data;
  })
  .catch((err) => console.error(err));


/* export const api = axios.create({
    baseURL: "https://dummy.api.axios.com",
    headers: {
      "Content-Type": "application/json",
    },
  withCredentials: true
}) */


  import axios from axios


const fetchData = async (req, res) => {
      try {
        const res = await axios.get(req.url)

          if (res.status !== "ok" && res.status) {
            console.log("Error reaching endpoint")
        }

        return res.json()
      } catch (error) {
        console.error(error)
          if (error.status === 401) {
              return {
                  status: 401,
                  message: "Invalid Endpoint"
            }
        }
      }
  }










//   local storage and the session storage mechanism

const variableKeyPair = {
    name: "Hudson"
}
localStorage.setItem("key", JSON.stringify(variableKeyPair));

/* 

key = value {
    "name" : "Hudson"
}

*/

JSON.parse(localStorage.getItem("key"))

localStorage.removeItem("key")



sessionStorage.setItem("key", JSON.stringify(variableKeyPair));

/* 

key = value {
    "name" : "Hudson"


}
    */



JSON.parse(sessionStorage.getItem("key"))

sessionStorage.removeItem("key")









const worker = new Worker("worker.js")

worker.onmessage = function (event) {
    console.log(event.data)
}


worker.postMessage(5)


// send 5 to the worker