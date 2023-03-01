import {conductoresT} from '../exports/data.js'
const containerCard = document.querySelector('#container__cards');

conductoresT.forEach( elemet => {
    const contenedorCard = document.createElement('div');
    contenedorCard.className = 'col-6 col-sm-6 col-md-4 col-lg-3'; 

    contenedorCard.innerHTML = `
    <div class="card__product card-body">
        <img class="card-img-top" src="${elemet.img}" alt="${elemet.title}">
        <div>
            <h5 class="card-title text-center mt-3 text-black-50 text-uppercase fs-6 fw-normal py-3">${elemet.title}</h5>
        </div>
    </div>
    `
    containerCard.appendChild(contenedorCard)
})
