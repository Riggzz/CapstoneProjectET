const imagesCallback = ({ data: images }) => displayImages(images)
const errCallback = err => console.log(err.response.data)

const baseURL = `http://localhost:4005/`

const getImages = () => axios.get(baseURL).then(imagesCallback).catch(errCallback)
const createVictim = body => axios.post(baseURL).catch(errCallback)

const loginbtn = document.getElementById('loginButton')
loginbtn.addEventListener('click', () => {
    location.href ='/virus'
})

const homebtn = document.getElementById('backButton')
homebtn.addEventListener('click', () => {
  location.href = baseURL
})



//BUTTONS//

const rBtn = document.getElementById('RansomWare')

const submitBtn = document.getElementById('submit')
const nameinput = document.getElementById('name')
const lastnameinput = document.getElementById('lastname')
const phoneinput = document.getElementById('phone')

submitBtn.addEventListener('click', () => {
    const body = {
        first_name: nameinput.value, 
        last_name: lastnameinput.value,
        phone: phoneinput.value
    }
    axios.post (baseURL, body)
    .then((res) => {

    })
})

rBtn.addEventListener('click', () => {
    const form = document.getElementById('form')
    if(form.style.display === 'block'){
        form.style.display = 'none'
    } else {
        form.style.display = 'block'
    } 
    if(rBtn.style.display === 'block'|| rBtn.style.display === ''){
        rBtn.style.display = 'none'
    } else {
        rBtn.style.display = 'block'
    } 
})

const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    if(rBtn.style.display === 'none'){
        rBtn.style.display = 'block'
    }
    if(kBtn.style.display === 'none'){
        kBtn.style.display = 'block'
    }
    if(mBtn.style.display === 'none'){
        mBtn.style.display = 'block'
    }
    if(iBtn.style.display === 'none'){
        iBtn.style.display = 'block'
    }
    if(wBtn.style.display === 'none'){
        wBtn.style.display = 'block'
    }
})

const kBtn = document.getElementById('KeyLogger')


kBtn.addEventListener('click', () => {
    const form = document.getElementById('form')
    if(form.style.display === 'block'){
        form.style.display = 'none'
    } else {
        form.style.display = 'block'
    } 
    console.log(kBtn.style.display)
    if(kBtn.style.display === 'block'|| kBtn.style.display === ''){
        kBtn.style.display = 'none'
    } else {
        kBtn.style.display = 'block'
    } 
})

const mBtn = document.getElementById('Mydoom')


mBtn.addEventListener('click', () => {
    const form = document.getElementById('form')
    if(form.style.display === 'block'){
        form.style.display = 'none'
    } else {
        form.style.display = 'block'
    } 
    console.log(mBtn.style.display)
    if(mBtn.style.display === 'block'|| mBtn.style.display === ''){
        mBtn.style.display = 'none'
    } else {
        mBtn.style.display = 'block'
    } 
})

const iBtn = document.getElementById('ILOVEYOU')

iBtn.addEventListener('click', () => {
    const form = document.getElementById('form')
    if(form.style.display === 'block'){
        form.style.display = 'none'
    } else {
        form.style.display = 'block'
    } 
    console.log(iBtn.style.display)
    if(iBtn.style.display === 'block'|| iBtn.style.display === ''){
        iBtn.style.display = 'none'
    } else {
        iBtn.style.display = 'block'
    } 
})

const wBtn = document.getElementById('WannaCry')

wBtn.addEventListener('click', () => {
    const form = document.getElementById('form')
    if(form.style.display === 'block'){
        form.style.display = 'none'
    } else {
        form.style.display = 'block'
    } 
    console.log(wBtn.style.display)
    if(wBtn.style.display === 'block'|| wBtn.style.display === ''){
        wBtn.style.display = 'none'
    } else {
        wBtn.style.display = 'block'
    } 
})

function allButtons(rBtn, kBtn, mBtn, iBtn, wBtn){
    let theButton = allButtons(rBtn, kBtn, mBtn, iBtn, wBtn)
    theButton.addEventListener('click', () => {
        if (theButton.style.display === 'none' || theButton.style.display === ''){
            theButton.style.display = 'block'
        } else {
            theButton.style.display = 'none'
        }
    })
}

getImages()