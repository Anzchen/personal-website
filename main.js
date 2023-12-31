import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from 'imagesloaded'

gsap.registerPlugin(ScrollTrigger) 

const content = document.querySelector('.all-content')
const slider = document.querySelector('.slider')
const sections = gsap.utils.toArray('.slider section')

// scroll website back to the top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// get all images
const imgLoad = imagesLoaded(content)
// after images are all gotten, create the timeline
imgLoad.on('done', instance => {
  var timeline = gsap.timeline({
    // allow scrolling after the pre-loader has finished animating
    onComplete: function() {
      document.body.classList.remove('no-scroll');
    }
  })

  // hide icon
  timeline
  .to('svg', {opacity: 0, delay: 1, duration: .5})
  .to('.blinder', {scaleY: 0, stagger: .3, ease: 'power3.out'})
})

// find the distance to be scrolled
function getScrollAmt() {
  let sliderWidth = slider.scrollWidth;
  return -(sliderWidth - window.innerWidth)
}

const tween = gsap.to(slider, {
  x: getScrollAmt,
  duration: 3,
  ease: 'none'
})

// horizontal scrolling using pin and the animation above
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