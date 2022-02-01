// Weather API Key
const weatherAPI = 'be1882508ac8e27b792aeaf8a03b4005'


// Function to grab user data
const getAPI = async (city) => {
    let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city }&appid={be1882508ac8e27b792aeaf8a03b4005}`);
    let data = await response.json();
    return await data;
}

const cityList = document.getElementById(`cityList`);
    
cityList.addEventListener('submit' ,null=True,async (e) => {
    e.preventDefault();
    let cities= e.target.city.value.toLowerCase();
    console.log(cities)
    let city = await getAPI(cities)
    addToList(city)
    console.log(city);

})

function addToList(city){
    listUpdate = document.querySelector(`high temp`,'low temp', 'humidity');
    listUpdate.append(max,min,humidiy);
    li.innerText=`Current tempetures are ${max},${min},${humidiy}`
    console.log(city)
}
