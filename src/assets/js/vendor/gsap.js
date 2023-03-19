import {gsap, ScrollTrigger} from "gsap/all.js"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.page',
    content: '.main',
    smooth: 1.5,
    effects: true,
})
gsap.fromTo('.intro', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.intro',
        start: 'center',
        end:'1100',
        scrub: true,
    }
})
let itemsL = gsap.utils.toArray('.portfolio__left-block .portdolio__item')
for (let item of itemsL) {
    gsap.fromTo(item, {x: -80, opacity: 0}, {
        opacity: 1, 
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-1000',
            end: '-50',
            scrub: true,
        }
    })
}
let itemsR = gsap.utils.toArray('.portfolio__right-block .portdolio__item')
for (let item of itemsR) {
    gsap.fromTo(item, {x: 80, opacity: 0}, {
        opacity: 1, 
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-1000',
            end: '-50',
            scrub: true,
        }
    })
}
