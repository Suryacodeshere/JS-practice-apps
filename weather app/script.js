const apiKey = "2f93311ea0abfa5a779c392a6d89b4d2";

const searchBox =document.querySelector("input");
const searchButton=document.querySelector("button");

const weatherIcon=document.querySelector(".weather-icon")

searchButton.addEventListener("click",checkWeather);

async function checkWeather(){

    const city=searchBox.value;

    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    const geoResponse=await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if(geoData.length === 0){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        return;
    }
    document.querySelector(".error").style.display = "none";

    const lat=geoData[0].lat;
    const lon=geoData[0].lon;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response =await fetch(apiUrl);
    const data=await response.json();


    document.querySelector(".city").innerHTML=city;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="assets/drizzle.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="assets/search.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="assets/humidity.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="assets/rain.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="assets/clouds.png";
    }
    document.querySelector(".weather").style.display="block";

    }


    


