import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from 'imagesloaded'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger) 

const content = document.querySelector('.all-content')
const slider = document.querySelector('.slider')
const sections = gsap.utils.toArray('.slider section')

// Getting all images
const imgLoad = imagesLoaded(content)

// Variable to enable / disable lenis
let lenisEnable = false;

// After images are all gotten, create the timeline
imgLoad.on('done', instance => {
  var timeline = gsap.timeline({
    // Disable scrolling during page load
    onComplete: function() {
      document.body.classList.remove('no-scroll');
      document.querySelector('.loader').style.zIndex = "0";
      lenisEnable = true
    }
  })
  // Hide icon and begin timeline animations
  timeline
  .to('svg', {opacity: 0, delay: 1, duration: .5})
  .to('.blinder', {scaleY: 0, stagger: .3, ease: 'power3.out'})
})

// Lenis Smooth Scrolling
const lenis = new Lenis()

function raf(time) {
  if (lenisEnable) {
    lenis.raf(time)
  }
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Scroll website back to the top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Finding the distance to be scrolled
function getScrollAmt() {
  let sliderWidth = slider.scrollWidth;
  return -(sliderWidth - window.innerWidth)
}

const tween = gsap.to(slider, {
  x: getScrollAmt
})

// Horizontal scrolling using pin and the animation above
ScrollTrigger.create({
  trigger: '.outer',
  start: 'top',
  end: () => `+=${getScrollAmt() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
  markers: true
})

// Changing background color for projects section
const tl = gsap.timeline({});
const tween2 = tl
.to('.outer', {
  backgroundColor: '#3A4D39'
})
.to('.outer', {
  backgroundColor: '#0F4C75'
})
.to('.outer', {
  backgroundColor: '#FF0000'
})
.to('.outer', {
  backgroundColor: '#ECE3CE'
})
.to('.outer', {
  backgroundColor: '#ECE3CE'
})

ScrollTrigger.create({
  trigger: '.outer',
  start: 'top',
  end: () => `+=${getScrollAmt() * -1}`,
  scrub: 1,
  animation: tween2,
  markers: true 
})

// Making menu open and close
var linkMenu = document.querySelector('.menu');
var menu = document.querySelector(".menu-open");
linkMenu.addEventListener('click', openMenu);

function openMenu() {
  if (menu.style.display == "none") {
    menu.style.display = "flex";
  }
  else {
    menu.style.display = "none"
  }
}

// Making logo cause page refresh
var linkLogo = document.querySelector('.logo');
linkLogo.addEventListener('click', refresh);

function refresh() {
  location.reload()
}



