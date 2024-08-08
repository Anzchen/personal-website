import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import Lenis from "@studio-freight/lenis";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Testing from "./components/pages/Testing";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper404");
    // document.addEventListener("DOMContentLoaded", () => {
    const cards = [
      { id: "#card-1", endTranslateX: -2000, rotate: 45 },
      { id: "#card-2", endTranslateX: -1000, rotate: -30 },
      { id: "#card-3", endTranslateX: -2000, rotate: 45 },
      { id: "#card-4", endTranslateX: -1500, rotate: -30 },
    ];
    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "+=900vh",
      scrub: 1,
      pin: true,
      markers: true,
      onUpdate: (self) => {
        gsap.to(wrapper, {
          x: `${-370 * self.progress}vw`,
          y: 0, // Ensure y is always 0
          overwrite: "auto",
          duration: 1,
          ease: "power3.out",
        });
      },
    });
    // });

    // // Select DOM elements
    // const content = document.querySelector(".all-content");
    // const slider = document.querySelector(".slider");
    // // const sections = gsap.utils.toArray(".slider section");

    // // Initialize imagesLoaded
    // const imgLoad = imagesLoaded(content);

    // // Variable to enable / disable Lenis
    // let lenisEnable = false;

    // // Create GSAP timeline after images are loaded
    // imgLoad.on("done", () => {
    //   const timeline = gsap.timeline({
    //     onComplete: () => {
    document.body.classList.remove("no-scroll");
    //       document.querySelector(".loader").style.zIndex = "0";
    //       lenisEnable = true;
    //     },
    //   });

    //   // Timeline animations
    //   timeline
    //     .to(".loader-logo", { opacity: 0, delay: 1, duration: 0.5 })
    //     .to(".blinder", { scaleY: 0, stagger: 0.3, ease: "power3.out" });
    // });

    // // Initialize Lenis for smooth scrolling
    // const lenis = new Lenis();

    // function raf(time) {
    //   if (lenisEnable) {
    //     lenis.raf(time);
    //   }
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);

    // // Scroll website back to the top on refresh
    // window.onbeforeunload = () => {
    //   window.scrollTo(0, 0);
    // };

    // // Get scroll amount for horizontal scrolling
    // console.log(slider.offsetWidth);
    // function getScrollAmt() {
    //   let sliderWidth = slider.scrollWidth;
    //   return -(sliderWidth - window.innerWidth);
    // }

    // // Horizontal scrolling tween
    // const tween = gsap.to(slider, {
    //   x: getScrollAmt,
    //   ease: "none",
    // });

    // // Create ScrollTrigger for horizontal scrolling
    // ScrollTrigger.create({
    //   trigger: ".outer",
    //   start: "top top",
    //   end: () => `+=${getScrollAmt() * -1}`,
    //   pin: true,
    //   animation: tween,
    //   scrub: 1,
    //   invalidateOnRefresh: true,
    //   markers: true,
    // });

    // // Create GSAP timeline for changing background colors
    // const tl = gsap.timeline();

    // const tween2 = tl
    //   .to(".outer", { backgroundColor: "#3A506B" })
    //   .to(".outer", { backgroundColor: "#BB7E5D" })
    //   .to(".outer", { backgroundColor: "#4F6F52" })
    //   .to(".outer", { backgroundColor: "#ECE3CE" })
    //   .to(".outer", { backgroundColor: "#ECE3CE" });

    // // Create ScrollTrigger for background color animation
    // ScrollTrigger.create({
    //   trigger: ".outer",
    //   start: "top top",
    //   end: () => `+=${getScrollAmt() * -1}`,
    //   scrub: 1,
    //   animation: tween2,
    //   markers: true,
    // });

    // // Menu open/close functionality
    // const linkMenu = document.querySelector(".menu");
    // if (linkMenu) {
    //   linkMenu.addEventListener("click", openMenu);
    // }
    // let open = false;

    // function openMenu() {
    //   if (!open) {
    //     open = true;
    //     gsap.to(".menu-open", { opacity: 1, delay: 1, duration: 0.5 });
    //     gsap.to(".menu", {
    //       color: "var(--color-black)",
    //       delay: 0.5,
    //       duration: 0.5,
    //     });
    //   } else {
    //     open = false;
    //     gsap.to(".menu-open", { opacity: 0, delay: 1, duration: 0.5 });
    //     gsap.to(".menu", {
    //       color: "var(--color-white)",
    //       delay: 0.5,
    //       duration: 0.5,
    //     });
    //   }
    // }

    // // Logo refresh functionality
    // const linkLogo = document.querySelector(".logo");
    // if (linkLogo) {
    //   linkLogo.addEventListener("click", () => {
    //     location.reload();
    //   });
    // }

    // // Cleanup function for event listeners
    // return () => {
    //   if (linkMenu) linkMenu.removeEventListener("click", openMenu);
    //   if (linkLogo)
    //     linkLogo.removeEventListener("click", () => location.reload());
    // };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
