Let isMusicPlaying = false;
        function toggleMusic() {
            let container = document.getElementById("audio-container");
            let btn = document.getElementById("music-toggle-btn");
            if (!isMusicPlaying) {
                container.innerHTML = `<iframe width="0" height="0" src="https://www.youtube.com/embed/328m07x3g_I?autoplay=1&loop=1&playlist=328m07x3g_I" title="Instasamka" allow="autoplay"></iframe>`;
                btn.innerHTML = "⏸ Выключить музыку";
                btn.style.background = "#ff0055";
                isMusicPlaying = true;
            } else {
                container.innerHTML = "";
                btn.innerHTML = "▶ Включить трек";
                btn.style.background = "#00ffcc";
                isMusicPlaying = false;
            }
        }window.addEventListener('beforeunload', function() {
    localStorage.setItem('savedFrames', frames);
    localStorage.setItem('savedScore', score);
});

window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('savedFrames')) {
        frames = parseInt(localStorage.getItem('savedFrames'));
        document.getElementById("frame-count").innerHTML = frames;
    }
    if (localStorage.getItem('savedScore')) {
        score = parseInt(localStorage.getItem('savedScore'));
        document.getElementById("score-count").innerHTML = score;
    }
});