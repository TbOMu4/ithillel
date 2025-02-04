"use strict"

const contactBook = {
    contacts: [
        {
            name: "Іван Петров",
            phone: "+380501234567",
            email: "ivan.petrov@example.com"
        },
        {
            name: "Олена Іваненко",
            phone: "+380671234567",
            email: "olena.ivanenko@example.com"
        },
        {
            name: "Андрій Коваленко",
            phone: "+380931234567",
            email: "andriy.kovalenko@example.com"
        }
    ],
    contactSearch: function (name) {
        const contact = this.contacts.find(el => el.name === name)
        contact ?
            console.log(`
Ім'я: ${contact.name} 
Телефон: ${contact.phone}
Електронна пошта: ${contact.email}`) :
            console.log(`Нажаль даний контакт ${name} відсутній`)
    },
    addingNewContacts: function (name, phone, email) {
        this.contacts.push({name, phone, email})
    }
}
contactBook.contactSearch("Олена Іваненко")
contactBook.contactSearch("Олена Васененка")
contactBook.addingNewContacts("Петро Щур", "+380931234547", "petro@example.com")
console.log(contactBook.contacts)
contactBook.contactSearch("Петро Щур")

