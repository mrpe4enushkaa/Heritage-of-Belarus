gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', async() => {
    const data = await getData();

    createCards(data);

    AnimationHeader();
    AnimationButtons();

    AnimationFirstSect();
    AnimationSecondSect();
    AnimationThirdSect();
    AnimationFourthSect();
    AnimationFifthSect();

    AnimationFooter();

    PageLocations();
});

async function getData() {
    const response = await fetch('/files/json/index_data.json');
    return await response.json();
};

function createCards(data) {
    let div_cards = document.getElementById('cards');

    for (let i = 0; i < data.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');

        let box_img = document.createElement('div');
        box_img.classList.add('parent_box_img');
        let img = document.createElement('img');
        img.setAttribute('src', data[i].img);
        img.classList.add('parent_box_img--img');

        box_img.appendChild(img);

        let spanH = document.createElement('span');
        spanH.innerHTML = data[i].name;
        spanH.classList.add("alegreya-sans-sc-medium", "heading");

        let spanText = document.createElement('span');
        spanText.innerHTML = data[i].info;
        spanText.classList.add('text', 'roboto-regular');

        let button = document.createElement('button');
        button.innerHTML = 'Подробнее';
        button.classList.add('red_button');
        button.classList.add('butt_locations');
        button.setAttribute('data-info', 'location_' + i);

        card.appendChild(box_img);
        card.appendChild(spanH);
        card.appendChild(spanText);
        card.appendChild(button);

        div_cards.appendChild(card);
    };
};

function PageLocations() {
    let butt_locations = document.querySelectorAll('.butt_locations');

    butt_locations.forEach((e) => {
        e.addEventListener('click', () => {
            localStorage.setItem('Card', e.getAttribute('data-info'));
            window.location = "/locations";
        })
    });
}

function AnimationFirstSect() {
    let tl = gsap.timeline();
    tl.add('start');

    tl.from('.head_anim', {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.3
        }, 'start')
        .from('.left_img', {
            x: -728,
            rotate: 0,
            duration: .8,
            stagger: .2,
        }, 'start')
        .from('.right_img', {
            x: 723,
            rotate: 0,
            duration: .8,
            stagger: .2,
            onStart: () => {
                document.body.style.overflowX = 'hidden';
            },
            onComplete: () => {
                document.body.style.overflowX = 'auto';
            }
        }, 'start')

    ScrollTrigger.create({
        trigger: '.section-welcome',
        start: 'top 80%',
        end: "bottom 80%",
        animation: tl
    });
}

function AnimationSecondSect() {
    let photos = document.querySelectorAll('.second, .third, .fourth');
    photos.forEach((e) => {
        e.style.opacity = '0';
    });

    const totalElements = document.querySelectorAll('.heading, .section_places--div--numbers').length;
    const endValue = totalElements * 500;
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section_places',
            start: 'top top',
            end: `+=${endValue}`,
            pin: true,
            scrub: 1,
        }
    });

    tl.add('start');

    tl.to('.header', {
            y: -100,
            duration: .5
        }, 'start')
        .from('.section_places--div>.heading', {
            y: 30,
            opacity: 0,
            stagger: 0.5,
            duration: 1.5,
        }, 'start')
        .from('.section_places--div--numbers', {
            y: 30,
            opacity: 0,
            stagger: 1.5,
            duration: 1.5,
            delay: 1.5
        }, 'start')
        .fromTo(".first", {
            width: 0,
            height: 618,
            opacity: 0
        }, {
            width: 618,
            opacity: 1,
            duration: 1.5,
            delay: 1.5
        }, "start")
        .fromTo('.first_img', {
            width: 0,
            height: 640,
        }, {
            width: 640,
            duration: 1.5,
            delay: 1.5
        }, 'start')
        .to('.first', {
            width: 290,
            duration: 1.6,
            delay: 3,
        }, "start")
        .fromTo('.second', {
            width: 0,
            height: 618,
            marginLeft: "300px"
        }, {
            delay: 3,
            duration: 1.6,
            opacity: 1,
            width: 290,
            marginLeft: "0px"
        }, 'start')
        .fromTo('.second_img', {
            width: 0,
            height: 630,
        }, {
            width: 630,
            delay: 3,
            duration: 1.6
        }, 'start')
        .to('.first', {
            height: 290,
            delay: 4.5,
            duration: 1.6
        }, 'start')
        .to('.first_img', {
            height: 330,
            delay: 4.5,
            duration: 1.6
        }, 'start')
        .fromTo('.third', {
            height: 0,
            marginTop: "300px"
        }, {
            delay: 4.5,
            duration: 1.6,
            opacity: 1,
            height: 290,
            marginTop: "0"
        }, 'start')
        .to('.second', {
            height: 290,
            delay: 5.9,
            duration: 1.6
        }, 'start')
        .to('.second_img', {
            height: 330,
            delay: 5.9,
            duration: 1.6
        }, 'start')
        .fromTo('.fourth', {
            height: 0,
            marginTop: "300px"
        }, {
            delay: 5.9,
            duration: 1.6,
            opacity: 1,
            height: 290,
            marginTop: "0"
        }, 'start')
        .to('.header', {
            y: 0,
            duration: .5,
            delay: 7.4
        }, 'start')
}

function AnimationThirdSect() {
    let tl = gsap.timeline();

    tl.add('start');

    tl.from('.card, .section_popular>.heading', {
        y: 20,
        opacity: 0,
        stagger: .4,
        duration: .6
    }, 'start');

    ScrollTrigger.create({
        trigger: '.section_popular',
        start: 'top 80%',
        end: "bottom 80%",
        animation: tl,
    });
}

function AnimationFourthSect() {
    let tl = gsap.timeline();

    tl.add('start');

    tl.from('.section_belarus--div>.heading, .section_belarus--div>.text, .section_belarus--div>.parent_box_img', {
        y: 20,
        opacity: 0,
        stagger: .4,
        duration: .6
    }, 'start');

    ScrollTrigger.create({
        trigger: '.section_belarus',
        start: 'top 80%',
        end: "bottom 80%",
        animation: tl,
    });
}

function AnimationFifthSect() {
    let tl = gsap.timeline();

    tl.add('start');

    tl.from('.section_project', {
        y: 20,
        opacity: 0,
        stagger: .4,
        duration: .6
    }, 'start');

    ScrollTrigger.create({
        trigger: '.section_project',
        start: 'top 80%',
        end: "bottom 80%",
        animation: tl,
    });
}