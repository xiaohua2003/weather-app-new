//set global variable
const baseURL="api.openweathermap.org/data/2.5/weather?q="
const apiKey="9c606971d1bdf33fab80334cc3f2c71c";
const city=document.getElementById('city')
const URL=`${baseURL}${city}&appid=${apiKey}`



//get weather data
async function getWeather (url) {
  try{
      let res=await fetch(url);
      let data=await res.json();
      console.log(data)
      return data
  } catch (error){
console.log(error);
  }
}

getWeather(URL)