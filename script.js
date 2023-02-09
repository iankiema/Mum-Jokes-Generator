const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");
const imgEl = document.getElementById("logo");
const apiKey = "IWrsocgunOOPSPX1lY4wpg==tgIScuaOsYNEJMj8";
const options = {
  method:"GET",
  headers:{
      "X-Api-Key":apiKey,
  },
};


const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke(){

  /*-------Fetch jokes via API------*/
  try {
    jokeE1.innerText = "Updating...";
    btnE1.disabled = true;
    btnE1.innerText = "Loading..."
    const response = await fetch(apiURL,options)
    const data = await response.json();

    btnE1.disabled = false;
    btnE1.innerText = "Tell me a joke!"
    
    jokeE1.innerText = data[0].joke;
  } catch (error) {
    jokeE1.innerText = "An error happened ,try again later"
    btnE1.disabled = false;
    btnE1.innerText = "Tell me a joke!"
    
  }

  
  
}

function flipLogo(){
  
}
btnE1.addEventListener("click",getJoke,flipLogo)

