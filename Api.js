// Fetch API
// using promise
//fetch('https://dummyjson.com/users')
//.then(res => res.json())
//.then(console.log);


// using async and await

async function getAllProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error.mesage)
    }
} 
getAllUsers();