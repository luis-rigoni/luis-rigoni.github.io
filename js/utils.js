function launchRocket() {
    const rocket = document.getElementById('rocket');

    rocket.classList.remove('animate');
    void rocket.offsetWidth;
    rocket.classList.add('animate');
}

launchRocket();
setInterval(launchRocket, 120000);
