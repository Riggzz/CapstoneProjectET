const rBtn = document.getElementById('RansomWare')


rBtn.addEventListener('click', () => {
    const form = document.getElementById('form')
    if(form.style.display === 'block'){
        form.style.display = 'none'
    } else {
        form.style.display = 'block'
    }
    rollbar.log("User clicked on RansomWare");
})


const kBtn = document.querySelector('#KeyLogger')


const logger = () => {
    rollbar.log("Userclicked on Virus");
}

kBtn.addEventListener('click', logger);


const mBtn = document.querySelector('#Mydoom')


const doom = () => {
    rollbar.log("Userclicked on Virus");
}

mBtn.addEventListener('click', doom);

const iBtn = document.querySelector('#ILOVEYOU')


const loveYou = () => {
    rollbar.log("Userclicked on Virus");
}

iBtn.addEventListener('click', loveYou);

const wBtn = document.querySelector('#WannaCry')


const wanna = () => {
    rollbar.log("Userclicked on Virus");
}

wBtn.addEventListener('click', wanna);