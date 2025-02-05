//challenge 2 - get the API key and save in a variable called apiKey
let apiKey = `do8ae0f5a33a8b61b41f1t1ed44678b4`;

//challenge 3 - get the API response for Sydney with metrics unit
let city = `Sydney`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
console.log(apiUrl);


//challenge 4 - log the current temperature in Sydney

function displayCurrentTemperature(info) {
    console.log(info);
    console.log(info.data);
    console.log(info.data.temperature);
    console.log(info.data.temperature.current);
    console.log(info.data.temperature.humidity);
    console.log(info.data.condition.description);
    console.log(info.data.wind.speed);
    console.log(info.data.condition.icon);
    let currentTemperature = info.data.temperature.current;
}

axios.get(apiUrl).then(displayCurrentTemperature);


// replace the h1 with the weather in Sydney

function changeH1(info) {
    let currentTemperature = info.data.temperature.current;
    currentTemperature = Math.round(currentTemperature);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `It is ${currentTemperature}ºC in ${city}`
}

axios.get(apiUrl).then(changeH1);