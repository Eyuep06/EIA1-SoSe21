namespace aufgabe8 {


    var playBtn: HTMLElement = document.querySelector(".playButton");
    var stopBtn: HTMLElement = document.querySelector(".stopButton");
    var indexZahler: number = 0;
    var samples: HTMLAudioElement[] = [new Audio("assets/snare.mp3"), new Audio("assets/laugh1.mp3"), new Audio("assets/laugh2.mp3"), new Audio("assets/kick.mp3"), new Audio("assets/hihat.mp3"), new Audio("assets/G.mp3"), new Audio("assets/F.mp3"), new Audio("assets/C.mp3"), new Audio("assets/A.mp3")];
    var playbuttonSamples: HTMLAudioElement[] = [new Audio("assets/kick.mp3"), new Audio("assets/snare.mp3"), new Audio("assets/hihat.mp3")];


    document.querySelector(".button1").addEventListener("click", function (): void { playSample(samples[0]); });
    document.querySelector(".button2").addEventListener("click", function (): void { playSample(samples[1]); });
    document.querySelector(".button3").addEventListener("click", function (): void { playSample(samples[2]); });
    document.querySelector(".button4").addEventListener("click", function (): void { playSample(samples[3]); });
    document.querySelector(".button5").addEventListener("click", function (): void { playSample(samples[4]); });
    document.querySelector(".button6").addEventListener("click", function (): void { playSample(samples[5]); });
    document.querySelector(".button7").addEventListener("click", function (): void { playSample(samples[6]); });
    document.querySelector(".button8").addEventListener("click", function (): void { playSample(samples[7]); });
    document.querySelector(".button9").addEventListener("click", function (): void { playSample(samples[8]); });
    document.querySelector(".playButton").addEventListener("click", function (): void {
        setInterval(function (): void {
            playbuttonSamples[indexZahler].play();
            indexZahler = indexZahler + 1;
            
            if (indexZahler == 3) {
                indexZahler = 0;

            
                
            }

        }, 1000);
        
    });

    

    function playSample(sound: HTMLAudioElement): void {

        sound.play();
    }




    playBtn.addEventListener("click", function(): void {
        changeClasses(this, stopBtn);
        
    }  );

    
    stopBtn.addEventListener("click", function(): void {
        changeClasses(this, playBtn);
    }  );

    
    function changeClasses (firsHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
        firsHTMLElement.classList.add("isHidden");
        secondHTMLElement.classList.remove("isHidden");


    }





}









