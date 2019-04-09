

function kubekKlik(evt){
    var level = Number(this.getAttribute('level'));
    level += 24;
    if (level <= 96){
        this.style.backgroundPosition= "0 " + level +"%";
        this.setAttribute('level', level);
    }else{
        this.style.cursor ="not-allowed";

    }
    
}


let cups = document.querySelectorAll('.cup');
cups.forEach(cup => {
    cup.addEventListener('click', kubekKlik)
});

var body = document.querySelector('BODY');

body.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log('Evet Type:'+ e.type);

document.body.style.backgroundColor ="rgb("+ e.offsetX+","+ e.offsetY+",40)";

}



