import * as vocabPlot from './vocabPlot.js'
import * as uniquewords from './uniqueword.js';
import * as wordEqualizer from './wordEqualizer.js'

export const scrollcontroll = () => {
    let newImgwidth = 150
    let tl1 = gsap.timeline();

    tl1.to('.videoclip', {
        scrollTrigger: {
            trigger: '.videocontainer',
            scrub: true,
            start: 'center center',
            end: `+=${pageSize*2}px top`,
            pin: '.videoclip',
            onEnter: () => {
                $('.pjtHeader').animate({ 'opacity': 1 }, 1000)
                $('.headerBox').animate({ 'opacity': 1 }, 1000)
                console.log('calling once');
                $('.vinyl').animate({ 'top': `${window.innerHeight*0.8}` }, 1000)

                $('.vinyl').css('width', `${newImgwidth+newImgwidth/2}px`)

                $('.vinyl').css('animation', 'recordTransition 1.5s')

                setTimeout(() => {
                    $('.vinyl').css('animation', 'turntable 1s infinite linear')
                }, 1500)

                setTimeout(() => { $('.vinyl').css('transform', 'translate(0,100px)') }, 2000)
            },
            onLeave: () => {
                $('body').css('overflow-x', 'hidden')
            },
            onEnterBack: () => {
                $('body').css('overflow-x', 'scroll')
            },
            onLeaveBack: () => {
                $('.pjtHeader').animate({ 'opacity': 0 }, 1000)
                $('.headerBox').animate({ 'opacity': 0 }, 1000)
            }
        },
        opacity: 0.4,

    })

    tl1.to('.firstsong', {
        scrollTrigger: {
            trigger: '.videocontainer',
            scrub: true,
            start: 'center center',
            end: `+=${pageSize*2}px top`,
            pin: '.firstsong',
            onLeave: () => { $('.firstong').css('opacity', 0) },
            onEnterBack: () => { $('.firstong').css('opacity', 1) }
        },
        opacity: 1,
    })

    tl1.to('.videodescription', {
        scrollTrigger: {
            trigger: '.videocontainer',
            scrub: true,
            start: 'center center',
            end: `+=${pageSize*2}px top`,
            pin: '.videodescription'
        },
        opacity: 1,
    })





    tl1.to('.distribution', {
        scrollTrigger: {
            trigger: '.graphbox',
            scrub: true,
            start: `top+=${pageSize*0.45}px center`,
            end: `top+=${pageSize*6}px top`,
            pin: '.distribution',
            onEnter: () => {
                $('.distribution').animate({ opacity: 1 }, 1000)
                $('.graphtitle').animate({ opacity: 1 }, 1000)
            }
        }
    })

    tl1.to('.graphtitle', {
        scrollTrigger: {
            trigger: '.graphbox',
            scrub: true,
            start: 'center center',
            end: `+=${pageSize*6}px top`,
            pin: '.graphtitle'
        }
    })

    tl1.to('.msg1', {
        scrollTrigger: {
            trigger: '.msg1',
            start: 'center center',
            pin: '.msg1',
            onEnter: () => {
                vocabPlot.plotCircle()
            }
        }
    })

    tl1.to('.msg2', {
        scrollTrigger: {
            trigger: '.msg2',
            scrub: true,
            start: 'center center',
            pin: '.msg2',
            onEnter: () => {
                vocabPlot.leavingQuarter()
            },
            onLeave: () => {
                $('.distribution').animate({ opacity: 0 }, 1000);
                $('.graphtitle').animate({ opacity: 0 }, 1000)
                $('.methodology').animate({ opacity: 1 }, 1000)
            },
            onEnterBack: () => {
                $('.distribution').animate({ opacity: 1 }, 1000)
                $('.graphtitle').animate({ opacity: 1 }, 1000)
                $('.methodology').animate({ opacity: 0 }, 1000)
            }
        }
    })

    tl1.to('.msg3', {
        scrollTrigger: {
            trigger: '.msg3',
            start: 'center center',
            pin: '.msg3',
            onEnter: () => {
                uniquewords.highlightwords();
                wordEqualizer.addEvents();
            }
        }
    })

    tl1.to('.msg4', {
        scrollTrigger: {
            trigger: '.msg4',
            start: 'center center',
            pin: '.msg4',
            onEnter: () => {
                uniquewords.removeDuplicates()
            },
            onLeave: () => {
                $('.methodology').css('position', 'relative');
                $('body').css('overflow-x', 'hidden')
            },
            onEnterBack: () => {
                $('.methodology').css('position', 'fixed');
                $('body').css('overflow-x', 'auto')
            },

        }
    })

    tl1.to('.decadeselection', {
        scrollTrigger: {
            trigger: '.decadeselection',
            start: 'center center+=120',
            pin: '.decadeselection',
            onEnter: () => {
                $('.decadeselection').animate({ opacity: 1 }, 1000)
            },
            onLeave: () => {
                $('.decadeselection').animate({ opacity: 0 }, 1000)
            },
            onEnterBack: () => {
                $('.decadeselection').animate({ opacity: 1 }, 1000)
            },
            onLeaveBack: () => {
                $('.decadeselection').animate({ opacity: 0 }, 1000)
            },
        }
    })

    tl1.to('.equalizer', {
        scrollTrigger: {
            trigger: '.decadeselection',
            start: 'center center+=120',
            pin: '.equalizer',
        }
    })



}