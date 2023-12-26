import {gsap} from "gsap"
import imagesLoaded from "imagesloaded"

var loader = document.getElementById("logo-container");
const content = document.querySelector("section")

// get all images
const imgLoad = imagesLoaded(content)

imgLoad.on('done', instance => {
  // hide icon
  var timeline = gsap.timeline()
  timeline.to('svg', {opacity: 0})
  timeline.to('.blinder', {scaleY: 0, ease: "slow"})
})