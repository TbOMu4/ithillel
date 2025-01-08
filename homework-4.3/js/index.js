"use strict"

const userYearBirth = parseInt(prompt("Введіть свій рік народження:", "0"))
const currentYear = new Date().getFullYear();

if (userYearBirth > 0 && userYearBirth <= currentYear) {
  const ageUser = currentYear - userYearBirth;
  alert(`Ваш вік ${ageUser}`)
} else {
  alert(`Шкода, що ви не захотіли вписати свій справжній рік народження`)
}

const userCityResidence = prompt("Введіть своє місто проживання: ")
let messageFirst
let userCountry

if (userCityResidence) {
  const city = userCityResidence.toLowerCase()
  switch (city) {
    case "київ":
      userCountry = "України"
      messageFirst = `Ти живеш у столиці ${userCountry.trim()}`
      break
    case "вашингтон":
      userCountry = "США"
      messageFirst = `Ти живеш у столиці ${userCountry.trim()}`
      break
    case "лондон":
      userCountry = "Великої Британії"
      messageFirst = `Ти живеш у столиці ${userCountry.trim()}`
      break
    default:
      messageFirst = `Ти живеш у місті ${userCityResidence.trim()}`
  }
  alert(messageFirst)
} else {
  alert(`Шкода, що ви не захотіли вказати місто проживання`)
}

const userFavoriteSport = prompt("Введіть свій улюблений вид спорту: ")
let messageSecond

if (userFavoriteSport) {
  const sport = userFavoriteSport.toLowerCase()
  switch (sport) {
    case "бамбінтон":
      messageSecond = `Круто! Хочеш стати як Ли Ян Ван Цзилинь?`
      break
    case "бокс":
      messageSecond = `Круто! Хочеш стати як  Олександр Усик?`
      break
    case "футбол":
      messageSecond = `Круто! Хочеш стати як Гаррі Магвайр?`
      break
    default:
      messageSecond = `Гарний вибір!`;
  }
  alert(messageSecond)
  alert(`Ваш улюблений вид спорту ${userFavoriteSport.trim()}`)
} else {
  alert(`Шкода, що ви не захотіли вказати улюблений вид спорту`)
}
