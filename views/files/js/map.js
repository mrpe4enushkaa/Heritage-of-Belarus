gsap.registerPlugin(ScrollTrigger);

let count = 0;
let count_points = 0;

document.addEventListener('DOMContentLoaded', async() => {
    if (!localStorage.getItem("View")) {
        window.manual_dialog.showModal();
        localStorage.setItem("View", '1');
    }

    const data = await getData();

    let to_map_butt = document.getElementById('to_map');

    let paths = document.querySelectorAll('.path');
    let name_bel = document.querySelectorAll('.name_bel');

    paths.forEach((e) => {
        e.addEventListener('click', () => {
            name_bel.forEach((name) => {
                name.style.opacity = '0';
            })
            for (let i = 0; i < paths.length; i++) {
                if (paths[i] !== e) {
                    paths[i].style.display = 'none';
                }
                if (count_points == 0) {
                    count_points++;
                    switch (e.getAttribute('id')) {
                        case 'Brest':
                            e.style.transform = "translate(0px, -630px) scale(2)";
                            e.style.cursor = 'default';

                            let points_br = document.querySelectorAll(".points_Brest>.point");
                            points_br[0].style.transform = "translate(-250px, -60px)";
                            points_br[1].style.transform = "translate(-300px, 60px)";
                            points_br[2].style.transform = "translate(-300px, -15px)";
                            points_br[3].style.transform = "translate(-220px, 10px)";

                            openPoints('.points_Brest');
                            break;

                        case 'Gomel':
                            e.style.transform = "translate(-450px, -500px) scale(1.7)";
                            openPoints('.points_Gomel');

                            let points_gom = document.querySelectorAll(".points_Gomel>.point");
                            points_gom[0].style.transform = "translate(0px, 70px)";
                            points_gom[1].style.transform = "translate(20px, -130px)";
                            points_gom[2].style.transform = "translate(180px, -30px)";
                            points_gom[3].style.transform = "translate(140px, -25px)";

                            e.style.cursor = 'default';
                            break;

                        case 'Grodno':
                            e.style.transform = "translate(50px, -300px) scale(2)";
                            e.style.cursor = 'default';

                            let points_gr = document.querySelectorAll(".points_Grodno>.point");
                            points_gr[0].style.transform = "translate(-230px, -10px)";
                            points_gr[1].style.transform = "translate(100px, 20px)";
                            points_gr[2].style.transform = "translate(-120px, -20px)";
                            points_gr[3].style.transform = "translate(-80px, 20px)";

                            openPoints('.points_Grodno');
                            break;

                        case 'Minsk':
                            e.style.transform = "translate(-150px, -200px) scale(1.6)";
                            openPoints('.points_Minsk');

                            let points_min = document.querySelectorAll(".points_Minsk>.point");
                            points_min[0].style.transform = "translate(-90px, -230px)";
                            points_min[1].style.transform = "translate(20px, -160px)";
                            points_min[2].style.transform = "translate(0px, -50px)";
                            points_min[3].style.transform = "translate(-110px, 50px)";

                            e.style.cursor = 'default';
                            break;

                        case 'Vitsyebsk':
                            e.style.transform = "translate(-400px, 80px) scale(1.8)";
                            openPoints('.points_Vitsyebsk');

                            let points_vit = document.querySelectorAll(".points_Vitsyebsk>.point");
                            points_vit[0].style.transform = "translate(-260px, -120px)";
                            points_vit[1].style.transform = "translate(-50px, -160px)";
                            points_vit[2].style.transform = "translate(-110px, 50px)";
                            points_vit[3].style.transform = "translate(120px, 120px)";

                            e.style.cursor = 'default';
                            break;

                        case 'Mogilev':
                            e.style.transform = "translate(-750px, -350px) scale(2)";
                            openPoints('.points_Mogilev');

                            let points_mog = document.querySelectorAll(".points_Mogilev>.point");
                            points_mog[0].style.transform = "translate(-220px, 60px)";
                            points_mog[1].style.transform = "translate(0px, 5px)";
                            points_mog[2].style.transform = "translate(-50px, -35px)";
                            points_mog[3].style.transform = "translate(-10px, -110px)";

                            e.style.cursor = 'default';
                            break;
                    }
                }

                to_map_butt.style.display = 'block';
                to_map_butt.style.opacity = '1';
            }
        });
    });

    to_map_butt.addEventListener('click', () => {
        to_map_butt.style.display = 'none';
        to_map_butt.style.opacity = '0';

        name_bel.forEach((name) => {
            name.style.opacity = '1';
        })

        for (let i = 0; i < paths.length; i++) {
            paths[i].style.transform = "translate(0px, 0px) scale(1)";
            paths[i].style.display = 'block';
            paths[i].style.cursor = 'pointer';
        }
        closePoints('.div_points');
    });

    let points = document.querySelectorAll('.point');

    for (let i = 0; i < points.length; i++) {
        points[i].addEventListener('click', () => {
            document.querySelector('.card').style.display = 'flex';
            document.getElementById('img_card').setAttribute('src', data[i].img);
            document.getElementById('heading_card').innerHTML = data[i].name;
            document.getElementById('text_card').innerHTML = data[i].information;
            if (count == 0) {
                count++;
                for (let e = 0; e < points.length; e++) {
                    let transform = points[e].style.transform || "";
                    const match = transform.match(/translate\((-?\d+\.?\d*)px,\s*(-?\d+\.?\d*)px\)/);

                    if (match) {
                        const translateX = parseFloat(match[1]);
                        const translateY = parseFloat(match[2]);
                        points[e].style.transform = `translate(${translateX - 420}px, ${translateY}px)`;
                    }
                }
            }
        })
    }
    AnimationHeader();
    AnimationFooter();
    AnimationButtons();
    AnimationDialog();
    // AnimationPoints();
    AnimationBlock();
});

async function getData() {
    const response = await fetch('/files/json/data.json');
    return await response.json();
};

function openPoints(div) {
    let points_div = document.querySelector(div);
    points_div.style.display = 'block';
}

function closePoints(div) {
    let points_div = document.querySelectorAll(div);
    points_div.forEach(element => {
        element.style.display = 'none';
    });
    if (count == 1) {
        count--;
        count_touch = 0;
        for (let e = 0; e < points.length; e++) {
            let transform = points[e].style.transform;
            const match = transform.match(/translate\((-?\d+\.?\d*)px,\s*(-?\d+\.?\d*)px\)/);

            if (match) {
                const translateX = parseFloat(match[1]);
                const translateY = parseFloat(match[2]);
                points[e].style.transform = `translate(${translateX + 420}px, ${translateY}px)`;
            }
        }
    }
    count_points--;
    document.querySelector('.card').style.display = 'none';
}

function AnimationDialog() {
    let button_info = document.querySelector('.info');

    button_info.addEventListener('click', () => {
        gsap.fromTo('#manual_dialog', {
            onStart: () => {},
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.6,
            onStart: () => {
                window.manual_dialog.showModal();
            }
        });
    });

    let button_exit = document.querySelector('.exit_dialog');

    button_exit.addEventListener('click', () => {
        gsap.to('#manual_dialog', {
            opacity: 0,
            duration: 0.6,
            onComplete: () => {
                window.manual_dialog.close();
            }
        });
    });
}

function AnimationPoints() {
    let points = document.querySelectorAll('.point');

    points.forEach((point) => {
        point.addEventListener('mouseover', () => {
            gsap.to(point, {
                height: 70,
                width: 70,
                duration: .3,
                rotate: 10
            })
        });
        point.addEventListener('mouseout', () => {
            gsap.to(point, {
                height: 60,
                width: 60,
                duration: .3,
                rotate: 0
            })
        });
    });
}

function AnimationBlock() {
    gsap.fromTo('#anim_block', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: .8
    });
}