


//URL: https://api.cryptonator.com/api/ticker/btc-usd
//URL: https://icanhazdadjoke.com

let jokePlaceHolder = document.querySelector(".jokePlaceholder");
let jokeButton = document.querySelector("button");

const fetchDadJoke = async () => {
        try{
            const config = {headers: {Accept: 'application/json'}}
            
            const response = await axios.get("https://icanhazdadjoke.com", config);
            
            jokePlaceHolder.innerHTML = response.data.joke;
            
        }catch(Error){
            
            console.log("Error, Something Wrong Happened!!!!. \n\nError: " + Error);
            jokePlaceHolder.innerHTML = "Error, Something Wrong Happened!!!!. \n\nError: " + Error;
            
        }
}
const fetchBTC = async () => {
    try{
        
        const response = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd") 
        console.log(`Price of ${response.data.ticker.base}: ${response.data.ticker.price}`);
        
    }catch(Error){
        
        console.log("Error, Something Wrong Happened!!!!. \n\nError: " + Error);
        
    }
}

    


jokeButton.addEventListener("click",() => {
    fetchDadJoke();   
});
