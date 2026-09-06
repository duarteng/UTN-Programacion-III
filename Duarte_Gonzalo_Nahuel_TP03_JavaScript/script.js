const URL_API = "https://thesimpsonsapi.com/api/characters";
const URL_IMAGENES = "https://cdn.thesimpsonsapi.com/500";
const contenedor = document.getElementById("personajes");

// Actividad 1: TODO - función async que haga fetch a URL_API, convierta a JSON
// y muestre datos.results por consola
const obtenerPersonajes = async () => {

    // Bloque try/catch para asegurar la llamada a la API
    try {
        const res = await fetch(URL_API);
        const data = await res.json();

        console.log(data.results); // Extraemos solamente la propiedad 'results'
        
        mostrarPersonajes(data.results);
    } catch (error) {
        console.log("Hubo un error al cargar los personajes.", error);
    }

};

// Actividad 2: TODO - por cada personaje, crear un div.personaje-card con
// imagen (URL_IMAGENES + portrait_path), nombre, ocupación, status y edad,
// y agregarlo a contenedor
const mostrarPersonajes = (personajes) => {
    personajes.forEach( personaje => {
        // Creando div.personaje-card
        const personajeCard = document.createElement("div");
        personajeCard.classList.add("personaje-card");

        const urlImagen = `${URL_IMAGENES}${personaje.portrait_path}`;

        personajeCard.innerHTML = `
            <img src="${urlImagen}" alt="${personaje.name}" style="max-width: 100%; height: auto;">
            <h2>${personaje.name}</h2>
            <p><strong>Ocupacion:</strong> ${personaje.occupation}</p>
            <p><strong>Estado:</strong> ${personaje.status}</p>
            <p><strong>Edad:</strong> ${personaje.age}</p>
        `
        contenedor.appendChild(personajeCard);
    });
};


obtenerPersonajes();