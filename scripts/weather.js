const currTemp = document.querySelector('#current-temp');
const weaherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=fb25959beae3be21dedd7322db452586&units-imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
            
        } else {
            throw Error(await response.text());
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

apiFetch();