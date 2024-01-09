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

// Changing background color for each project
const tween2 = gsap.to('.outer', {
  backgroundColor: '#739072'
})

ScrollTrigger.create({
  trigger: '.project2',
  start: 'top center',
  end: 'bottom center',
  scrub: 1,
  animation: tween2,
  markers: true 
})

// const tween3 = gsap.to('.outer', {
//   backgroundColor: '#ECE3CE'
// })

// ScrollTrigger.create({
//   trigger: '.project2',
//   start: 'bottom center',
//   end: '150% center',
//   scrub: 1,
//   animation: tween3,
//   markers: true 
// })