// Parallax

window.addEventListener('scroll', e => (
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
))
gsap.registerPlugin(ScroolTrigger, ScroolSmoother)
ScroolSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})
