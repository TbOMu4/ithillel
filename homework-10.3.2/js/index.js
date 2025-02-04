"use strict"

function СontactBook(name, phone, email) {
    this.contacts = []
    this.name = name
    this.phone = phone
    this.email = email

    this.contactSearch = function (name) {
        const contact = this.contacts.find(el => el.name === name)
        contact ?
            console.log(`
Ім'я: ${contact.name}
Телефон: ${contact.phone}
Електронна пошта: ${contact.email}`) :
            console.log(`Нажаль даний контакт ${name} відсутній`)
    }
    this.addingNewContacts = function (name, phone, email) {
        this.contacts.push({name, phone, email})
    }
}

const newСontactBook = new СontactBook()
newСontactBook.addingNewContacts('Іван Петров', '+380501234567', 'ivan.petrov@example.com')
newСontactBook.addingNewContacts('Олена Іваненко', '+380671234567', 'olena.ivanenko@example.com')
newСontactBook.contactSearch("Іван Петров")
newСontactBook.contactSearch("Олена Васененка")
console.log(newСontactBook.contacts)
