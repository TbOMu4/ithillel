"use strict"

function Ladder(step) {
    this.step = step

    this.up = function () {// підніматиме вас на одну сходинку
        this.step++
        return this
    }
    this.down = function () { // опускатиме вас на одну сходинку
        this.step > 0 ? this.step-- : this.step = 0
        return this
    }
    this.showStep = function () { // показує поточну сходинку
        setTimeout(() => {
            console.log(`Ваша поточна сходинка: ${this.step}`)
        }, 1000) //Ми піднімаємось по сходах не миттєво в житті) тому зробив затримку)
        return this
    }
}

const ladder = new Ladder(0)
ladder.up().up().down().showStep()
