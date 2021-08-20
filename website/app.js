//set global variable
const baseURL="https://api.openweathermap.org/data/2.5/weather?q="
const apiKey="9c606971d1bdf33fab80334cc3f2c71c&units=metric";
const city=document.getElementById('city').value
const URL=`${baseURL}${city}&appid=${apiKey}`

document.getElementById('generate').addEventListener("click", async function(){
  const city=document.getElementById('city').value
  const URL=`${baseURL}${city}&appid=${apiKey}`
let weatherData= await getWeather(URL)


})


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

//post data to server
async function postData(url, data){
  try{
    let res=await fetch(url,{
      method:'Post',
      credentials:'same-origin',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let data=await res.json();
    console.log(data)
    return data
  }catch(error){
    console.log(error)
  }
}