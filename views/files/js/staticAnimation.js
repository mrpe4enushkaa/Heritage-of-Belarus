function AnimationHeader() {
    ScrollTrigger.create({
        trigger: '.header',
        start: 'top top',
        end: "bottom 5%",
        onEnterBack: () => {
            gsap.to('.header', {
                backgroundColor: 'transparent',
                duration: .7
            });
            gsap.to('.header span', {
                color: '#6B8E6E',
                duration: .7
            });
        },
        onLeave: () => {
            gsap.to('.header', {
                backgroundColor: '#6B8E6E',
                duration: .7
            });
            gsap.to('.header span', {
                color: '#fff',
                duration: .7
            });
        }
    });
}

function AnimationFooter() {
    let tl = gsap.timeline();

    tl.add('start');

    tl.from('.foot_left>.heading', {
            y: 20,
            opacity: 0,
            stagger: .4,
            duration: .6
        }, 'start')
        .from('#img_foot', {
            stagger: .3,
            duration: .6,
            opacity: 0,
            x: -20,
            delay: .3
        }, 'start')
        .from('#text_foot', {
            stagger: .4,
            duration: .6,
            opacity: 0,
            x: 20,
        }, 'start');

    ScrollTrigger.create({
        trigger: '.footer',
        start: 'top 80%',
        end: "bottom 80%",
        animation: tl,
    });
}

function AnimationButtons() {
    let buttons = document.querySelectorAll('.red_button');

    buttons.forEach((e) => {
        e.addEventListener("mouseover", () => {
            gsap.to(e, {
                y: -7,
                duration: 0.4,
                boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.55)"
            });
        });
        e.addEventListener("mouseout", () => {
            gsap.to(e, {
                y: 0,
                duration: 0.4,
                boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.25)"
            });
        });
    });
}