"use strict"

const array = [4, 5, 8, 7, 45, 6, 77, 88, 55, 2, 14, 4]

const removeElement = (array, item) => array.filter(el => el !== item)
console.log(removeElement(array,4))
