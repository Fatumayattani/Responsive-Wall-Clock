const $ = (selector) => {
    return document.querySelector(selector);
};

const $second = $('.second-pointer');
const $min = $('.min-pointer');
const $hour = $('.hour-pointer');

function update() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    $second.style.transform = `rotate(${secondsDeg}deg)`;

    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + ((seconds/60) *6) + 90;
    $min.style.transform = `rotate(${minsDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour /12) * 360) + ((mins / 60) * 30) + 90;
    $hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(update, 900);
update();