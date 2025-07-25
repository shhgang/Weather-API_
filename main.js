const apikey="3699851753b7c75d9c566319d117dbd3";
const apiurl='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const search=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button')
const icon=document.querySelector('.weather-icon')

 async function checkweather(city)
{
    const response=await fetch(apiurl + city + `&appid=${apikey}`)  
    var data= await response.json();
   if (response.status == 404) {
     document.querySelector('.error').style.display='block';
     document.querySelector('.weather').style.display="none";
    }
    else
    {
document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+'°C';
    document.querySelector('.humidity').innerHTML=data.main.humidity+' %';
    document.querySelector('.wind').innerHTML=data.wind.speed+" km/h";
    if (data.weather[0].main == 'Clouds') 
     {
      icon.src='./images/clouds.png';
    }
    else if (data.weather[0].main == 'Rain') 
     {
      icon.src='./images/rain.png';
    }
    else if (data.weather[0].main == 'Drizzle') 
     {
      icon.src='./images/drizzle.png';
    }
    else if (data.weather[0].main == 'Clear') 
     {
      icon.src='./images/clear.png';
    }
    else if (data.weather[0].main == 'Mist') 
     {
      icon.src='./images/mist.png';
    }
    document.querySelector('.weather').style.display="block";
    document.querySelector('.error').style.display='none';
    }
    
}
searchbtn.addEventListener('click',()=>{
     checkweather(search.value.toLowerCase());
})
searchbtn.addEventListener('',()=>{
     checkweather(search.value.toLowerCase());
})

search.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".search button").click();
  }
});