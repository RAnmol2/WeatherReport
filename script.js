const key="979cc697a09ac547fa9d2b0f6f8c8286";
const input = document.querySelector("input");
const btn= document.getElementById("btn");
const icon=document.querySelector(".logo");
const country=document.querySelector(".city");
const temp=document.querySelector(".temp");
const description=document.querySelector(".description");


btn.addEventListener("click",()=>{
   let city =input.value; 
   getWeather(city);

});

function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(response => response.json()).then(data => {console.log(data);
   
    const iconCode=data.weather[0].icon;
    icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon" />`;
    
    const weatherCity = data.name;
    const weatherCountry = data.sys.country;
    country.innerHTML=`${weatherCity}, ${weatherCountry}`;

    let weatherTemp = data.main.temp;
    weatherTemp = weatherTemp-273;
    temp.innerHTML = `${weatherTemp.toFixed(2)} °C`;

    const weatherDesc=data.weather[0].description;
    description.innerHTML=`${weatherDesc}`;



});

   
}


