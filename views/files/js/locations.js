document.addEventListener('DOMContentLoaded', async() => {
    const data = await getData();

    AnimationFooter();
    createCards(data);

    let button_open = document.querySelectorAll('#button_open');

    let img_dialog = document.getElementById("img");

    let heading_dialog = document.querySelector("#heading");
    let text_dialog = document.querySelector("#text");

    for (let i = 0; i < button_open.length; i++) {
        button_open[i].addEventListener('click', () => {
            img_dialog.setAttribute('src', data[i].img);
            heading_dialog.innerHTML = data[i].name;
            text_dialog.innerHTML = data[i].information;
        });
    };

    if (localStorage.getItem("Card")) {
        let img_dialog = document.getElementById("img");

        let heading_dialog = document.querySelector("#heading");
        let text_dialog = document.querySelector("#text");

        switch (localStorage.getItem("Card")) {
            case 'location_3':
                img_dialog.setAttribute('src', data[0].img);
                heading_dialog.innerHTML = data[0].name;
                text_dialog.innerHTML = data[0].information;
                break;
            case 'location_2':
                img_dialog.setAttribute('src', data[1].img);
                heading_dialog.innerHTML = data[1].name;
                text_dialog.innerHTML = data[1].information;
                break;
            case 'location_1':
                img_dialog.setAttribute('src', data[9].img);
                heading_dialog.innerHTML = data[9].name;
                text_dialog.innerHTML = data[9].information;
                break;
            case 'location_0':
                img_dialog.setAttribute('src', data[15].img);
                heading_dialog.innerHTML = data[15].name;
                text_dialog.innerHTML = data[15].information;
                break;
        }

        localStorage.removeItem('Card');
    }
    AnimationButtons();
    AnimationHeader();
    AnmationCards();
    AnimationDialog();
});

async function getData() {
    const response = await fetch('/files/json/data.json');
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

        let button = document.createElement('button');
        button.innerHTML = 'Подробнее';
        button.classList.add('red_button');
        button.setAttribute('id', 'button_open');

        card.appendChild(box_img);
        card.appendChild(spanH);
        card.appendChild(button);

        div_cards.appendChild(card);
    };
};


function AnmationCards() {
    let tl = gsap.timeline();

    tl.add('start');

    tl.fromTo(' #pagaName, .card', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: .4,
        stagger: .2
    }, 'start');

    ScrollTrigger.create({
        trigger: '.section_cards',
        start: 'top 1%',
        end: '10% 5%',
        animation: tl,
    });
}

function AnimationDialog() {
    let button_open = document.querySelectorAll('#button_open');
    button_open.forEach((e) => {
        e.addEventListener('click', () => {
            console.log('sdfds')
            gsap.fromTo('#dialog_information', {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.6,
                onStart: () => {
                    window.dialog_information.showModal();
                }
            });
        })
    })

    let button_exit = document.getElementById('exit_dialog');

    button_exit.addEventListener('click', () => {
        console.log('fsdf')
        gsap.to('#dialog_information', {
            opacity: 0,
            duration: 0.6,
            onComplete: () => {
                window.dialog_information.close();
            }
        });
    });
}