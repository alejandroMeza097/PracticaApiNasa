

//DECLARACION DE VARIABLES Y CONSTANTES...
const URLAPI = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=zdVjbAYQnHC6oQ3fwwX1EeDpknDXm3Z7v98DD0MF';
const cardContainer = document.getElementById("card-container");



//FUNCION PARA OBTENER DATOS...
function getData(){
    fetch(URLAPI)
    .then(res => res.json())
    .then(datos => {
        createCard(datos.photos);
    })
    .catch(err => {
        console.log(err);
        
    });
}



//FUNCION PARA CREAR CARDS...


function createCard(data){
    data.forEach(element => {
        cardContainer.insertAdjacentHTML("beforeend",`
            <div class="card m-2" style="width: 18rem;">
                <img src="${element.img_src}" class="card-img-top" alt="image from nasa">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        `);
    });
}


getData();