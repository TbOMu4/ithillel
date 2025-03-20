"use strict"

class BankAccount {
    #balance

    constructor(balance) {
        this.Balance = balance
    }

    get Balance() {
        return this.#balance
    }

    set Balance(newBalance) {
        if (newBalance < 0) throw new Error("Баланс не може бути від'ємним");
        this.#balance = newBalance;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("Сума поповнення повинна бути більшою за 0")
        this.Balance += amount
    }

    withdraw(amount) {
        if (amount > this.Balance) throw new Error("НЕ можливо зняти суму більшу ніж баланс")
        this.Balance -= amount
    }
}

const account1 = new BankAccount(1000)

console.log(account1.Balance)
account1.deposit(500)
console.log(account1.Balance)
account1.withdraw(200)
console.log(account1.Balance)