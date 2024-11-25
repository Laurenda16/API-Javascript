let button =document.getElementById("button");
const changePokemon = async()=>
{
    let randomNumber = Math.ceil(Math.random()*151) +1;
    let requestString =`https://pokeapi.co/api/v2/{randomNumber}`;
    let data = await fetch(requestString);
    console.log(data);
    
};
button.addEventListener("click", changePokemon);