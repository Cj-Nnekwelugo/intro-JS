// ================= Class Activity ==================

const products = ["laptop - 500", "bag - 100", "phoneStand - 50"];
              

/* 
Using the map method return a new array with the structure 
{
    productName: laptop,
    price: 500
}
*/

const sales = [
 { product: "Laptop", quantity: 3, price: 250000 },
 { product: "Mouse", quantity: 10, price: 5000 },
 { product: "Keyboard", quantity: 5, price: 15000 }
];

// Using the reduce method, get the total sales amount.


{
    const products = ["laptop - 500", "bag - 100", "phoneStand - 50"];
    const productObjects = products.map(product => {
        const [productName, price] = product.split(" - ");
        return {
            productName: productName,
            price: parseInt(price)
        };
    });
    console.log(productObjects);
}


