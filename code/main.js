import * as vocabPlot from './vocabPlot.js'
import * as scroll from './scrollcontrol.js'
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
$('.contents').css('height', `${pageSize*20}px`)
$('.vinyl').css('top', `${pageSize/3}px`)
$('.subTitle').css('top', `${pageSize*1/5}px`)


$('.videocontainer').css('top', `${pageSize*1.5}px`)
$('.videocontainer').css('height', `${pageSize}px`)
$('.videodescription').css('top', `${pageSize*1.6}px`)

$('.graphbox').css('top', `${pageSize*4}px`);
$('.graphbox').css('height', `${pageSize*1}px`);
$('.msg1').css('top', `${pageSize*6}px`)
$('.msg2').css('top', `${pageSize*7}px`)

$('.methodology').css('top', `${pageSize*9}px`)
$('.methodology').css('height', `${pageSize*1}px`);
vocabPlot.vocabPlot()
scroll.scrollcontroll()