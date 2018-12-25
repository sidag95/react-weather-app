const data = [
{
day: "Sunday",
weather: "Sunny"
},
{
day: "Monday",
weather: "Sunny"
},
{
day: "Tuesday",
weather: "Overcast"
},
{
day: "Wednesday",
weather: "Cloudy"
},
{
day: "Thrusday",
weather: "Cloudy"
},
{
day: "Friday",
weather: "Rainy"
},
{
day: "Saturday",
weather: "Rainy"
}
]

function Api(props) {
  const api = {
    getData: async (url, returnSuccess = true) => {
      if (returnSuccess) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(data);
          }, 2000);
        })
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Error!!"))
        }, 2000)
      })
    }
  }
  return props.children(api)
}

export default Api