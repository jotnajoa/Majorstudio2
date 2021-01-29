import * as vocabPlot from './vocabPlot.js'

var tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.1 })

tl.fromTo('#light1', {
        opacity: 0.6,
        duration: 0.5,
        rotation: -15,
    }, {
        opacity: 0.3,
        rotation: 0,
        duration: 0.5
    }, 1

)

tl.fromTo('#light3', {
        opacity: 0.6,
        duration: 0.5,
        rotation: 15,
    }, {
        opacity: 0.3,
        rotation: 0,
        duration: 0.5
    }, 1

)

tl.fromTo('#light2', {
        opacity: 0.6,
        rotation: -30,
    }, {
        opacity: 0.3,
        rotation: 0
    }, 2

)

tl.fromTo('#light4', {
        opacity: 0.6,
        rotation: 30,
    }, {
        opacity: 0.3,
        rotation: 0
    }, 2

)

window.pageSize = 800;

$('.vinyl').css('top', `${pageSize/3}px`)
$('.subTitle').css('top', `${pageSize*1/5}px`)
$('.graphbox').css('top', `${pageSize*2}px`)

$('.videocontainer').css('top', `${pageSize}px`)

vocabPlot.vocabPlot()