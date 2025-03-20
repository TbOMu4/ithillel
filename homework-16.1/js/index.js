"use strict"

class Student {
    #yearBirth
    #arrayScores
    #arrayAttendance

    constructor(firstName, lastName, yearBirth, arrayScores, arrayAttendance) {
        this.firstName = firstName
        this.lastName = lastName
        this.YearBirth = yearBirth
        this.ArrayScore = arrayScores
        this.ArrayAttendance = arrayAttendance || new Array(25).fill("")
    }

    get YearBirth() {
        return new Date().getFullYear() - this.#yearBirth
    }

    set YearBirth(value) {
        const currentYear = new Date().getFullYear()
        if (value < currentYear - 30 || value > currentYear - 17) {
            throw new Error('Ваш вік нам не підходить')
        }
        this.#yearBirth = value
    }

    get ArrayScore() {
        const sum = this.#arrayScores.reduce((acc, score) => acc + score, 0)
        return Math.ceil(sum / this.#arrayScores.length)
    }

    set ArrayScore(value) {
        if (!Array.isArray(value)) {
            throw new Error('Має бути масив оцінок')
        }
        if (value.some(score => score < 50 || score > 100)) {
            throw new Error('Всі оцінки повинні бути в діапазоні від 50 до 100')
        }
        this.#arrayScores = value
    }

    get ArrayAttendance() {
        return this.#arrayAttendance.join(' ').trim()
    }

    set ArrayAttendance(value) {
        if (Array.isArray(value)) {
            if (value.length > 25) {
                throw new Error("Не можна додати більше 25 записів про відвідуваність")
            }
            this.#arrayAttendance = value
        } else if (this.#arrayAttendance.filter(a => a !== "").length < 25) {
            this.#arrayAttendance[this.#arrayAttendance.filter(a => a !== "").length] = value
        } else {
            throw new Error("Не можна додати більше 25 записів про відвідуваність")
        }
    }

    getAverageAttendance() {
        const presentCount = this.#arrayAttendance.filter(a => a === true).length;
        const totalRecords = this.#arrayAttendance.filter(a => a !== "").length;
        const averageAttendance = totalRecords ? presentCount / totalRecords : 0
        return averageAttendance.toFixed(2)
    }

    present() {
        this.ArrayAttendance = true
    }

    absent() {
        this.ArrayAttendance = false
    }

    summary() {
        let message = ""
        if (this.getAverageAttendance() >= 0.9 && this.ArrayScore >= 90) message = 'Молодець!'
        else if (this.getAverageAttendance() >= 0.9 || this.ArrayScore >= 90) message = 'Добре, але можна краще'
        else message = 'Редиска!'
        return message
    }

    toString() {
        console.log(`firstName: ${this.firstName}, lastName: ${this.lastName}, yearBirth: ${this.YearBirth}, arrayScore: ${this.ArrayScore}, arrayAttendance: ${this.ArrayAttendance}`)
    }

}

const studentArtem = new Student("Artem", "Smith", 2005, [90, 90, 99])
const studentAndrew = new Student("Andrew", "Johnson", 1999, [90, 50, 99])
const studentDima = new Student("Dima", "Brown", 1996, [90, 95, 99])
studentArtem.present()
studentArtem.absent()
studentArtem.present()
console.log(`studentArtem arrayAttendance: ${studentArtem.getAverageAttendance()}`)
console.log(`studentArtem: ${studentArtem.summary()}`)
studentArtem.toString()

studentAndrew.present()
studentAndrew.absent()
studentAndrew.present()
studentAndrew.absent()
studentAndrew.toString()
console.log(`studentAndrew arrayAttendance: ${studentAndrew.getAverageAttendance()}`)
console.log(`studentAndrew: ${studentAndrew.summary()}`)


studentDima.present()
studentDima.absent()
studentDima.present()
studentDima.present()
studentDima.present()
studentDima.present()
studentDima.present()
studentDima.present()
studentDima.present()
studentDima.present()
studentDima.toString()

console.log(`studentDima arrayAttendance: ${studentDima.getAverageAttendance()}`)
console.log(`studentDima: ${studentDima.summary()}`)
