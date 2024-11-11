const show = document.querySelector('.hide')
const area = document.querySelector('.area3')
show.addEventListener('click', function() {
  area.classList.add('show')
})

const toTopEl = document.querySelector('.to-top')

window.addEventListener('scroll', _.throttle(function () {

  if (window.scrollY > 400) {
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))

toTopEl.addEventListener('click', function () {
  
  gsap.to(window, .4, {
    scrollTo: 0
  })
})

$('#time').click(function () {
    $('#insert').load('info.html')
});