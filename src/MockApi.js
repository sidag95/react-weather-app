const data = [
  {
    day: "Sunday",
    weather: "Sunny",
    low: 29,
    high: 42
  },
  {
    day: "Monday",
    weather: "Sunny",
    low: 29,
    high: 40
  },
  {
    day: "Tuesday",
    weather: "Overcast",
    low: 23,
    high: 37
  },
  {
    day: "Wednesday",
    weather: "Cloudy",
    low: 20,
    high: 30
  },
  {
    day: "Thrusday",
    weather: "Cloudy",
    low: 21,
    high: 29
  },
  {
    day: "Friday",
    weather: "Rainy",
    low: 19,
    high: 25
  },
  {
    day: "Saturday",
    weather: "Rainy",
    low: 19,
    high: 24
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