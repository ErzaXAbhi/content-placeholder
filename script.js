const header = document.getElementById('header');
const title = document.getElementById('title');
const excert = document.getElementById('excert');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="./bg_5.jpg" alt="">'

    title.innerHTML = 'Lorem ipsum dolor sit amet'

    excert.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, commodi'

    profile_img.innerHTML = '<img src="./author.jpg" alt="">'

    name.innerHTML = 'Abhijit Parad'

    date.innerHTML = 'May 23, 2023'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}