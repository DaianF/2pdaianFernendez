// Trae los resultados de las funciones data1 y data. Para que se disparen con el boton.

async function traaerApi() {
  const rickAndMortyContainer = document.getElementById("rickAndMorty"); // 1
  const buttonContainer = document.getElementById("buttonContainer"); // 2
  const randomUser = await ranUser();
  const randomCharacter = await rickAndMorty();
  buttonContainer.innerHTML = "";
  traerData1(randomCharacter);
  traerData(randomUser);
  // toLowerCase Sirve para poner todo en minuscula.
  if (randomUser.results[0].gender === randomCharacter.gender.toLowerCase()) {
    buttonContainer.innerHTML += `
    <div class="Coi">Coincide</div> `;
  } else {
    buttonContainer.innerHTML += `
    <div class="noC">No Coincide</div> `;
  }
}

//API y Fetch
async function ranUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data;
}

async function rickAndMorty() {
  let num = Math.floor(Math.random() * 826) + 1;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${num}`
  );
  const data1 = await response.json();
  return data1;
}
//-------------------------------------- funciones para traer la api al HTML

function traerData1(data1) {
  const rickAndMortyContainer = document.getElementById("rickAndMorty");
  rickAndMortyContainer.innerHTML = `
    <div class="${data1.gender.toLowerCase()}">
    <h4> Name : ${data1.name}</h4>
    <h4> Gender: ${data1.gender}</h4>
    <h4> Status: ${data1.status}</h4>
    <h4> Species: ${data1.species}</h4>
    <h4> Episode: ${data1.episode.length}</h4>  
    <img src=${data1.image}  alt="150px" width="150px" height="150px"  ></img>
    </div>
    `;
}

function traerData(data) {
  const ranUserContainer = document.getElementById("randoUser");
  ranUserContainer.innerHTML = `
      <div style="border-radius= 10px" class="${data.results[0].gender}">
      <h4>First Name: ${data.results[0].name.first}</h4>
      <h4>Last Name: ${data.results[0].name.last}</h4>
      <h4>Gender: ${data.results[0].gender}</h4>
      <h4>Latitude: ${data.results[0].location.coordinates.latitude}</h4>
      <h4>Longitude: ${data.results[0].location.coordinates.longitude}</h4>
      <img src="${data.results[0].picture.large}" alt="150px" width="150px" height="150px" />
      </div>
    `;
  //let cor1 = data.results[0].location.coordinates.latitude;
  //let cor2 = data.results[0].location.coordinates.longitude;
  //mapa(cor1, cor2);
}

/*
function mapa(cor1, cor2) {
  let DEFAULT_COORDS = [cor1, cor2];
  var map = L.map("map", {
    center: DEFAULT_COORDS,
    zoom: 5,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 10,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}
*/
