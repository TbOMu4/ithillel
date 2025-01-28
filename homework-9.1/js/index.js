"use strict"

let company = {
    sales: [{name: "John", salary: 1000}, {name: "Alice", salary: 600}],
    development: {
        sites: [{name: "Peter", salary: 2000}, {name: "Alex", salary: 1800}],
        internals: [{name: "Jack", salary: 1300}]
    }
}

function getTotalSalary(obj) {
    let totalSum = 0
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            totalSum += obj[key]
        } else if (typeof obj[key] === 'object') {
            totalSum += getTotalSalary(obj[key])
        }
    }
    return totalSum
}

console.log(getTotalSalary(company))