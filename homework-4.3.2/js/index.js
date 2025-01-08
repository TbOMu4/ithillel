"use strict"

const userYearBirth = parseInt(prompt("Введіть свій рік народження:", "0"))
const currentYear = new Date().getFullYear()
let ageUserMessage = ''

if (userYearBirth > 0 && userYearBirth <= currentYear) {
  const ageUser = currentYear - userYearBirth
  ageUserMessage = `Ваш вік ${ageUser}`
} else {
  ageUserMessage = `Шкода, що ви не захотіли вписати свій справжній рік народження`
}

const userCityResidence = prompt("Введіть своє місто проживання: ")
let messageFirst = ''

if (userCityResidence) {
  switch (userCityResidence.toLowerCase()) {
    case "київ":
      messageFirst = `Ти живеш у столиці України`
      break
    case "вашингтон":
      messageFirst = `Ти живеш у столиці США`
      break
    case "лондон":
      messageFirst = `Ти живеш у столиці Великої Британії`
      break
    default:
      messageFirst = `Ти живеш у місті ${userCityResidence.trim()}`
  }
} else {
  messageFirst = `Шкода, що ви не захотіли вказати місто проживання`
}

const userFavoriteSport = prompt("Введіть свій улюблений вид спорту: ")
let messageSecond = ''

if (userFavoriteSport) {
  switch (userFavoriteSport.toLowerCase()) {
    case "бамбінтон":
      messageSecond = `Круто! Хочеш стати як Ли Ян Ван Цзилинь?`
      break
    case "бокс":
      messageSecond = `Круто! Хочеш стати як Олександр Усик?`
      break
    case "футбол":
      messageSecond = `Круто! Хочеш стати як Гаррі Магвайр?`
      break
    default:
      messageSecond = `Гарний вибір!`
  }
  messageSecond += ` Ваш улюблений вид спорту ${userFavoriteSport.trim()}!`
} else {
  messageSecond = `Шкода, що ви не захотіли вказати улюблений вид спорту`
}

const finalMessage = `${ageUserMessage.trim()}
${messageFirst.trim()}
${messageSecond.trim()}`
alert(finalMessage)