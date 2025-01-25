gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    AnimationHeader();
    AnimationBlock('#section_white-bg', 5, 5, 0);
    AnimationBlock('#num_anim', 80, 80, .3);
    AnimationBlock('#third_block', 80, 80, .3);
    AnimationBlock('#anim_fourth', 80, 80, .3);
    AnimationFooter();
});

function AnimationBlock(idBlock, start, end, delay) {
    let tl = gsap.timeline();

    tl.add('start');

    tl.fromTo(idBlock, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        duration: .6,
        delay: `${delay}`,
        stagger: 0.3
    }, 'start');

    ScrollTrigger.create({
        trigger: idBlock,
        start: `top ${start}%`,
        end: `bottom ${end}%`,
        animation: tl
    });
}