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
const title1 = document.querySelector('.title1')
const title2 = document.querySelector('.title2')

//Fetch data on page load
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        todayImage.src = data.hdurl
        todayDescription.innerHTML = data.explanation
        document.querySelector('span').innerText = data.date
        title1.innerHTML = data.title
    })
    .catch(err => {
        console.log(`Not found ${err}`)
    })
//Fetch data on button click
button.addEventListener('click', getDate)

//Hide iframe on page load
document.querySelector('iframe').style.display = 'none'

//Hide img placeholder on page load
picOfDay.style.display = 'none'

function getDate(){
    
const date = document.querySelector('#date')
const dateUrl = `https://api.nasa.gov/planetary/apod?api_key=8d3KhFXcP9llhHhKjjcgNvfgKfgPz5CxIwbdZfF4&date=${date.value}`

    fetch(dateUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.media_type === "video"){
                document.querySelector('iframe').style.display = 'block'
                document.querySelector('iframe').src = data.url
                picOfDay.style.display = 'none'
            } else if(data.media_type ==='image'){
                document.querySelector('iframe').style.display = 'none'
                picOfDay.style.display = 'block'
                picOfDay.src = data.hdurl
            }

            title2.innerHTML = data.title
            dayDescription.innerHTML = data.explanation
            
        })
        .catch(err=> {
            console.log(`Not Found ${err}`)
        })


}
