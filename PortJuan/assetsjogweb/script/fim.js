var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

//Variáveis
var dialogoum2 = new objetoGeo(0, 0, 1000, 500, "imagens/11.jpg");
var dialogodois2 = new objetoGeo(0, 0, 1000, 500, "imagens/12.jpg");
var dialogotres2 = new objetoGeo(0, 0, 1000, 500, "imagens/13.jpg");
var dialogoquatro2 = new objetoGeo(0, 0, 1000, 500, "imagens/14.jpg");
var dialogocinco2 = new objetoGeo(0, 0, 1000, 500, "imagens/15.jpg");
var dialogoseis2 = new objetoGeo(0, 0, 1000, 500, "imagens/16.jpg");
var dialogosete2 = new objetoGeo(0, 0, 1000, 500, "imagens/17.jpg");
var dialogooito2 = new objetoGeo(0, 0, 1000, 500, "imagens/18.jpg");
var dialogonove2 = new objetoGeo(0, 0, 1000, 500, "imagens/19.jpg");
var dialogodez2 = new objetoGeo(0, 0, 1000, 500, "imagens/20.jpg");
var telaextra = new objetoGeo(0, 0, 1000, 500, "imagens/21.jpg");
var telagameover2 = new objetoGeo(0, 0, 1000, 500, "imagens/gameover.png");
var beethoven2 = new Audio ("audio/BackGroundDialogos.ogg");
var mais2 = 1;
var Interval6;
var Interval7;
var Interval8;

function inicio2(){
beethoven2.play();

    if (mais2 == 1){
    dialogoum2.imagem();
    }
    if (mais2 == 2){
    dialogodois2.imagem();
    }
    if (mais2 == 3){
    dialogotres2.imagem();
    }
    if (mais2 == 4){
        dialogoquatro2.imagem();
    }
    if (mais2 == 5){
        dialogocinco2.imagem();
    }
    if (mais2 == 6){
        dialogoseis2.imagem();
    }
    if (mais2 == 7){
        dialogosete2.imagem();
    }
    if (mais2 == 8){
        dialogooito2.imagem();
    }
    if (mais2 == 9){
        dialogonove2.imagem();
    }
    if (mais2 == 10){
        dialogodez2.imagem();
    }
    if (mais2 == 11){
        clearInterval(Interval5);
        Interval6 = setInterval(main,10);
        Interval7 = setInterval(extratempo2,1000);
    }
}

var Interval5 = setInterval(inicio2,1);

document.addEventListener('keydown', (event) =>{
    if(event.key === 'q'){
      mais2+=1;
      musicadialogos.play();
    }
    }
        )

//Parte2
var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

var tiro = new Tirando(400,400,10, 10, 0);
var principal =new PlayerJ(100,400,40,40,"imagens/one3.jpg");
var telafinal = new objetoGeo(0, 0, 1000, 500, "imagens/21.jpg");

var backgrounddois = new objetoGeo(0, 0, 1000, 500, "imagens/other.jpg");
var inimigos=new Inimigo(100,10,50,50,"imagens/InimigoJuan.png");
var ini1=new Inimigo(250,10,50, 50,"imagens/InimigoJuan.png");
var ini2=new Inimigo(400,10,50, 50, "imagens/InimigoJuan.png");
var ini3=new Inimigo(550,10,50,50, "imagens/InimigoJuan.png");
var ini3=new Inimigo(550,10,50, 50, "imagens/InimigoJuan.png");
var ini4=new Inimigo(700,10,50, 50, "imagens/InimigoJuan.png");
var ini5=new Inimigo(850,10,50, 50, "imagens/InimigoJuan.png");
var pont2 = new objetoGeo(10, 45, 20, 20, "imagens/PontoJuan.jpg");
var temp2 = new objetoGeo(10, 15, 20, 20, "imagens/TempoJuan.jpg");

var tira = new Audio ("audio/tirandonave.ogg");
var background2 = new Audio("audio/MusicaFundo.ogg");
var endmusic = new Audio("audio/Far.ogg");

var tempo2=0;
var atirando=false;
var movimeacaoInimigo=true;
var pontos=0;
var morte=false;

function temporizador2(cronograma2){
    if(cronograma2==true){
        tempo2++;
    }
}
function extratempo2(){
    temporizador2(true);
}

function win(){
    clearInterval(Interval8);
    beethoven2.pause();
    background2.pause();
    telafinal.imagem();

    endmusic.play();
}
function bala(){
    pincel.beginPath();
    pincel.fillStyle="Red";
    pincel.fillRect(tiro.x,tiro.y,10,10);
}
function draw(){  
    pincel.clearRect(0,0,1000,500);
    backgrounddois.imagem();
    background2.play();
    pincel.fillStyle="White";
    pincel.font="18px papyrus";
    temp2.imagem();
    pont2.imagem();
    pincel.fillText("Tempo: "+tempo2 + "/20",40,30);
    pincel.fillText("Pontos: "+pontos + "/5",40,60);
    principal.imagem();
    inimigos.imagem();
    tiro.desenho();
    ini1.imagem();
    ini2.imagem();
    ini3.imagem();
    ini4.imagem();


   // bala();
}

function Update(){
    if(movimeacaoInimigo==true){
        inimigos.movimenta();
        }
 if(tiro.y<=0){
    atirando=false;
    tiro.atirando(false,principal.y);
 }
    if(atirando==true){
        tira.play();
        tiro.atirando(true,principal.y);
    }
    else{
    tiro.x=principal.x+15;
    tiro.y=principal.y+1;
    }
    tiro.colisaoI(ini1);
    tiro.colisaoI(ini2);
    tiro.colisaoI(ini3);
    tiro.colisaoI(ini4);
    tiro.colisaoI(inimigos);
  
    ini1.movimenta(true);
    ini2.movimenta(true);
    ini3.movimenta(true);
    ini4.movimenta(true);
    inimigos.movimenta(true);

    principal.canvascolisao()
if(
    principal.colisaoJ(ini1)==true||
    principal.colisaoJ(ini2)==true||
    principal.colisaoJ(ini3)==true||
    principal.colisaoJ(ini4)==true||
    principal.colisaoJ(inimigos)==true
){
    morte=true;
}
    pontos=tiro.pontuacao; 
}
function main(){
    if(morte==false && tempo2< 20){
        Update();
        draw();}
        else{
        endgame2();
        
    }
    if(pontos>=5){
        win();
        }
}
document.addEventListener("keydown",function(event){
    if(event.key==="a"){
        principal.x-=8;
    }
    if(event.key==="d"){
        principal.x+=8;
    }
    if(event.key==="w"){
        principal.y-=8;
    }
    if(event.key==="s"){
        principal.y+=8;
    }
    if(event.key==="j"){
        atirando=true;
    }
})

// GAME OVER
function final2(){
    clearInterval(Interval6);
    clearInterval(Interval7);
    telagameover2.imagem();
    beethoven2.pause();
    background2.pause();
}

function endgame2(){
    Interval8 = setInterval(final2,1);
    document.addEventListener('keydown', (event) =>{
        if(event.key === 'z'){
       clearInterval(Interval8);
       location.reload();

        }
        }
            )
}


