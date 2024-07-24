const currTemp = document.querySelector('#current-temp');
const weaherIcon = document.querySelector('#weather-icon');
const forecast = document.querySelector('#forecast');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.67&lon=139.65&appid=fb25959beae3be21dedd7322db452586&units=imperial';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.67&lon=139.65&appid=fb25959beae3be21dedd7322db452586&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        const forecastres = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
            
        } else {
            throw Error(await response.text());
        }
        if(forecastres.ok) {
            const data = await forecastres.json();
            //console.log(data.list);
            displayForecast(data.list);
            
        } else {
            throw Error(await forecastres.text()); 
        }
    }
    catch(error) {
        console.log(error);
    }
}

function displayResults(data) {
    currTemp.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weaherIcon.setAttribute('src', iconsrc);
    weaherIcon.setAttribute('alt', desc);
}

function displayForecast(data){
    for (i = 8; i < 25; i += 8) {
        let flame = document.createElement('div');
        let fdate = (currentdate.getDate() + i/8);
        let date = document.createElement('p');
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let span = document.createElement('span');
        date.textContent = `${fdate} th`;
        span.innerHTML = `${data[i].main.temp}&deg;F - ${data[i].weather[0].description}`;
        img.src = `https://openweathermap.org/img/w/${data[i].weather[0].icon}.png`;
        img.alt = data[i].weather[0].description;

        figure.appendChild(img);
        flame.appendChild(date);
        flame.appendChild(figure);
        flame.appendChild(span);
        forecast.appendChild(flame);
    }
}

apiFetch();