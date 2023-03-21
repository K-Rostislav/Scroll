import {gsap, ScrollTrigger} from "gsap/all.js"
import Lenis from "@studio-freight/lenis"
import rallax from "rallax.js"

gsap.registerPlugin(ScrollTrigger)

const itemsL = document.querySelectorAll('.portfolio__left-block .portdolio__item')
for (let item of itemsL) {
    gsap.fromTo(item, {x: -120, opacity: 0}, {
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
    gsap.fromTo(item, {x: 120, opacity: 0}, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: item,
            scrub: true,
        }
    })
}

const lenis = new Lenis({
    lerp: 0.05,
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

const img = document.querySelector('.intro__img')
rallax(img, {
    speed: 0.2,
})