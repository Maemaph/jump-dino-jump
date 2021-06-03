var sprite = document.getElementById('animal');
var block = document.getElementById('block');
var startBtn = document.querySelector('button');
var score = document.getElementById('score');



function jump(){
    if(sprite.classList != 'jump'){
        sprite.classList.add('jump');
    }
    setTimeout(function(){
        sprite.classList.remove('jump');}, 500);
}
document.addEventListener('keyup', jump)

var hit = setInterval(function(){
    var spriteTop = 
    parseInt(window.getComputedStyle(sprite).getPropertyValue('top'));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft < 20 && blockLeft > 0 && spriteTop > 130){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('BLASTED!!!!! ' + score.textContent);
    }
}, 10);

startBtn.addEventListener('click', () => {
    block.classList.add('run');
    score.textContent = 0;
    var count = 0;
    var counter = setInterval(timer, 100);

    function timer(){
        count = count + 1

        if(block.style.display == 'none'){
            clearInterval(counter)
            return;       
        }
        score.textContent = count;
    }



})


/*
startBtn.addEventListener('click', () => {
    function counter(){
        block.classList.add('run');
        while (block.classList == 'run') {
            let count = 0;
            var score = document.getElementById('score');
            count++;
            score.innerHTML = count;
            return
        }  
    };    
})
*/
