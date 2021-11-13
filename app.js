const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector('.breath-count-input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const breathsText = document.querySelector('.breaths-text');
let breathsLeft = 3;

//watch for breath count & leads to change for breaths remaining

numberOfBreaths.addEventListener('change',() =>{
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});

//daniel,watch your semi-colons

// circle span

const growCircle = () =>{
    //
    circleProgress.classList.add('circle-grow');
    setTimeout(() => {
        circleProgress.classList.remove('circle-grow');
    }, 8000); //holding breath for 4 seconds
        
    };

    //breathein|| breatheout

    const breathTextUpdate = () =>{
        breathsLeft --; //subtracts 1
        breathsText.innerText = breathsLeft;
        instructions.innerText = "Inhale";
        setTimeout(() => {
            instructions.innerText="& Hold";
            setTimeout(() => {
                instructions.innerText="Exhale"
            },4000);
        }, 4000);

    };

    const breathingApp =()=>{
        const breathingAnimate = setInterval(() => {
            if  (breathsLeft === 0){
                clearInterval(breathingAnimate);
                instructions.innerText="Please press the Let's Breathe button again for another session."
                start.classList.remove('button-inactive');
                breathsLeft === numberOfBreaths.value;
                breathsText.innerText = breathsLeft;
                return;
            }
                growCircle();
                breathTextUpdate();
            
        }, 12000);
    };

    //Start Button -- the circle with expand when when the event listener  for click is toggled

    start.addEventListener("click",()  => {
        start.classList.add('button-inactive');
        instructions.innerText ="Just Relax";
        setTimeout(() => {
            instructions.innerText ="Are you ready to begin?";
            setTimeout(() => {
                breathingApp();
        growCircle();
        breathTextUpdate();
            }, 2000);
        }, 2000);
    });


