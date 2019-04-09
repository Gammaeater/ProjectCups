function kubekKlik(evt){
    let poziom = Number(this.getAttribute('poziom'));
    poziom += 24;
    if (poziom <= 96){
        this.style.backgroundPosition = "0 " + poziom +"%";
        this.setAttribute('poziom', poziom);
    }else{
        this.style.cursor ="not-allowed";

    }
    
}


let kubki = document.querySelectorAll('.kubek');
kubki.forEach(kubek => {
    kubek.addEventListener('click', kubekKlik)
});

var body = document.querySelector('BODY');

body.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log('Evet Type:'+ e.type);

document.body.style.backgroundColor ="rgb("+ e.offsetX+","+ e.offsetY+",40)";

}