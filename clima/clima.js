const axios = require('axios');


const getClima = async(lat, lng) => {

    const latlng = `lat=${ lat }&lon=${ lng }`

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=f369635965b00ad16ced5da4da4b9f3b&units=metric`);

    if (resp.status === '400') {
        throw new Error('Coordenadas incorrectas');
    }

    return resp.data.main.temp;

}


module.exports = {
    getClima,
}