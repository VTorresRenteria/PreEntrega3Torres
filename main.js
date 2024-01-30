const skins = [
    { id: 1, nombre: "Vandal Prime", rareza: "Prémium", img: "img/vandal_prime.png" },
    { id: 2, nombre: "Vandal Llama Antigua", rareza: "Ultra", img: "img/vandal_llama_antigua.png" },
    { id: 3, nombre: "Vandal Ion", rareza: "Prémium", img: "img/vandal_ion.png" },
    { id: 4, nombre: "Vandal Sakura", rareza: "Deluxe", img: "img/vandal_sakura.png" },
    { id: 5, nombre: "Vandal RGX 11z Pro", rareza: "Exclusivo", img: "img/vandal_rgx.png" },
];

let skinsFav = JSON.parse(localStorage.getItem('skinsFav')) || [];
const mostrador = document.getElementById('mostrador-skins');
const mostradorFav = document.getElementById('mostrador-fav');

skins.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>${item.nombre}</h2>
        <img src="${item.img}">
        <p>${item.rareza}</p>
        <button id="botonAgregar${item.id}">Agregar a favoritos</button>
    `;

    mostrador.appendChild(div);

    let botonAgregar = document.getElementById(`botonAgregar${item.id}`);
    botonAgregar.addEventListener("click", () => agregarFavorito(item));
});

function agregarFavorito(item) {
    if (!skinsFav.some((favItem) => favItem.id === item.id)) {
        skinsFav.push(item);
        localStorage.setItem('skinsFav', JSON.stringify(skinsFav));
        mostrarSkinsFavoritas();
    }
}

function quitarFavorito(id) {
    skinsFav = skinsFav.filter((favItem) => favItem.id !== id);
    localStorage.setItem('skinsFav', JSON.stringify(skinsFav));
    mostrarSkinsFavoritas();
}

function mostrarSkinsFavoritas() {
    mostradorFav.innerHTML = '';

    if (skinsFav.length > 0) {
        mostradorFav.innerHTML += '<h2>Favoritos</h2>';
    }

    skinsFav.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${item.nombre}</h2>
            <p>${item.rareza}</p>
            <button id="botonQuitar${item.id}">Quitar de favoritos</button>
        `;
        mostradorFav.appendChild(div);

        let botonQuitar = document.getElementById(`botonQuitar${item.id}`);
        botonQuitar.addEventListener("click", () => quitarFavorito(item.id));
    });
}

mostrarSkinsFavoritas();

