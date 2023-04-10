const container = document.querySelector('.ilustration-menu');
const figure = document.querySelector('.ilustration-menu').lastElementChild;

const simple = document.querySelector('.simple')
const speedy = document.querySelector('.speedy')
const easy = document.querySelector('.easy')

container.addEventListener('click', (e) => {
  let state = e.target.id;

  if (state == "simple") {
    figure.classList = 'ilustration-menu__figure ilustration-menu__figure--simple';
    simple.classList = 'simple simple--active'
    speedy.classList = 'speedy'
    easy.classList = 'easy'
  }

  else if (state == "speedy") {
    figure.classList = 'ilustration-menu__figure ilustration-menu__figure--speddy';
    speedy.classList = 'speedy speedy--active'
    simple.classList = 'simple'
    easy.classList = 'easy'
  }

  else if (state == "easy") {
    figure.classList = 'ilustration-menu__figure ilustration-menu__figure--easy'
    easy.classList = 'easy easy--active'
    simple.classList = 'simple'
    speedy.classList = 'speedy'
  }
})

// questions
const questions = Array.from(document.querySelectorAll('.questions__element'));

questions.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('questions__element--active');
  })
})

// button 
const form = document.querySelector('form');
const input = document.querySelector('.form__input');
const mensaje = document.querySelector('.form__container');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    //! El correo electronico no es valido
    mensaje.classList.add('form__container--error')
    return;
  }
  // * correo correcto
  mensaje.classList.remove('form__container--error')
})


// icons
const facebook = document.querySelector('.footer__icon--facebook');
const twitter = document.querySelector('.footer__icon--twitter');

facebook.addEventListener('mouseover', () => {
  facebook.src = './images/icon-facebook-hover.svg';
})

facebook.addEventListener('mouseleave', () => {
  facebook.src = './images/icon-facebook.svg';
})

twitter.addEventListener('mouseover', () => {
  twitter.src = './images/icon-twitter-hover.svg';
})

twitter.addEventListener('mouseleave', () => {
  twitter.src = './images/icon-twitter.svg';
})


// nav
const nav = document.querySelector('.nav-mobile');
const iconNav = document.querySelector('.nav-mobile__menu');
const navContainer = document.querySelector('.nav-mobile__container');
const logo = document.querySelector('#logo')

iconNav.addEventListener('click', () => {
  nav.classList.toggle('nav-mobile--open')
  navContainer.classList.toggle('nav-mobile__container--open')

  if (nav.classList.contains('nav-mobile--open')) {
    iconNav.src = './images/icon-close.svg';
    logo.src = './images/logo-bookmark-open.svg';
  } else {
    iconNav.src = './images/icon-hamburger.svg';
    logo.src = './images/logo-bookmark.svg';
  }
})

if (window.screen.width <= 920) {
  container.addEventListener('click', (e) => {

    const lista = Array.from(container.children)

    lista.forEach(element => {
      element.classList.remove('ilustration-menu__text--activate')
    })

    let state = e.target.id;

    if (state == "simple") {
      e.target.classList.add('ilustration-menu__text--activate');
    }

    else if (state == "speedy") {
      e.target.classList.add('ilustration-menu__text--activate');
    }

    else if (state == "easy") {
      e.target.classList.add('ilustration-menu__text--activate');
    }
  }
  )
}