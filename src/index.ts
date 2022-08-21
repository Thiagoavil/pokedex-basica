import axios from "axios";

const formulario = document.getElementById("formulario") as HTMLFormElement;
const txtNome = document.getElementById("txtnome") as HTMLInputElement;
const id = document.getElementById("id") as HTMLDivElement;
const Nome = document.getElementById("nome") as HTMLDivElement;
const app = document.getElementById("app") as HTMLImageElement;
let ultimaImagem:HTMLImageElement;

async function obterdadosJson(nome:string){
  try{
    const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`,{responseType:"json"});

    const pokemon =resposta.data;

    id.innerHTML=pokemon.id;
    Nome.innerHTML=pokemon.name;
    
    if(ultimaImagem)
    app.removeChild(ultimaImagem);
    
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    ultimaImagem=img;

    app.appendChild(img);
  }
  catch(error){
    console.log(error);
  }
}


formulario.addEventListener("submit",(evt:SubmitEvent)=>{
  evt.preventDefault();
  obterdadosJson(txtNome.value)
})