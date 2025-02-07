"use strict"

let user = {
    name: "Artem",
    age: 33,
    city: "Kyiv",
    country: "Ukraine",

    getUserInfoFirst: function () {
        const {name, age, city, country} = user
        document.write(`Моє ім'я ${name}, мені ${age} років, я живу в місті ${city}, яке є столицею ${country}. <br>`)
    },

    getUserInfoSecond: function () {
        document.write(`Моє ім'я ${this.name}, мені ${this.age} років, я живу в місті ${this.city}, яке є столицею ${this.country}. <br>`)
    },

    getUserInfoThird: function (...info) {
        let userInfo = ``
        if (info.includes('name')) userInfo += `Моє ім'я ${this.name},`
        if (info.includes('age')) userInfo += ` мені ${this.age} років,`
        if (info.includes("city")) userInfo += ` я живу в місті ${this.city},`
        if (info.includes("country")) userInfo += ` яке є столицею ${this.country},`
        userInfo = userInfo.trim().replace(/,$/, '.')
        document.write(userInfo)
    }
}

user.getUserInfoFirst()
user.getUserInfoSecond()
user.getUserInfoThird('name', 'age')

