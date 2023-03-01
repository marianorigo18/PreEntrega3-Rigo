import {bubble} from '../exports/data.js';
const containerBubble = document.querySelector('#container__bubble');

bubble.forEach( element => {
    
    const bubbleLink = document.createElement('a');
    bubbleLink.href = element.link;
    bubbleLink.classList.add('bubble__link');

    bubbleLink.innerHTML = `
    <a href="${element.link}" class="bubble__link">
        <div class="bubble__img">
            <img src="${element.img}" alt="${element.title}">
        </div>
        <span class="bubble__text">${element.title}</span>
    </a>
    `
    containerBubble.appendChild(bubbleLink)
})

