// Navigation *********************************************

const navSlide = () => {
    const burger = document.querySelector('#burger-nav');
    const nav = document.querySelector('.link-access');
    const navLinks = document.querySelectorAll('.link-access li');

    // toggle navigation

    burger.addEventListener('click', () => {

            // toggle navigation

        nav.classList.toggle('nav-active');

            //Animation of links

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
    });

    // burger animation

        burger.classList.toggle('toggle');

    });

}

navSlide();


// Slide ************************************************


let i = 0;
const img = [];
const time = 6000;

// list of images ----

img[0] = './img/climate-change-img.jpg';
img[1] = './img/city.jpg';
img[2] = './img/market.jpg';
img[3] = './img/social.jpg'; 

// changing ----

function changeImg() {
    document.slide.src = img[i];

    if(i < img.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}


window.onload = changeImg;

// Changing word in text ********************************

/*

function wordChange () {
    const words = ['Me', 'Us'];
    const place = document.querySelector('#word-text');
    
      words.forEach(element => {
        setTimeout(place.textContent = element, 3000);
    });
} 

wordChange();
*/