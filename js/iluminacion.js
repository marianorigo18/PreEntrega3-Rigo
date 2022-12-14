import {iluminacionT} from '../exports/data.js'
const containerCard = document.querySelector('#container__cards');


let fragment = document.createDocumentFragment();

iluminacionT.forEach( elemet => {
    const contenedorCard = document.createElement('div');
    contenedorCard.className = 'col-6 col-sm-6 col-md-4 col-lg-3';  

    const card = document.createElement('div');
    card.classList.add('card__product');

    const cardLink = document.createElement('a');
    cardLink.href = elemet.link

    const imgCard = document.createElement('img');
    imgCard.classList.add('card-img-top');
    imgCard.src = elemet.img;
    imgCard.alt = elemet.title


    const cardBody = document.createElement('div');
    card.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title text-center mt-3 text-black-50 text-uppercase fs-6 fw-normal py-3';
    cardTitle.textContent = elemet.title

    cardLink.appendChild(card)
    card.appendChild(imgCard);
    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);
    contenedorCard.appendChild(cardLink);

    fragment.appendChild(contenedorCard);
})

containerCard.appendChild(fragment)
