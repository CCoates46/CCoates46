// Exporting module

console.log('Exporting module')

// Blocking code example

// console.log('Start fetching users')
// await fetch('https://jsonplaceholder.typicode.com/users')
// console.log('Finish fetching users')

const shippingCost = 10
export const cart = []

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity})
    console.log(`${quantity} ${product} have been added to the cart`)
}

const totalQuantity = 23
const totalPrice = 237

export { totalPrice, totalQuantity as tq }

export default function (product, quantity) {
   cart.push({ product, quantity})
   console.log(`${quantity} ${product} have been added to the cart`)
 }