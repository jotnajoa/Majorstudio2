import * as vocabPlot from './vocabPlot.js'

export const scrollcontroll = () => {

    let tl1 = gsap.timeline();


    tl1.to('.videoclip', {
        scrollTrigger: {
            trigger: '.videocontainer',
            scrub: true,
            start: 'center center',
            pin: '.videoclip'
        },
        opacity: 0.4,

    })

    tl1.to('.firstsong', {
        scrollTrigger: {
            trigger: '.videocontainer',
            scrub: true,
            start: 'center center',
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
            pin: '.videodescription'
        },
        opacity: 1,
    })

    tl1.to('.distribution', {
        scrollTrigger: {
            trigger: '.graphbox',
            scrub: true,
            start: 'center center',
            end: `+=${pageSize*3}px top`,
            pin: '.distribution',
            onEnter: () => {
                $('.distribution').animate({ opacity: 1 }, 1000, () => {
                    setTimeout(() => { vocabPlot.plotCircle() }, 500)
                })
            },
            onLeave: () => {


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

            }
        }
    })

    tl1.to('.methodology', {
        scrollTrigger: {
            trigger: '.methodology',
            scrub: true,
            start: 'center center',
            pin: '.videodescription'
        },
        opacity: 1,
    })

}