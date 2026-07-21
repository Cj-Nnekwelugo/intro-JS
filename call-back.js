function getDiscountPrice(price, discount) {
    return price - (price * discount)
}

function handleOrder(cb, price, discountRate, itemName) {
    const totalAmount = cb(price, discountRate)
}
console.log()




// flexibility
// They can be usd to handle asychronus waiting
// they play a key role in event handling 