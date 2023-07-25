// ARROW FUNCTIONS

const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b ) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        return (`Hello, ${name}`)
    } else
        return ('Hello!')
}

console.log(greeting('Vitor'))
console.log(greeting())

const testeArrow = () => console.log('Testou!')

testeArrow()

// has to assign "this" to a variable so we can refer to the main object
const user = {
    name: 'Vitor',
    sayUserName() {
        var self = this
        setTimeout(function() {
            console.log(self)
            console.log('Username: ' + this.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username:' + this.name)
        }, 700)
    }
}

// sayUserName()
// sayUserNameArrow()

// ARRAY / FILTER METHOD

const arr = [1, 2, 3, 4, 5]

// basically runs a loop applying the if/else statement to every item in the array
const highNumbers = arr.filter((n) => {
    if (n >= 3){
        return n
    }
})

console.log(highNumbers)

const users = [{nome: 'Vitor', available: true}, 
    {nome: 'Vitor', available: true}, 
    {nome: 'Pedro', available: false}, 
    {nome: 'Carlos', available: true},
    {nome: 'Roger', available: false}
]

const availableUsers = users.filter((user) => user.available)
const unavailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(unavailableUsers)

// MAP / add or alter properties of an object

const products = [
    {name: 'Camisa', price: 20.99, category: 'Roupas'},
    {name: 'Forno', price: 199.99, category: 'Eletro'},
    {name: 'Calca', price: 60.99, category: 'Roupas'},
    {name: 'Sabonete', price: 5.99, category: 'Banho'},
]

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)

// DESTRUCTING

const fruits = ['Apple', 'Orange', 'Papaya']

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f3)

const productDetails = {
    name: 'Mouse',
    price: 39.99,
    category: 'Periferico',
    color: 'Grey'
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`The product is ${productName}, it costs R$${price}, it is a ${productCategory} and its color is ${color}`)

// SPREAD OPERATOR

const a1 = [1,  2, 3]
const a2 = [3, 4, 5]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4] 

console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 10000, color: 'white', price: 40000}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car)

// CLASS

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa Gola V', 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(20))
console.log(shirt.productWithDiscount(50))

const tenis = new Product('Tenis Verde', 120)

console.log(tenis.productWithDiscount(20))

// INHERETANCE

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores sao: ')
        this.colors.forEach((color) => {
            console.log(color)
        });
    }
}

const hat = new ProductWithAttributes('Hat', 29.99, ['Black', 'Blue', 'Green'])

console.log(hat.name)
console.log(hat.productWithDiscount(30))
// console.log(hat.colors)
hat.showColors()