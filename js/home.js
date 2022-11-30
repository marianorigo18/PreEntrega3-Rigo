import {bubble} from '../exports/data.js';
const containerBubble = document.querySelector('#container__bubble');

let fragment = document.createDocumentFragment();

bubble.forEach( element => {
    
    const bubbleLink = document.createElement('a');
    bubbleLink.href = element.link;
    bubbleLink.classList.add('bubble__link');
    
    const bubbleImg = document.createElement('div');
    bubbleImg.classList.add('bubble__img');

    const imgBubble = document.createElement('img');
    imgBubble.src = element.img;
    imgBubble.alt = element.title

    const bubbleText = document.createElement('span');
    bubbleText.classList.add('bubble__text')
    bubbleText.textContent = element.title;

    bubbleImg.appendChild(imgBubble);
    bubbleLink.appendChild(bubbleImg)
    bubbleLink.appendChild(bubbleText)

    fragment.appendChild(bubbleLink)
})

containerBubble.appendChild(fragment)
