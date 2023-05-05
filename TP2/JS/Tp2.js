const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", (e) => {
    e.preventDefault();
    traerRickandMorty(input.value);
})

function traerRickandMorty(RickandMorty) {
    fetch(`https://rickandmortyapi.com/api/character/${RickandMorty}/`)
    .then(res => res.json())
    .then((data) => {
        traerData(data)
    });
}

function traerData (RickandMorty) {
    const RickandMoryContainer = document.getElementById('rickAndMorty');

    console.log(RickandMorty.episode.length)
    let episodios = RickandMorty.episode 
    episodios = (episodios.map((episodio) => episodio.slice(-1)));  

    RickandMoryContainer.innerHTML=`
        <img class="rounded-circle" "border border-primary" src=${RickandMorty.image}></img>
        <h3> Name : ${RickandMorty.name}</h3>
        <h3> Status: ${RickandMorty.status}</h3>
        <h3> Species: ${RickandMorty.species}</h3>
        <h3> Episode: ${RickandMorty.episode.length}</h3>
    `;
} 

traerRickandMorty();


    // console.log(RickandMorty.image)
    //let img = document.createElement("img")
    //img.scr = `${RickandMorty.image}` 

    //const h3  = document.createElement("h3");
    //h3.textContent = RickandMorty.name

    // const div = document.createElement("div");
    // div.appendChild(img); 
    // div.appendChild(h3);