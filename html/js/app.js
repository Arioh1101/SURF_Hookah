// 3D Scroll

let zSpacing = -750,
        lastPos = zSpacing / 5,
        $frames = document.getElementsByClassName('frame')
        frames = Array.from($frames),
        zVals = []

window.onscroll = function() {

    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function(n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -0.75
        let frame = frames[i],
                transform = `translateZ(${zVals[i]}px)`,
                opacity = zVals[i] < Math.abs(zSpacing) / 1 ? 1 : 0
        frame.setAttribute('style', `transform : ${transform}; opacity: ${opacity}`)
    })

}

window.scrollTo(0, 1)

// Parallax

window.addEventListener('scroll', e => (
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
))
gsap.registerPlugin(ScroolTrigger, ScroolSmoother)
ScroolSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})



// window.addEventListener('scroll', function() {
//     const caveImage = document.querySelector('.cave-image');
//     if (window.scrollY > 100) { // Замените это значение на желаемую точку, когда изображение должно выезжать
//       caveImage.style.position = 'fixed';
//       caveImage.style.top = '0';
//     } else {
//       caveImage.style.position = 'absolute';
//       caveImage.style.top = '100vh';
//     }
//   });