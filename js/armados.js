getData();
async function getData(){
const response = await fetch('https://marianorigo18.github.io/PreEntrega3-Rigo/data/data.json');
const data = await response.json();
showData(data.categorias[3].categorias);
}
const containerCard = document.querySelector('#container__cards');

function showData(data){
    data.forEach( elemet => {
        elemet.categorias.forEach(el=>{
            const contenedorCard = document.createElement('div');
            contenedorCard.className = 'col-6 col-sm-6 col-md-4 col-lg-3'; 
        
            contenedorCard.innerHTML = `
            <div class="card__product card-body">
            <a href="${el.link}">
                <img class="card-img-top" src="${el.img}" alt="${el.title}">
                <div>
                    <h5 class="card-title text-center mt-3 text-black-50 text-uppercase fs-6 fw-normal py-3">${el.title}</h5>
                </div>
            </a>
            </div>
            `
            containerCard.appendChild(contenedorCard)
        })
    })
}


