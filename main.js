const arrows = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')



navigator.geolocation.watchPosition((data) => {
  let lat = data.coords.latitude
  let long = data.coords.longitude
  speed.textContent = (data.coords.speed * 0.62137).toFixed(2)
  arrows.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => console.error(err))