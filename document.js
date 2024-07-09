//Task 1
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

//Task 2
function displayProducts(products) {
    const newProduct = document.createElement("p");
    newProduct.innerHTML = products.name + "<br>" + "$" + products.price + "<br>" + products.description;
    document.getElementById("container").appendChild(newProduct);
}

//Task 3
document.addEventListener("load", products.forEach(displayProducts));

