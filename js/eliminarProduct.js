const table = document.querySelector('.table__cart');


table.addEventListener('click', eliminarProd);

function eliminarProd(e){
    if(e.target.classList.contains('icon-trash')){
        const productId = e.target.getAttribute('data-id');
        console.log(productId);

    }else{
        console.log('im dont trans');
    }
}

