//PARTE UM
class dialogos{
    constructor(texto,dx,dy,dwidth, dcolor, dfonte){
        this.texto = texto;
        this.dx = dx;
        this.dy = dy;
        
        this.dwidth = dwidth;
        this.dcolor = dcolor;
        this.dfonte = dfonte;
    }

    escrever(){
        pincel.fillStyle = this.dcolor;
        pincel.font = this.dfonte;
        pincel.fillText(this.texto,this.dx,this.dy,this.dwidth);
    }

}

class objetoGeo{
 constructor(x,y,width,height, color){
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.color = color;
 }
 desenho(){
    pincel.beginPath();
     pincel.fillStyle = this.color;
     pincel.fillRect(this.x,this.y,this.width,this.height);
     pincel.stroke();
 }

imagem(){
     var img = new Image();
     img.src = this.color;
     pincel.drawImage(img, this.x, this.y, this.width, this.height);
 }

}

class Player extends objetoGeo {
    controle(vy){
        this.imagem();
        this.y+=vy;
    }
    colisao1(valorx,valory,valorw,valorh){
        this.valorx = valorx;
        this.valory = valory;
        this.valorw = valorw;
        this.valorh = valorh;
        if(this.x + this.width >= valorx && this.y + this.height <= valory + valorh){
          endgame();
        }
    }
    colisao2(valorx,valory,valorw,valorh){
        this.valorx = valorx;
        this.valory = valory;
        this.valorw = valorw;
        this.valorh = valorh;
        if(this.x + this.width >= valorx && this.y + this.height >= valory){
            endgame();
        }
    }
}

class Barreira extends objetoGeo {
    movimentacao(velox){
        this.velox = velox;
        this.imagem();
        this.x+=this.velox;
        if(this.x + this.width > 1600){
            this.velox =- this.velox;
        } 
        if(this.x + this.width < 0){
            this.velox =- this.velox;
        }   
     }
    spawnum(lim, spawn, max, min){
        this.lim = lim;
        this.spawn = spawn;
        if (this.x + this.width <= lim){
            this.x = spawn;
            this.height = Math.floor(Math.random()* (max - min) + min);
        }
    }
    spawndois(lim, spawn, distancia){
        this.lim = lim;
        this.spawn = spawn;
        if (this.x + this.width <= lim){
            this.x = spawn;
            this.y = distancia;
        }

    }
}

class PlayerJ extends objetoGeo{
    colisaoJ(inimigo){//colisão com do jogador com o inimigo
        if(this.x + this.width > inimigo.x && this.x < inimigo.x + inimigo.width && 
            this.y + this.height > inimigo.y && this.y < inimigo.y + inimigo.height){
            return true;
    }
    }
    canvascolisao() {
        if (this.x <= 0) {
            this.x = 0;
        }
        if (this.x >= 1000 - this.width) {
            this.x = 1000 - this.width;

        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.y >= 500 - this.height) {
            this.y = 500 - this.height;

        }

    }
}


class Tirando extends objetoGeo {
    pontuacao=0;
    desenhaT() { //balas
        pincel.beginPath();
        pincel.fillStyle = "Red";
        pincel.fillRect(this.x, this.y, this.width, this.height);
    }
    atirando(tiro, posicaoydoplayer) {
        if (tiro == true) {
            this.y -= 8;

        } else {
            this.y = posicaoydoplayer;
        }
    }
    colisaoI(inimigo){
        if(this.y>inimigo.y&&this.y<inimigo.y+inimigo.height
         &&this.x<inimigo.x+inimigo.width&&this.x>inimigo.x-inimigo.width){
            this.pontuacao++;
            inimigo.y=500;
        }
    }
}

class Inimigo extends objetoGeo{ //fazendo o inimigo

    movimenta(mover) {
        if (this.y >= 500) {
            this.x = Math.random() * (1000 - 100) + 100;
            this.y = -200;//posição que renace
        }
        if (mover == true) {
            this.y += 2;
        }

    }

}



