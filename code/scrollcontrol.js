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
            pin: '.videodescription',
            start: 'center top'
        },
        opacity: 1,
    })

    tl1.to('.distribution', {
        scrollTrigger: {
            trigger: '.graphbox',
            scrub: true,
            start: 'center center',
            end: 'center top',
            markers: true,
            pin: '.distribution',
            onEnter: () => {
                // $('.distribution').css('position', 'fixed')
                $('.distribution').animate({ left: '0px', top: '50px' }, 2000)

            },
            onLeave: () => {
                $('.distribution').css('position', 'fixed')
            }
        },
        opacity: 1
    })



}