const response = await fetch('product.json');
//awaits in the background to constantly get data from the json file
const json = await response.json();
// console.log(json.products[0].name)

const productGrid = document.getElementById("product-grid");

const createCard = keyboard => {
    let gridCard = document.createElement("div");
    //div is stored in the create card element
    gridCard.classList.add("product");
    //No matter the class name it will all still be used as the name gridcard
    gridCard.innerHTML=`
                <div class="image"><img src=${keyboard.image} alt=""></div>
                    <p>${keyboard.brand}</p>
                    <h2>${keyboard.name}</h2>
                    <p class="size">${keyboard.size} </p>
                    <h4>$${keyboard.price}</h4>
                    <button>Add to cart</button>
                </div>
    `
     // ${keyboard.}
    return gridCard
}

json.products.forEach((keyboard) => {
    let card = createCard(keyboard);
    productGrid.appendChild(card);
})