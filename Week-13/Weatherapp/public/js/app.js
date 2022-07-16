var fetchWeather = "/forecast";

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const weatherIcon = document.querySelector('.weather_Icon i');
const temperature = document.querySelector('.temperature span');
const feelsLike = document.querySelector('.feels_like span');
const loc = document.querySelector('.location_Icon i');
const city = document.querySelector('.city span');
const date = document.querySelector('.date span');
const time = document.querySelector('.time span');
const day = document.querySelector('.day span');
const description = document.querySelector('.description');

const time1 = document.querySelector('.time1 span');
const icon1 = document.querySelector('.icon1 i');
const desc1 = document.querySelector('.desc1 span');

const time2 = document.querySelector('.time2 span');
const icon2 = document.querySelector('.icon2 i');
const desc2 = document.querySelector('.desc2 span');

const time3 = document.querySelector('.time3 span');
const icon3 = document.querySelector('.icon3 i');
const desc3 = document.querySelector('.desc3 span');

const time4 = document.querySelector('.time4 span');
const icon4 = document.querySelector('.icon4 i');
const desc4 = document.querySelector('.desc4 span');

const forecast = document.querySelectorAll('.forecast');
//console.log(forecast);

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const weekday = new Array("Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat");

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    city.textContent = "Loading...";
    description.textContent = '';
    temperature.textContent = '';
    date.textContent = '';
    day.textContent = '';
    feelsLike.textContent = '';
    time1.textContent = '';  
    desc1.textContent = '';  
    time2.textContent = '';   
    desc2.textContent = '';  
    time3.textContent = '';   
    desc3.textContent = '';  
    time4.textContent = '';   
    desc4.textContent = '';  
    weatherIcon.className = '';
    loc.className = ''; 
    icon1.className = ''; 
    icon2.className = ''; 
    icon3.className = ''; 
    icon4.className = ''; 
    for (let i = 0; i < forecast.length; i++) {
        forecast[i].classList.remove('block');
    }

    const  locationApi = fetchWeather + "?address=" + search.value;

    fetch(locationApi).then(response => {
        response.json().then(data => {
            if(data.error) {
                city.textContent = data.error;
                description.textContent = '';
                temperature.textContent = '';
            
            } else {
                // for(let i=0; i< data.description.length; i++) {
                //     if(data.description[i] == "light rain") {
                //         weatherIcon.className = "fa-solid fa-cloud-rain"; 
                //         icon1.className = "fa-solid fa-cloud-rain";
                //         icon2.className = "fa-solid fa-cloud-rain";
                //         icon3.className = "fa-solid fa-cloud-rain";
                //         icon4.className = "fa-solid fa-cloud-rain";
                //     } else if( data.description[i] == "moderate rain") {
                //         weatherIcon.className = "fa-solid fa-cloud-moon-rain";
                //         icon1.className = "fa-solid fa-cloud-moon-rain";
                //         icon2.className = "fa-solid fa-cloud-moon-rain";
                //         icon3.className = "fa-solid fa-cloud-moon-rain";
                //         icon4.className = "fa-solid fa-cloud-moon-rain";
                //     } else if(data.description[i] == "clear sky"){
                //         weatherIcon.className = "fa-solid fa-sun"
                //         icon1.className = "fa-solid fa-sun";
                //         icon2.className = "fa-solid fa-sun";
                //         icon3.className = "fa-solid fa-sun";
                //         icon4.className = "fa-solid fa-sun";
                //     } else if( data.description[i] == "scattered clouds" || data.description[i] == "broken clouds") {
                //         weatherIcon.className = "fa-solid fa-smog";
                //         icon1.className = "fa-solid fa-smog";
                //         icon2.className = "fa-solid fa-smog";
                //         icon3.className = "fa-solid fa-smog";
                //         icon4.className = "fa-solid fa-smog";
                //     } else {
                //         weatherIcon.className = "fa-solid fa-cloud";
                //         icon1.className = "fa-solid fa-cloud";
                //         icon2.className = "fa-solid fa-cloud";
                //         icon3.className = "fa-solid fa-cloud";
                //         icon4.className = "fa-solid fa-cloud";
                //     }
                    if(data.description[0] == "light rain") weatherIcon.className = "fa-solid fa-cloud-rain";    
                    else if(data.description[0] == "moderate rain")  weatherIcon.className = "fa-solid fa-cloud-showers-heavy";
                    else if(data.description[0] == "scattered clouds" || data.description[0] == "broken clouds" || data.description[0] == "overcast clouds")  weatherIcon.className = "fa-solid fa-smog";
                    else if(data.description[0] == "clear sky")  weatherIcon.className = "fa-solid fa-sun";
                    else  weatherIcon.className = "fa-solid fa-cloud";
                    
                    if(data.description[1] == "light rain") icon1.className = "fa-solid fa-cloud-rain";    
                    else if(data.description[1] == "moderate rain")  icon1.className = "fa-solid fa-cloud-showers-heavy";
                    else if(data.description[1] == "scattered clouds" || data.description[0] == "broken clouds" || data.description[1] == "overcast clouds")  icon1.className = "fa-solid fa-smog";
                    else if(data.description[1] == "clear sky")  icon1.className = "fa-solid fa-sun";
                    else  icon1.className = "fa-solid fa-cloud";

                    if(data.description[2] == "light rain") icon2.className = "fa-solid fa-cloud-rain";    
                    else if(data.description[2] == "moderate rain")  icon2.className = "fa-solid fa-cloud-showers-heavy";
                    else if(data.description[2] == "scattered clouds" || data.description[0] == "broken clouds" || data.description[2] == "overcast clouds")  icon2.className = "fa-solid fa-smog"; 
                    else if(data.description[2] == "clear sky")  icon2.className = "fa-solid fa-sun";
                    else  icon2.className = "fa-solid fa-cloud";

                    if(data.description[3] == "light rain") icon3.className = "fa-solid fa-cloud-rain";    
                    else if(data.description[3] == "moderate rain")  icon3.className = "fa-solid fa-cloud-showers-heavy";
                    else if(data.description[3] == "scattered clouds" || data.description[0] == "broken clouds" || data.description[3] == "overcast clouds")  icon3.className = "fa-solid fa-smog";
                    else if(data.description[3] == "clear sky")  icon3.className = "fa-solid fa-sun";
                    else  icon3.className = "fa-solid fa-cloud";

                    if(data.description[4] == "light rain") icon4.className = "fa-solid fa-cloud-rain";    
                    else if(data.description[4] == "moderate rain")  icon4.className = "fa-solid fa-cloud-showers-heavy";
                    else if(data.description[4] == "scattered clouds" || data.description[0] == "broken clouds" || data.description[4] == "overcast clouds")  icon4.className = "fa-solid fa-smog";
                    else if(data.description[4] == "clear sky")  icon4.className = "fa-solid fa-sun";
                    else  icon4.className = "fa-solid fa-cloud";
                
                
                loc.className = 'fa-solid fa-location-dot';
                
                day.textContent = addLeadingZeros(new Date().getHours(), 2) + ' : ' + addLeadingZeros(new Date().getMinutes(), 2);
                date.textContent = weekday[new Date().getDay()] +', '+ new Date().getDate() +' '+ months[new Date().getMonth()];
                city.textContent = data.cityName + ', ' + data.country;
                description.textContent = data.description[0].toUpperCase(); 
                temperature.textContent = (data.temperature[0] - 273.5).toFixed(2) + String.fromCharCode(176) + 'C';
                feelsLike.textContent = 'feels like '+ (data.feelsLike[0] - 276.5).toFixed(2) + String.fromCharCode(176) + 'C';
                time1.textContent = data.time[1].split(' ',2)[1];
                desc1.textContent = data.description[1];
                time2.textContent = data.time[2].split(' ',2)[1];
                desc2.textContent = data.description[2];
                time3.textContent = data.time[3].split(' ',2)[1];
                desc3.textContent = data.description[3];
                time4.textContent = data.time[4].split(' ',2)[1];
                desc4.textContent = data.description[4];
                for (let i = 0; i < forecast.length; i++) {
                    forecast[i].classList.add('block');
                }
            }
        })
    });
});