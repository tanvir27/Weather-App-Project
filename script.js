let button = document.getElementById('button');
let inputValue = document.getElementById('inputValue');
let cityName = document.getElementById('cityName');
let temparature = document.getElementById('temp');
let description = document.getElementById('desc');
let newImage = document.getElementById('image');

button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5ce92a0475ee3fe1416783adf522e9be')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        // get the api data from weatherapimain website
        let updateName = data['name'];
        let updateTemp = data['main'] ['temp'];
        let updateDesc = data['weather'] [0] ['description'];
        // let updateImage = data ['image'];

        // updating new weather data
        // newImage.innerText = updateImage;
        cityName.innerText = updateName; 
        temparature.innerText = updateTemp;
        description.innerText = updateDesc;
    })
    // if wrong input then it work
    .catch(error => alert("Wrong City Name!"))
})