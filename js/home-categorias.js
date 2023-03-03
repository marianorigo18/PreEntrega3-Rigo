getData();
async function getData(){
const response = await fetch('https://marianorigo18.github.io/PreEntrega3-Rigo/data/data.json');
const data = await response.json();
showData(data.categorias);
}

const containerCotegorias = document.querySelector('#container__categorias');
function showData(data){
    console.log(data);
    data.forEach(element => {
        const cardCategory = document.createElement('div');
        cardCategory.className = 'col-6 col-sm-6 col-md-4 col-lg-3';
        cardCategory.innerHTML = `
        <div class="card__home">
            <a href="${element.link}">
                <img
                src="${element.img}"
                alt="${element.title}"
                class="card-img-top"
                />
            <h5 class="card__title text-center mt-3">${element.title}</h5>
            </a>
        </div>
        `
        containerCotegorias.appendChild(cardCategory);
    });
}

