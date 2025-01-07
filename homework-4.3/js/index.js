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
  switch (userCityResidence.toLowerCase()) {
    case "київ":
      userCountry = "України"
      messageFirst = `Ти живеш у столиці ${userCountry}`
      break
    case "вашингтон":
      userCountry = "США"
      messageFirst = `Ти живеш у столиці ${userCountry}`
      break
    case "лондон":
      userCountry = "Велика Британії"
      messageFirst = `Ти живеш у столиці ${userCountry}`
      break
    default:
      messageFirst = `Ти живеш у місті ${userCityResidence}`
  }
  alert(messageFirst)
} else {
  alert(`Шкода, що ви не захотіли вказати місто проживання`)
}

const userFavoriteSport = prompt("Введіть свій улюблений вид спорту: ")
let messageSecond

if (userFavoriteSport) {
  switch (userFavoriteSport.toLowerCase()) {
    case "Бамбінтон":
      messageSecond = `Круто! Хочеш стати як Ли Ян Ван Цзилинь?`
      break
    case "Бокс":
      messageSecond = `Круто! Хочеш стати як  Олександр Усик?`
      break
    case "Футбол":
      messageSecond = `Круто! Хочеш стати як Гаррі Магвайр?`
      break
    default:
      messageSecond = `Гарний вибір!`;
  }
  alert(messageSecond)
  alert(`Ваш улюблений вид спорту ${userFavoriteSport}`)
} else {
  alert(`Шкода, що ви не захотіли вказати улюблений вид спорту`)
}
