'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
        <img class="country__img" src="${data.flag}"/>
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1    
}


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  countriesContainer.style.opacity = 1
}

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)

    return response.json();
  })
}
/*
///////////////////////////////////////
/*
const getCountryData = function (country) {
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send()

    request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText)
    console.log(data)

    const html = `
    <article class="country">
          <img class="country__img" src="${data.flag}"/>
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1    
    })
}

getCountryData('gb')
getCountryData('usa')
getCountryData('italy')
*/


/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest()
  //AJAX call 1
  request.open('GET', `https://restcountries.com/v2/name/${country}`)
  request.send()

  request.addEventListener('load', function() {
  const [data] = JSON.parse(this.responseText)
  console.log(data)
  
  //render country 1
  renderCountry(data)

  // get neighbour country (2)

  const neighbour = data.borders?.[0]

  if(!neighbour) return

  //AJAX call country 2
  const request2 = new XMLHttpRequest()
  request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
  request2.send()

  request2.addEventListener('load', function() {
  const data2 = JSON.parse(this.responseText)
  console.log(data2)
  
  //render country 1
  renderCountry(data2, 'neighbour')
    })
  })
}
getCountryAndNeighbour('as')


const req = fetch('https://restcountries.com/v2/name/gb')
console.log(req)

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then(response => {

    if (!response.ok)
      throw new Error (`Country not Found! (Status:${response.status})`)
    return response.json()
  })
  .then(data => {
    renderCountry(data[0])
    const neighbour = data[0].borders?.[0]

    if (!neighbour) return

    return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
  })
  .then(response => response.json())
  .then(data => renderCountry(data, 'neighbour'))
  .catch(err => {
    console.error(`${err} 💥💥💥`)
    renderError(`Something went wrong 💥💥💥 ${err.message}. Try Again!`)
  })
  .finally(() => {
    countriesContainer.style.opacity = 1
  })
}

btn.addEventListener('click', function () {
  getCountryData('hufguebvjbfugheru')
})

//Event Loop in practice

console.log('Test start')
setTimeout(() => console.log('0 sec timer'), 0)
Promise.resolve('Resolved promise 1').then( res => 
console.log(res))

Promise.resolve('Resolved promise 2').then( res =>{
  for (let i = 0; i <10000000000; i++) {}
  console.log(res)
})

console.log('Test end')

//Building a simple Promise

const lotteryPromise = new Promise(function (resolve, reject) {

  console.log('Lottery draw is happening now 🔮')
  setTimeout(function () {
  if(Math.random() >= 0.5) {
    resolve('You Won 🏆')
  } else {
    reject(new Error('You lost your money ⚠️'))
    }
  }, 2000)
}) 

lotteryPromise.then(res => console.log(res))
.catch( err => console.error(err))

//Promisifying setTimeout

const wait = (seconds) => new Promise((resolve)=> 
    setTimeout(resolve, seconds * 1000)
  )

  wait(2).then(()=> {
    console.log('2 seconds passed') 
    return wait(1)
  })
  .then (() => {
    console.log('3 seconds passed')
    return wait(1)
  })
  .then (() => console.log('4 seconds passed'))
  
 
  //Promisifying the geo location

  //How it worked before

  //navigator.geolocation.getCurrentPosition(
  //  position => console.log(position),
  //  err => console.log(err)
  // )
  // console.log('Getting position')

  // Promisifying it

  const getPosition = function () {
    return new Promise(function (resolve, reject) {

      //navigator.geolocation.getCurrentPosition(
      //  position => resolve(position),
      //  err => reject(err)
      //  )
      //make it simpler

      navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }

    //getPosition().then(pos => console.log(pos))
    

    const whereAmI = function () {
      getPosition().then(pos => {
        const { latitude: lat, longitude: lng } = pos.coords
    
       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      })
      .then(response => response.json())
      .then(data => {
          console.log(`You are in ${data.city}, ${data.country}`)
          return fetch(`https://restcountries.com/v2/name/${data.country}`)
  })
      .then(response => {
  
          if (!response.ok)
          throw new Error (`Country Not Found! (Status:${response.status})`)
          return response.json()
      })
      .then(data => renderCountry(data[0]))
      .catch(err => console.error(`${err.message} 💥💥💥💥`))
      .finally(() => {
          countriesContainer.getElementsByClassName.opacity = 1
      })
  }
  btn.addEventListener('click', whereAmI)
  

  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }

  const whereAmI = async function() {
    try {
    const pos = await getPosition()
    const { latitude: lat, longitude: lng } = pos.coords
    
    const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    if (!geoRes.ok) throw new Error('Problem getting location data')
    const dataGeo = await geoRes.json()

    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`)
    if (!res.ok) throw new Error('Problem getting country')
    const data = await res.json()
    renderCountry(data[0])

    return `You are in ${dataGeo.city}, ${dataGeo.country}`

    } catch (err) {
      console.error(err)
      renderError(`${err.message}`)
    }
  }

  console.log('1: Will get location');
  (async function () {
    try {
      const city = await whereAmI()
      console.log(`2: ${city}`)
    } catch(err) {
     console.error(`2: ${err.message}`)
    }
    console.log('3: Finished getting location')
  })()

  /*
  try {
    let y = 1
    const x = 2
    x = 3
  } catch (err) {
    alert(err.message)
  }
  

  const get3Countries = async function (c1, c2, c3) {
    try {
      //const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`)
      //const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`)
      //const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`)

      const data = await Promise.all([
        getJSON(`https://restcountries.com/v2/name/${c1}`), 
        getJSON(`https://restcountries.com/v2/name/${c2}`),
        getJSON(`https://restcountries.com/v2/name/${c3}`),
      ])

      console.log(data.map(data => data[0].capital))
    } catch (err) {
      console.error(err)
    }
  }
  get3Countries('portugal', 'canada', 'tanzania')


//Promise.race

const countriesRace = async function (c1, c2, c3) {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/${c1}`), 
    getJSON(`https://restcountries.com/v2/name/${c2}`),
    getJSON(`https://restcountries.com/v2/name/${c3}`),
  ]);
  console.log(res[0]);
};
countriesRace('egypt', 'italy', 'mexico')


const timeout = function (sec) {
  return new Promise( function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'))
    }, sec * 1000)
  })
}

const rejectRace = async function (c1) {
  try {
  const res2 = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/${c1}`),
    timeout(0.1),
  ])
  console.log(res2[0])
} catch (err) {
  console.error(err)
  }
}

rejectRace('tanzania')

//Promise.allSettled

const get3Countries = async function (c1, c2, c3) {
  try {

    const data = await Promise.allSettled([
      getJSON(`https://restcountries.com/v2/name/${c1}`), 
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ])

    console.log(data)
  } catch (err) {
    console.error(err)
  }
}
get3Countries('portugal', 'canada', 'tanzania')


//Promise.any

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.reject('Error')
])
.then(res => console.log(res))
.catch(err => console.error(err))

*/