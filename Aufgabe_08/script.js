var aufgabe8;
(function (aufgabe8) {
    var myInterval;
    var deleteBtn = document.querySelector(".deleteButton");
    var playBtn = document.querySelector(".playButton");
    var stopBtn = document.querySelector(".stopButton");
    var rmxBtn = document.querySelector(".remixButton");
    var indexZahler = 0;
    var samples = [new Audio("assets/snare.mp3"), new Audio("assets/laugh1.mp3"), new Audio("assets/laugh2.mp3"), new Audio("assets/kick.mp3"), new Audio("assets/hihat.mp3"), new Audio("assets/G.mp3"), new Audio("assets/F.mp3"), new Audio("assets/C.mp3"), new Audio("assets/A.mp3")];
    var playbuttonSamples = [new Audio("assets/kick.mp3"), new Audio("assets/snare.mp3"), new Audio("assets/hihat.mp3")];
    document.querySelector(".button1").addEventListener("click", function () { playSample(samples[0]); });
    document.querySelector(".button2").addEventListener("click", function () { playSample(samples[1]); });
    document.querySelector(".button3").addEventListener("click", function () { playSample(samples[2]); });
    document.querySelector(".button4").addEventListener("click", function () { playSample(samples[3]); });
    document.querySelector(".button5").addEventListener("click", function () { playSample(samples[4]); });
    document.querySelector(".button6").addEventListener("click", function () { playSample(samples[5]); });
    document.querySelector(".button7").addEventListener("click", function () { playSample(samples[6]); });
    document.querySelector(".button8").addEventListener("click", function () { playSample(samples[7]); });
    document.querySelector(".button9").addEventListener("click", function () { playSample(samples[8]); });
    document.querySelector(".playButton").addEventListener("click", function () {
        {
            myInterval = setInterval(function () {
                playbuttonSamples[indexZahler].play();
                indexZahler = indexZahler + 1;
                if (indexZahler == 3) {
                    indexZahler = 0;
                }
            }, 1000);
        }
    });
    function playSample(sound) {
        sound.play();
    }
    deleteBtn.addEventListener("click", function () {
        playbuttonSamples.length = 0;
        if (playbuttonSamples.length == 0) {
            playBtn.classList.remove("isHidden");
            stopBtn.classList.add("isHidden");
        }
    });
    playBtn.addEventListener("click", function () {
        changeClasses(this, stopBtn);
    });
    stopBtn.addEventListener("click", function () {
        changeClasses(this, playBtn);
        clearInterval(myInterval);
        indexZahler = 0;
    });
    function changeClasses(firsHTMLElement, secondHTMLElement) {
        firsHTMLElement.classList.add("isHidden");
        secondHTMLElement.classList.remove("isHidden");
    }
    rmxBtn.addEventListener("click", function () {
        playbuttonSamples.length = 0;
        console.log(playbuttonSamples);
        while (playbuttonSamples.length < 3) {
            var r = samples[Math.floor(Math.random() * samples.length)];
            if (playbuttonSamples.indexOf(r) === -1)
                playbuttonSamples.push(r);
            console.log(playbuttonSamples[indexZahler]);
        }
    });
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=script.js.map