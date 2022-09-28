'use strict';
/*
PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this 
time using async/await (only the part where the promise is consumed,
reuse the 'createImage' function from before)
2. Compare the two versions, think about the big differences, and see which
one you like more
3. Don't forget to test the error handler, and to set the network speed to
“Fast3G” in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths
 'imgArr'
2. Use .map to loop over the array, to load all the images with the 
'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the 
array 😉
5. Add the 'parallel' class to all the images(it has some CSS styles)

Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'].
To test, turn off the 'loadNPause' function

Old Function from Challenge #2

*/
const imgContainer = document.querySelector('.images')

//const wait = (seconds) => new Promise((resolve)=> 
  //  setTimeout(resolve, seconds * 1000)
  // )

const createImage = function(imgPath) {
    return new Promise (function (resolve, reject) { 
    const img = document.createElement('img')
    img.src = imgPath

    img.addEventListener('load', function() {
        imgContainer.append(img)
        resolve(img)
    })
    img.addEventListener('error', function() {
        reject(new Error('Image not found!'))
    })
 })
}

/*
let currentImg

createImage('img/img-1.jpg')
.then(img => {
    currentImg = img
    return wait(2)
})
    .then(() => {
        currentImg.style.display = 'none'
        return createImage('img/img-2.jpg')
    })
    .then(img => {
        currentImg = img
        return wait(2)
    })
    .then(() => {
        currentImg.style.display = 'none'
    })
.catch(err => console.error(err)) 


//Part 1

const loadNPause = async function() {
    try {
        let currentImg

        const img1 = await createImage('img/img-1.jpg')
        currentImg = img1
        await wait(2)
        currentImg.style.display = 'none'

        const img2 = await createImage('img/img-3.jpg')
        currentImg = img2
        await wait(2)
        currentImg.style.display = 'none'  
         }  catch (err) {
        console.error(err)
    }
}
loadNPause()


//PART 2

const loadAll = async function (imgArr) {
    try {
        const imgs = await imgArr.map(
            async img => await createImage(img)
            )

        const allImgs = await Promise.all(imgs)
        allImgs.forEach(img => img.classList.add ('parallel'))
    } catch (err) {
        console.error(err)
    }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])
*/

