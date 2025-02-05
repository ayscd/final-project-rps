//FUNCTION GETS THE CURRENT CITY NAME FROM API
function currentCity(info) {
    let cityElement = document.querySelector("#current-city"); //variable for the city's name on the page
    let apiCity = info.data.city;

    cityElement.innerHTML = apiCity; //replaces the city's name with the prompt result
}

//FUNCTION GETS THE CURRENT TEMP DATA FROM API
function currentTemp(info){
    let Temp = document.querySelector(".current-temperature-value");
    let apiTemp = info.data.temperature.current;
    apiTemp = Math.round(apiTemp);

    Temp.innerHTML = apiTemp;
}

//FUNCTION GETS THE CURRENT WEATHER DESCRIPTON FROM API
function currentDescription(info) {
    let currentDescription = document.querySelector(".current-description");
    let apiDescription = info.data.condition.description;

    currentDescription.innerHTML = apiDescription;
}

//FUNCTION GETS THE CURRENT WIND DATA FROM API
function currentWind(info) {
    let currentWind = document.querySelector(".wind");
    let apiWind = info.data.wind.speed;

    currentWind.innerHTML - apiWind;
}

//FUNCTION GETS THE CURRENT HUMIDITY DATA FROM API
function currentHumidity(info) {
    let currentHumidity = document.querySelector(".humidity");
    let apiHumidity = info.data.temperature.humidity;

    currentHumidity.innerHTML = apiHumidity;
}

//SEARCH BAR FUNCTION
function search(event) {
    event.preventDefault(); //prevents the page from reloading after you enter a city
    let searchInputElement = document.querySelector("#search-input"); //variable for the prompt return
    let apiKey = `do8ae0f5a33a8b61b41f1t1ed44678b4`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(currentCity);
    axios.get(apiUrl).then(currentTemp); //use axios to access the API and then aplly the function to get the current temperature
    axios.get(apiUrl).then(currentDescription); //use axios to access the API and then aplly the function to get the current weather description
    axios.get(apiUrl).then(currentHumidity); //use axios to access the API and then aplly the function to get the current humidity
    axios.get(apiUrl).then(currentWind); //use axios to access the API and then aplly the function to get the current wind
  }

//FUNCTION DEFINES REAL DATE(DAY) AND TIME  
  function formatDate(date) {
    let minutes = date.getMinutes(); //gets the actual minutes
    let hours = date.getHours(); //gets the actual hours
    let day = date.getDay(); //gets the actual day
  
    if (minutes < 10) {
      minutes = `0${minutes}`; //adds a 0 to the minutes, when it's under 10 min
    }
  
    if (hours < 10) {
      hours = `0${hours}`; //adds a 0 to the hours when it's under 10 h
    }
  
    //ARRAY WITH DAY'S NAMES IN ORDER
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let formattedDay = days[day]; //variable catches one of the days inside the array
    return `${formattedDay} ${hours}:${minutes}`; //returns the sentence with actual day and time
  }
  
  let currentDateELement = document.querySelector("#current-date"); //variable catches the #current-date element
  let currentDate = new Date(); //function keeps the date uptated in real time
  
  currentDateELement.innerHTML = formatDate(currentDate); //everytime the page is refreshed, the time showing on the page will be uptated to the real time


let searchForm = document.querySelector("#search-form"); //variable catches the city inputed on the search bar
 searchForm.addEventListener("submit", search); //when the city is submitted, the funcion search() is activated with the variable inputted
