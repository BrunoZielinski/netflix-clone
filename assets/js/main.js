// HEADER MENU
const menuBtn = document.querySelector('.menu-btn i'),
  headerMenu = document.querySelector('.header .nav')

menuBtn.onclick = () => {
  headerMenu.classList.toggle('show-menu')

  if (headerMenu.classList.contains('show-menu')) {
    menuBtn.classList.remove('fa-bars')
    menuBtn.classList.add('fa-times')
  } else {
    menuBtn.classList.remove('fa-times')
    menuBtn.classList.add('fa-bars')
  }
}

// CAROUSEL MOVIES
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 6,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    700: {
      items: 3
    },
    900: {
      items: 4
    },
    1000: {
      items: 6
    },
    1600: {
      items: 7
    }
  }
})
