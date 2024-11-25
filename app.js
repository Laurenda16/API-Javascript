let button =document.getElementById("button");
const changePokemon =()=>
{
    let randomNumber = Math.ceil(Math.random()*151) +1;
}
button.addEventListener("click", changePokemon);