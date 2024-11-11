const good = document.querySelector('.good1 .material-icons-outlined')
const good2 = document.querySelector('.good2 .material-icons-outlined')
const num = document.querySelector('.good1 .num')
const num2= document.querySelector('.good2 .num2')

good.addEventListener('click', function() {
  good.classList.add('red')
  num.textContent = parseInt(num.textContent) + 1

  if(parseInt(num.textContent) >= 238){
    num.textContent = parseInt(num.textContent) -2
    good.classList.remove('red')
  }
  
})
good2.addEventListener('click', function() {
  good2.classList.add('red')
  num2.textContent = parseInt(num2.textContent) + 1

  if(parseInt(num2.textContent) >= 159){
    num2.textContent = parseInt(num2.textContent) -2
    good2.classList.remove('red')
  }
  
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
    $('#insert').load('info2.html')
});