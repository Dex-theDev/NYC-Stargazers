// API Key - 8d3KhFXcP9llhHhKjjcgNvfgKfgPz5CxIwbdZfF4
// API url - https://api.nasa.gov/planetary/apod?api_key=8d3KhFXcP9llhHhKjjcgNvfgKfgPz5CxIwbdZfF4&date=2014-10-01
// User will be able to view NASA's picture of the day on page load, along with a description
// If they choose, they will be able to choose past dates and see those photos


const url = `https://api.nasa.gov/planetary/apod?api_key=8d3KhFXcP9llhHhKjjcgNvfgKfgPz5CxIwbdZfF4`
const todayImage = document.querySelector('.today-image')
const todayDescription = document.querySelector('.description-text')
const button = document.querySelector('button')
const picOfDay = document.querySelector('.picOfDay')
const dayDescription = document.querySelector('.description-text2')
//Fetch data on page load
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        todayImage.src = data.hdurl
        todayDescription.innerHTML = data.explanation
        document.querySelector('span').innerText = data.date
    })
    .catch(err => {
        console.log(`Not found ${err}`)
    })
//Fetch data on button click
button.addEventListener('click', getDate)

function getDate(){
    
const date = document.querySelector('#date')
const dateUrl = `https://api.nasa.gov/planetary/apod?api_key=8d3KhFXcP9llhHhKjjcgNvfgKfgPz5CxIwbdZfF4&date=${date.value}`

    fetch(dateUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            picOfDay.src = data.hdurl
            dayDescription.innerHTML = data.explanation

        })
        .catch(err=> {
            console.log(`Not Found ${err}`)
        })


}
