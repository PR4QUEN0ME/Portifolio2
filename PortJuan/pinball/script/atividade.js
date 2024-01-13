var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');
//Variáveis
canvas.width = 600;
canvas.height = 400;
var x = 300;
var y = 30;
var raio = 10;
var dx =0;
var dy =0;


var g = 0.1;
var gs = 0;
var outro = 1;

//Variável Jogador
var movetoxum = 5;
var movetoyum = 340;
var linetoxum = 205;
var linetoyum = 10;

var movetoxdois = 370;
var movetoydois = 340;
var linetoxdois = 225;
var linetoydois = 10;

//Variáveis quadrilátero
var quad1 = 170;
var quad2 = 100;
var quad3 = 70;
var quad4 = 70;

var ret1 = 340;
var ret2 = 100;
var ret3 = 70;
var ret4 = 70;

//Texto
var derrotas = 0;

//Áudio
var audio = new Audio ("audio/trilha.ogg")

function texto(){
pincel.fillStyle = 'black';
pincel.font='10px arial';
pincel.fillText('Derrotas:', 20, 20, 1200);
pincel.font='10px arial';
pincel.fillStyle='black';
pincel.fillText(derrotas,20,40,1200);
}

//Bola
function bola(){
    audio.play();
    pincel.clearRect(0,0,canvas.width,canvas.height);
    pincel.beginPath();
    pincel.arc(x, y, raio,0,2*3.14);
    pincel.fillStyle = 'orange';
    pincel.fill();

    gs += g;
    x+= dx;
    y+= dy + gs;

    //Paredes
    if (x + raio > 600){ 
        dx = -dx;
    }
    
    if (x - raio <= 0){
        dx = -dx;
    }

    if (y + raio > 395){
        y= raio-5;
        y = 395 -raio;
        gs *= -outro;
       derrotas++;
       x =300;
       y = 30;
        }
    if (y - raio <= 5){
        y +=5;
    }
    // Quadrado esquerdo (cima)
    if (y>=95 && y<=105){
        if(x>=170 && x<= 215){
        y= 100- raio;
        gs*= -outro/1.5;
        dx = dx-0.5;}
        if(x>=216 && x<=240){
        y= 100 - raio;
        gs*= -outro/1.5;
        dx = dx+0.5;}
        }

    // Quadrado direito (cima)
    if (y>=95 && y<=105){
        if (x>=340 && x<=375){
        y = 100 - raio;
        gs*= -outro/1.5;
        dx = dx-0.5;
        }
        if (x>=376 && x<=410){
            y = 100 - raio;
            gs*= -outro/1.5;
            dx = dx+0.5;
        }
    }

    // Quadrado esquerdo (baixo)
    if (y>=170 && y<=175 && x>=170 && x<=240){
        y += 5;
    }

    //Quadrado direito (baixo)
    if (y>=170 && y<=175 && x>=340 && x<=410){
        y += 5;
    }

    //Quadrado esquerdo (direita)
    if (y>=100 && y<=170 && x>=240 && x<=245){
        dx = -dx;
    }

    //Quadrado direito (direita)
    if (y>=100 && y<=170 && x>=340 && x<=410){
        dx = -dx;
    }

    //Quadrado esquerdo (esquerda)
    if (y>=100 && y<=170 && x>=170 && x<=175){
        dx = -dx;
    }

    //Quadrado direito (esquerda)
    if (y>=100 && y<=170 && x>=340 && x<=345){
        dx = -dx;
    }    

    //Barra esquerda
    if (y>=movetoyum && y<= movetoyum+linetoyum && x>=movetoxum && x<=linetoxum+5){
        y= movetoyum - raio;
        gs*= -outro;
        dx == dx+1.5;
    }

    //Barra direita
    if (y>=movetoydois && y<=movetoydois+10 && x>=movetoxdois && x<=movetoxdois+linetoxdois){
        y= movetoydois - raio;
        gs*= -outro;
        dx = dx-1.5;
    }
}

// Linha 1
function linhaum(){
pincel.beginPath();
pincel.fillStyle = 'black';
pincel.fillRect(movetoxum, movetoyum, linetoxum, linetoyum);
pincel.stroke();
}

// Linha 2
function linhadois(){
pincel.beginPath();
pincel.fillStyle = 'black';
pincel.fillRect(movetoxdois, movetoydois, linetoxdois, linetoydois);
pincel.stroke();
}


// Quadrilátero 1
function quadrilateroum(){
pincel.fillStyle = 'purple';
pincel.fillRect(quad1,quad2,quad3,quad4);
}
// Quadrilátero 2
function quadrilaterodois(){
pincel.fillStyle = 'purple';
pincel.fillRect(ret1,ret2,ret3,ret4);
}

function fim(){
if(derrotas==5){
pincel.clearRect(0,0, canvas.width, canvas.height);
pincel.font='50px times new roman';
pincel.fillStyle = 'black';
pincel.fillText('FIM DE JOGO', 150, 150);
pincel.font='20px times new roman';
pincel.fillStyle = 'black';
pincel.fillText('Caso queira jogar novamente, reinicie a página... =)', 90, 200);
derrotas==0;
}
}

function total(){
    bola();
    linhaum();
    linhadois();
    quadrilateroum();
    quadrilaterodois();
    texto();
    reparar();
}

document.addEventListener('keydown', (event)=>{
    if(event.keyCode==81){
        movetoxum = 75;
        linetoxum = 225;
 
        movetoxdois = 295;
        linetoxdois = 210;

        //Barra esquerda
        if (y>=movetoyum && y<= movetoyum+linetoyum+100 && x>=movetoxum && x<=movetoxum + linetoxum){
            y= movetoyum - raio;
            gs*= -outro;
            dx == dx+1.5;
        }
    
        //Barra direita
        if (y>=movetoydois && y<=movetoydois+10 && x>=movetoxdois-10 && x<=movetoxdois+linetoxdois){
            y= movetoydois - raio;
            gs*= -outro;
            dx = dx-1.5;
        }
    }
})
document.addEventListener('keyup', (event)=>{
    if(event.keyCode==81){
        movetoxum = 5;
        linetoxum = 205;
    
        movetoxdois = 370;
        linetoxdois = 225;

        //Barra esquerda
        if (y>=movetoyum && y<= movetoyum+linetoyum && x>=movetoxum && x<=linetoxum){
            y= movetoyum - raio;
            gs*= -outro;
            dx == dx+1.5;
        }
    
        //Barra direita
        if (y>=movetoydois && y<=movetoydois+10 && x>=movetoxdois && x<=movetoxdois+linetoxdois){
            y= movetoydois - raio;
            gs*= -outro;
            dx = dx-1.5;
        }
    }
})

function reparar(){
if(g> 50){
    g= g-20;
}}

const myInterval = setInterval(total,10);

setInterval(fim,10);

function stop(){
    if (derrotas==5){
    clearInterval(myInterval);
    }
}

setInterval(stop,10);