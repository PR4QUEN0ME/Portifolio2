var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

//Variáveis
var telainicial = new objetoGeo(0, 0, 1000, 500, "imagens/Parafron.jpg");
var dialogoum = new objetoGeo(0, 0, 1000, 500, "imagens/1.jpg");
var dialogodois = new objetoGeo(0, 0, 1000, 500, "imagens/2.jpg");
var dialogotres = new objetoGeo(0, 0, 1000, 500, "imagens/3.jpg");
var dialogoquatro = new objetoGeo(0, 0, 1000, 500, "imagens/4.jpg");
var dialogocinco = new objetoGeo(0, 0, 1000, 500, "imagens/5.jpg");
var dialogoseis = new objetoGeo(0, 0, 1000, 500, "imagens/6.jpg");
var dialogosete = new objetoGeo(0, 0, 1000, 500, "imagens/7.jpg");
var dialogooito = new objetoGeo(0, 0, 1000, 500, "imagens/8.jpg");
var dialogonove = new objetoGeo(0, 0, 1000, 500, "imagens/9.jpg");
var tuto1 = new objetoGeo(0, 0, 1000, 500, "imagens/10.jpg");
var telagameover = new objetoGeo(0, 0, 1000, 500, "imagens/GameOver.png");
var beethoven = new Audio ("audio/city.ogg");
var musicadialogos = new Audio("audio/PassaDialogo.ogg");
var mais = 1;
var Interval1;
var Interval2;
var Interval3;
var Interval4;
var Interval5;
var ativar = false;

function inicio(){
beethoven.play();

    if (mais == 1){
    telainicial.imagem();
    }
    if (mais == 2){
    dialogoum.imagem();
    }
    if (mais == 3){
    dialogodois.imagem();
    }
    if (mais == 4){
    dialogotres.imagem();
    }
    if (mais == 5){
        dialogoquatro.imagem();
    }
    if (mais == 6){
        dialogocinco.imagem();
    }
    if (mais == 7){
        dialogoseis.imagem();
    }
    if (mais == 8){
        dialogosete.imagem();
    }
    if (mais == 9){
        dialogooito.imagem();
    }
    if (mais == 10){
        dialogonove.imagem();
    }
    if (mais == 11){
        tuto1.imagem();
    }
    if (mais == 12){
        clearInterval(Interval1);
        Interval2 = setInterval(jogo,20);
        Interval3 = setInterval(extratempo,1000);
    }
}

document.addEventListener('keydown', (event) =>{
    if(event.key === 'q'){
      mais+=1;
      musicadialogos.play();
    }
    }
        )

//Variáveis jogo
var background = new objetoGeo(0, 0, 1000, 500, "imagens/bkk.jpg");
var pontuacao = 0;
var jogador = new Player(31, 187, 40, 40, "imagens/protagonista.jpg");
var obstaculo1 = new Barreira(1000,0,70,312, "imagens/cig.jpg");
var obstaculo2 = new Barreira(1000,400,70,500, "imagens/cigin.jpg");
var obstaculo3 = new Barreira(1500,0,70,312, "imagens/cig.jpg");
var obstaculo4 = new Barreira(1500,400,70,500, "imagens/cigin.jpg");
var pont = new objetoGeo(410, 17, 20, 20, "imagens/PontoKau.jpg");
var temp = new objetoGeo(410, 45, 20, 20, "imagens/TempoKau.jpg");
var audio = new Audio ("audio/soundtrack.ogg");
var audiodois = new Audio ("audio/score.ogg");
var tempo = 7;
var end = false;

function limpar(){
    pincel.clearRect(0,0,canvas.width,canvas.height);
}

// JOGO

function colisao(){
    jogador.colisao1(obstaculo1.x, obstaculo1.y, obstaculo1.width, obstaculo1.height);
    jogador.colisao2(obstaculo2.x, obstaculo2.y, obstaculo2.width, obstaculo2.height);
    jogador.colisao1(obstaculo3.x, obstaculo3.y, obstaculo3.width, obstaculo3.height);
    jogador.colisao2(obstaculo4.x, obstaculo4.y, obstaculo4.width, obstaculo4.height);
}

function jogo(){
    end = false;
    beethoven.pause();
    audio.play();
    limpar();
    background.imagem();
    temp.imagem();
    pont.imagem();
    jogador.controle(0,0);
    obstaculo1.movimentacao(-11);
    obstaculo2.movimentacao(-11);
    obstaculo3.movimentacao(-11);
    obstaculo4.movimentacao(-11);
    obstaculo1.spawnum(0, 1000, 375, 63);
    obstaculo2.spawndois(0, 1000, obstaculo1.height +120);
    obstaculo3.spawnum(0, 1000, 375, 63);
    obstaculo4.spawndois(0, 1000, obstaculo3.height +120);

    colisao();
    if(pontuacao >= 2){
        window.location = "Parte2.html";
     }
     //texto 1
    pincel.fillStyle = 'yellow';
    pincel.font = '20px courier new';
    pincel.fillText('Pontos: ' + pontuacao + "/2",445,30,800);

    //texto 2
    pincel.fillStyle = 'yellow';
    pincel.font = '20px courier new';
    pincel.fillText('Tempo: ' + tempo,445,60,800);

    escrita1.escrever();

}

    document.addEventListener('keydown', (event) =>{
        if(event.key === 'w'){
            jogador.controle(-30, 0);

        }
        if (event.key === 's'){
            jogador.controle(30, 0);
        }
        }
            )

//TEMPO
function temporizador(cronograma){
    if(cronograma==true){
        tempo--;
        cronograma=false;
        if (tempo==0){
            pontuacao++;
            tempo = 7;
            audiodois.play();
        }
    }
}
function extratempo(){
    temporizador(true);
}

// GAME OVER
function final(){
    clearInterval(Interval2);
    clearInterval(Interval3);
    telagameover.imagem();
    audio.pause();
}

function endgame(){
    Interval4 = setInterval(final,1);
    document.addEventListener('keydown', (event) =>{
        if(event.key === 'z'){
       clearInterval(Interval4);
       location.reload();

        }
        }
            )
}

// _____________________________________________________________________________________________________________________________________________________________________
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
document.addEventListener('keydown', (event) =>{
    if(event.key === 'q'){
      mais2+=1;
      musicadialogos.play();
    }
    }
        )

//Parte2
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

function unificar(){
    if(ativar==false){
        Interval1 = setInterval(inicio,1);
    }
    if(ativar == true){
        Interval5 = setInterval(inicio2,1);
    }
}

unificar();
