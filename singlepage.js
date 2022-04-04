

const movieDetails = document.querySelector('.text-container')
const profileImage = document.querySelector('.image-container img')
const nxtBtn =document.querySelector('#nextbutton')
const preBtn =document.querySelector('#previousbutton')


const movieid = document.location.search.split('=') [1]
    
    fetch(new Request(`https://api.tvmaze.com/shows/${movieid}`))
    .then((response) =>{
        return response.json()
    })
    .then((body) => {
        console.log(body)
        profileImage.src = body.image.medium
        movieDetails.querySelector('h2').textContent = body.name
        movieDetails.querySelector('h3').textContent = body.genres
        movieDetails.querySelector('p').innerHTML = body.summary
        movieDetails.querySelector('h4').textContent = `Language:${body.language}`
        movieDetails.querySelector('h5').textContent = `Timimngs: ${body.schedule.time}`
    })
