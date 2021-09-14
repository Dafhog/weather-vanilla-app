const city = 'Grozny'
const key = 'f07767fcb9e92f5fb048266a4b745735'
const link = 'http://api.weatherstack.com/current?access_key='



async function weatherInfo(city) {
    return await fetch(link + key + '&query=' + city)
        .then(function (response) {
                return response.json()
            }
        )
        .catch(function (e) {
            console.log('Error: ' + e.message);
            return undefined
        })
}

function createCard(kek) {
    if (kek === undefined) {
        return
    }
    // const {country} = kek.location;
    const { name, country, localtime } = kek.location;
    const { temperature, weather_descriptions, wind_speed } = kek.current;
    console.log("kek: ", kek);
    console.log("country: ", country, name, localtime );
    document.getElementById('name').innerHTML = name;
    document.getElementById('country').innerHTML = country;
    document.getElementById('localtime').innerHTML = localtime;
    document.getElementById('temperature').innerHTML = temperature;
    document.getElementById('weather_descriptions').innerHTML = weather_descriptions;
    document.getElementById('wind_speed').innerHTML = wind_speed;
}


async function searchCity() {
    document.getElementById('card').style.display = 'block';

    let cityName = document.getElementById('searchInp').value;
    console.log(cityName);
    // let kek = await weatherInfo()
    let kek = await weatherInfo(cityName);
    createCard(kek)

}




// (async () => {
//     let kek = await weatherInfo(cityName);
//     createCard(kek)
// })()














// function createCard(data) {
//     const { name, country, localtime } = data.location;
//     const { temperature, weather_icons, weather_descriptions, wind_speed } = data.current;
//     console.log(name, country, localtime, temperature, weather_icons, weather_descriptions, wind_speed);
//     return {name, country, localtime, temperature, weather_icons, weather_descriptions, wind_speed};
// }





