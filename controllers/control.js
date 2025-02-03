

const fetch = require('node-fetch'); // Pastikan Anda telah menginstal node-fetch

const weatherRender = async (city) => {
  const apiKey = '3ab24fab8296e2138023e1d40428631a';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return data cuaca
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
 
const tes = (city) => {

  const render = async () => {
    const apiKey = '3ab24fab8296e2138023e1d40428631a';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try{
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch(error) {
    console.error;
    throw error
  }
  }
  
  // if(city !== undefined) {
  //   const element = document.querySelector('.suhu');
  //   element.innerHTML = data.main
  // }

}



module.exports = { weatherRender, tes };
