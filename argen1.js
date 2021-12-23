let startTime;
let duration;
let isShown;

window.onload = function() {
    startTime = Date.now();
    setDuratoin();
    clearImg();

    tmp = 0;
    setInterval("timerFunc()", 10);
}

function timerFunc() {
    const t = Date.now() - startTime;

    if (t > duration) {
        if (isShown) {
            clearImg();
        }
        else {
            changeImg();
        }

        setDuratoin();
        startTime = Date.now();
    }
}

function setDuratoin() {
    const t_min = 1200;
    const t_max = 5000;

    const x = Math.random() ** 2;
    duration = x * (t_max - t_min) + t_min;
}

function changeImg() {
    const n_min = 5;
    const n_max = 9;
    const n = Math.floor(Math.random() * (n_max - n_min + 1) + n_min);

    const img = document.getElementById("viewer");
    img.setAttribute("src", `id${n}.png`);

    const label = document.getElementById("label");
    label.innerText = `Target ${n - n_min + 1}`;

    isShown = true;
}

function clearImg() {
    const img = document.getElementById("viewer");
    img.setAttribute("src", "none.png");

    const label = document.getElementById("label");
    label.innerText = "";

    isShown = false;
}
