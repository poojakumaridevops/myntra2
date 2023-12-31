

let x = document.getElementById('out');
let y = document.getElementById('weather');

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    x.innerText = `Latitude is ${lat} and longitude is ${lon}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method:'GET'})
    //return promise
    .then((res) =>  res.json())
    //resolve the promise
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day+" °C"
        y.innerText=`Weather of ${cityName} is ${temp}`
    })
}




 input = [
{'id':1, 'keys':'abc,def,xyz'},
{'id':2, 'keys':'abc,def'},
{'id':3, 'keys':'abc'},
{'id':4, 'keys':'abc,xyz'},
{'id':5, 'keys':'def,xyz'},
{'id':6, 'keys':'xyz'},
{'id':7, 'keys':'xyz'}
]

output = [
{'keys':'abc','ids':[1,2,3,4]},
{'keys':'def','ids':[1,2,5]},
{'keys':'xyz','ids':[1,4,5,6,7]},

] 