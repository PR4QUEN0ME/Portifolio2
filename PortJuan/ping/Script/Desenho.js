var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

var x = Math.floor(Math.random()*600);
var y = Math.floor(Math.random()*400);
var parar;
// Audios.
var batida = new Audio("audio/Colisão-com-o-jogador.ogg");
var musica = new Audio("audio/musica-do-jogo.ogg");
var vencedor = new Audio ("audio/Venceu.ogg");
var saiu = new Audio("audio/Saiu.ogg");

//Variaveis da Bola.
var x = 300;
var y = 200;
var sentidoX = 6;
var sentidoY = 0.2;
var raio = 10;

// Players
   var OneSetX = 50;
   var One = 100;
   var OneLar = 20;
   var OneAl= 100;

   var TwoSetX = 550;
   var Two = 100;
   var TwoLar = 20;
   var TwoAl = 100;

   //Pontuações
   var PointOne=0;
   var PointTwo=0;

    function Jog1(){
    pincel.fillStyle = 'black';
    pincel.fillRect(OneSetX,One,OneLar,OneAl);
    }
    function Jog2(){
        pincel.fillStyle = "black";
        pincel.fillRect(TwoSetX, Two, TwoLar, TwoAl);
    }

    function boll() {
    musica.play();
    pincel.clearRect(0, 0, 600, 400);
    //Minha Bolinha.
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, Math.PI * 2);
    pincel.fillStyle = 'red';
    pincel.stroke();
    pincel.fill();
 
    //Movimentação da Bolinha
    x += sentidoX;
    y += sentidoY;

        if (x + raio > 600 ) {
           saiu.play();
            sentidoX = -sentidoX;
            PointOne++;
            x = 300;
            y = 200;
            
            OneSetX = 50;
            One = 100;
            
            TwoSetX = 550;
            Two = 100;
    }

    if (x - raio <= 0) {
        sentidoY = -sentidoY;
        saiu.play();
        PointTwo++;

        x = 300;
        y = 200;
        
        OneSetX = 50;
        One = 100;
        
        TwoSetX = 550;
        Two = 100;
    }
        //Colisão
    if (y + raio > 398 || y - raio <= 2){
        batida.play();
        sentidoY= -sentidoY;
        }
         
        if (x <= OneSetX + OneLar  && y <= One + OneAl){
        batida.play();
        sentidoX = -sentidoX;
        }
        
        if (x >= TwoSetX + TwoLar && y <= Two + TwoAl){
        batida.play();
        sentidoX = -sentidoX;
        }
}
function Pontuacoes () {
pincel.font='50px arial';
pincel.fillStyle = 'black';
pincel.fillText(PointOne,200,60);

pincel.font='50px arial';
pincel.fillStyle = 'black';
pincel.fillText(PointTwo, 400, 60);
}
function Pare(){
    clearInterval (main);
    }
    
function FIMUM(){
    if (PointOne == 4){
    vencedor.play();
    pincel.clearRect(0,0,600,400);   
    pincel.font='30px arial';
    pincel.fillStyle = 'black';
    pincel.fillText('JOGADOR UM VENCEU',135,160);
    clearInterval(parar);
    musica.pause();
    
    pincel.font='20px arial';
    pincel.fillStyle = 'black';
    pincel.fillText('APERTE ENTER PARA REINICIAR O JOGO',120,200); 
    } 
    }
    function FIMDOIS(){
    if (PointTwo == 4){
    vencedor.play(); 
    pincel.clearRect(0,0, 600, 400); 
    pincel.font='30px arial';
    pincel.fillStyle = 'black';
    pincel.fillText('JOGADOR DOIS VENCEU',135,160); 
    clearInterval(parar);
    musica.pause();
    
    //Restart
    pincel.font='20px arial';
    pincel.fillStyle = 'black';
    pincel.fillText('APERTE ENTER PARA REINICIAR O JOGO',120,200); 
    }
    }

function main(){
    boll();
    Jog1();
    Jog2();
    Pontuacoes();
    FIMUM();
    FIMDOIS();
}
function intervalo(){
parar = setInterval(main, 20);
}
intervalo();

function restart(){
location.reload();
}
document.addEventListener('keydown',(event)=>{
    if(event.keyCode==83){
        One+=10;
    }
else if(event.keyCode==87){
    One-=10;
} 

})

document.addEventListener('keydown',(event)=>{
    if(event.keyCode==40){
        Two+=10;
    }
else if(event.keyCode==38){
    Two-=10;
}

})

if (FIMUM||FIMDOIS){
    document.addEventListener('keydown', (event)=>{
        if(event.keyCode==13){
            restart();
        }
    })
    }