import {gsap, ScrollTrigger} from "gsap/all.js"
import LocomotiveScroll from "locomotive-scroll"

gsap.registerPlugin(ScrollTrigger)

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.05,
    scrollbarClass: '.main',
})

ScrollTrigger.scrollerProxy('.main', {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, {duration: 0, disableLerp: true}) : scroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
scroll.on("scroll", ScrollTrigger.update)
ScrollTrigger.defaults({ scroller: ".main" })
ScrollTrigger.addEventListener("refresh", () => scroll.update())

const itemsL = document.querySelectorAll('.portfolio__left-block .portdolio__item')

for (let item of itemsL) {
    gsap.fromTo(item, {x: -200, opacity: 0}, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: item,
            scrub: true,
        }
    })
}

const itemsR = document.querySelectorAll('.portfolio__right-block .portdolio__item')

for (let item of itemsR) {
    gsap.fromTo(item, {x: 200, opacity: 0}, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: item,
            scrub: true,
        }
    })
}
