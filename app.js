const img = document.querySelector('img')
const para = document.querySelector('p')
function toss(clicked) {
    let roundNumber = Math.floor(Math.random() * 2);
    console.log(roundNumber);
    if (clicked === 'masjid' && roundNumber === 0 || clicked === 'chand' && roundNumber === 1) {
        // console.log(clicked, 'toss jeet gaye');
        para.innerHTML = 'You win the toss.'
    } else {
        // console.log('toss haar gaye');
        para.innerHTML = 'You lose the toss.'
    }
    if (roundNumber === 1){
        img.src = './assets/chand.jpg'
    }else{
        img.src = './assets/masjid.jpg'
    }
}