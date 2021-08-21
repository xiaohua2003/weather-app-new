//set global variable
const baseURL="https://api.openweathermap.org/data/2.5/weather?q="
const apiKey="9c606971d1bdf33fab80334cc3f2c71c&units=metric";


document.getElementById('generate').addEventListener("click", getResult)

async function getResult(){
const city=document.getElementById('city').value
const URL=`${baseURL}${city}&appid=${apiKey}`
const feeling=document.getElementById("feeling").value
const d = new Date();
let newDate=(d.getMonth()+1)+'-'+d.getDate()+'-'+d.getFullYear()
  getWeather(URL).then(function(weatherData){
    postData('/postData', {date:newDate, temp:weatherData.main.temp, feeling:feeling})
  }).then(function(data){
    updateUI(data)
  })
}


//get weather data
async function getWeather (url) {
  try{
      let res=await fetch(url);
      let projectData=await res.json();
      console.log(projectData)
      return projectData
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
    let weatherData=await res.json();
    console.log(weatherData)
    return weatherData
  }catch(error){
    console.log(error)
  }
}

async function updateUI() {
  try{
    let res=await fetch('/all');
    let projectData=await res.json()
    console.log(projectData)
    document.getElementById('date').innerHTML=projectData.date;
    document.getElementById('temp').innerHTML=projectData.temp;
    document.getElementById('comment').innerHTML=projectData.feeling;
  }catch(error){
    console.log(error)
  }
}