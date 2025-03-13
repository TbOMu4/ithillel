"use strict"

const elSlider = document.querySelector('.slider')
const elSliderWrapper = document.querySelector('.slider-wrapper')
const elSliderSlides = document.querySelectorAll('.slider-slide')
const elSliderPagination = document.querySelector('.slider-pagination')
const elSliderBtnPrev = document.querySelector('.slider-button-prev')
const elSliderBtnNext = document.querySelector('.slider-button-next')

let currentIndex = 0

elSliderSlides.forEach((_, index) => {
    const elBullet = document.createElement('span')
    elBullet.classList.add('slider-bullet')
    if (index === 0) elBullet.classList.add('active')
    elBullet.dataset.index = index
    elSliderPagination.append(elBullet)
})

const getUpdateSlider = () => {
    elSliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`

    document.querySelectorAll('.slider-bullet').forEach(bullet => bullet.classList.remove('active'))
    document.querySelector(`.slider-bullet[data-index="${currentIndex}"]`).classList.add('active')

    elSliderBtnPrev.style.display = currentIndex === 0 ? 'none' : 'block'
    elSliderBtnNext.style.display = currentIndex === elSliderSlides.length - 1 ? 'none' : 'block'
}

const getChangeSlide = (direction) => {
    if (direction === 'next' && currentIndex < elSliderSlides.length - 1) {
        currentIndex++
    } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--
    }
    getUpdateSlider()
}

elSliderBtnNext.addEventListener('click', () => getChangeSlide('next'))
elSliderBtnPrev.addEventListener('click', () => getChangeSlide('prev'))

elSliderPagination.addEventListener('click', (e) => {
    if (e.target.classList.contains('slider-bullet')) {
        currentIndex = parseInt(e.target.dataset.index)
        getUpdateSlider()
    }
})

getUpdateSlider()