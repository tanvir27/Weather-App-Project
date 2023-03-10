const api_key = `5ce92a0475ee3fe1416783adf522e9be`;

// fetch API
const loadTemperatures = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayTemperature(data))
}

// display temperature and weather in city
const displayTemperature = data => {
    // console.log(data);
   setInnerTextById('temp', data.main.temp);
   setInnerTextById('desc', data.weather[0].main);
}

// set inner Text

const setInnerTextById = (id, set_text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = set_text;
}

// search button handler click
document.getElementById('src_btn').addEventListener('click',function(){
    const searchField = document.getElementById('search_field');
    const cityName = searchField.value;
    searchField.value = '';
    document.getElementById('city_name').innerText = cityName;
    loadTemperatures(cityName)
})

//enter hit 
document.getElementById('search_field').addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("src_btn").click();
      }
})

loadTemperatures('dhaka');