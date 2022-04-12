const arrows = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')



navigator.geolocation.watchPosition((data) => {
  // console.log(data.coords.latitude)
  let lat = data.coords.latitude
  let long = data.coords.longitude
  speed.textContent = Math.round(data.coords.speed * 0.62137)
  console.log(lat)
  console.log(long)
  console.log(speed)
})