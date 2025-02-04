"use strict"

let user = {
    name: "Artem",
    age: 33,
    city: "Kyiv",
    country: "Ukraine"
}

const {name, age, city, country} = user

document.write(`Моє ім'я ${name}, мені ${age} років, я живу в місті ${city}, яке є столицею ${country}.`)

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})