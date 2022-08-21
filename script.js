const digitalElement = document.querySelector('.digital');
const secondsElement = document.querySelector('.p_s');
const minutesElement = document.querySelector('.p_m');
const hoursElement = document.querySelector('.p_h');


//Função para pegar as horas, minutos e segundos
function updateTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //Relógio Digital
    digitalElement.innerHTML = `${zeroFix(hours)}:${zeroFix(minutes)}:${zeroFix(seconds)}`;

    //Relógio Analógico
    //Ponteiro de Segundos
    const secondsPoint = (seconds * 6) -90 ;
    secondsElement.style.transform = `rotate(${secondsPoint}deg)`;

    //Ponteiro de Minutos
    const minutesPoint = (minutes * 6) - 90;
    minutesElement.style.transform = `rotate(${minutesPoint}deg)`;

    //Ponteiro de Horas
    const hoursPoint = (hours * 30) - 90;
    hoursElement.style.transform = `rotate(${hoursPoint}deg)`;

}

//Função para colocar zero a esquerda
function zeroFix(time){
    return time < 10 ? `0${time}` : time; 
}

//Chamada do relógio
updateTime();

//Função para atualizar o relógio de 1 em 1 segundo
setInterval(updateTime, 1000);