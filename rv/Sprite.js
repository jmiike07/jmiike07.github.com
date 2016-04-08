function Sprite(img){
    this.img=img;
    this.direcciones=[];
}
Sprite.prototype.setDireccion=function(direccion,coordenadas){
    this.direcciones[direccion]=coordenadas;
};
Sprite.prototype.createDireccion=function(filas, columnas, ajustear,ajusteab,ajusteiz,ajustede,direcciones){
    var ancho=this.img.width/columnas;
    var alto=this.img.height/filas;
    
    for (direccion in direcciones)
    {
        this.direcciones[direccion]=[];
        for (var i=0;i<columnas;i++)
        {
            this.direcciones[direccion].push([i*ancho+ajusteiz,direcciones[direccion]*alto+ajustear,(i+1)*ancho-ajustede,(direcciones[direccion]+1)*alto-ajusteab]);
        }
    }
};
Sprite.prototype.getNumSprites=function(direccion){
    return this.direcciones[direccion].length;
};
Sprite.prototype.dibujar=function(contexto,ancho,alto,direccion,indice){
    contexto.drawImage(this.img, this.direcciones[direccion][indice][0],
                                this.direcciones[direccion][indice][1], 
                                this.direcciones[direccion][indice][2]-this.direcciones[direccion][indice][0], 
                                this.direcciones[direccion][indice][3]-this.direcciones[direccion][indice][1],
                                -ancho/2, -alto/2, ancho, alto);
};


//sss


var spriteJugadorTrans=new Sprite(Imagenes.get("calvo"));
    spriteJugadorTrans.setDireccion("arriba",[[12,233,42,287],[64,233,94,287],[116,233,145,287],[166,233,196,287],[217,233,247,287],[270,233,300,287],[321,233,350,287],[374,233,404,287]]);
    spriteJugadorTrans.setDireccion("abajo",[[12,15,45,70],[64,15,95,70],[113,15,145,70],[164,15,195,70],[217,15,250,70],[272,15,305,70],[321,15,354,70],[373,15,404,70]]);
    spriteJugadorTrans.setDireccion("derecha",[[12,156,37,213],[68,156,94,213],[114,156,140,213],[164,156,191,213],[218,156,244,213],[272,156,303,213],[322,156,355,213],[376,156,402,213]]);
    spriteJugadorTrans.setDireccion("izquierda",[[19,84,38,140],[61,84,89,140],[120,84,145,140],[170,84,197,140],[222,84,244,140],[270,84,300,140],[322,84,354,140],[377,84,402,140]]);
    
    //SSS
    
    
    var spriteJugadorTrans=new Sprite(Imagenes.get("calvo"));
    spriteJugadorTrans.createDireccion(4,8,15,2,11,7,{"arriba":3,"abajo":0,"derecha":2,"izquierda":1});
    
    
    // JA
    
    
    function AlmacenSprites(){
    //La lista de sprites
    this.lista=[];
}
AlmacenSprites.prototype.add=function(id,sprite){
    this.lista[id]=sprite;
};
AlmacenSprites.prototype.get=function(id){
    return this.lista[id];
};


//JJ

function AlmacenImagenes(){
    //La lista de objetos Image
    this.lista=[];
    this.esperadas=0;
    this.cargadas=0;
}
AlmacenImagenes.prototype.cargar=function(lista){
    var self=this;
    this.esperadas=lista.length;
    for (var i=0;i<this.esperadas;i++)
    {
        var img=new Image();
        img.src=lista[i][1];
        img.onload=function(){
            self.imagenCargada();
        };
        this.lista[lista[i][0]]=img;
    }
};
AlmacenImagenes.prototype.imagenCargada=function(){
    this.cargadas++;
    if (this.cargadas==this.esperadas)
    {
        this.completado();
    }
};
AlmacenImagenes.prototype.get=function(id){
    return this.lista[id];
};
AlmacenImagenes.prototype.completado=function(){};

    Imagenes=new AlmacenImagenes();
    Imagenes.cargar(
        [
            ["calvo","img/sprite_player.png"],
            ["mario","img/mario.png"]
        ]);
    Imagenes.completado=function(){
        alert("Todas las imagenes han sido cargadas");
    };
    
    
    function Mundo(idCanvas, idBoton){
    this.canvas=document.getElementById(idCanvas);
    this.contexto=this.canvas.getContext('2d');
    
    this.anchoCelda=60;
    this.altoCelda=60;
    
    this.conjuntoTiles=[new Tile(this.anchoCelda,this.altoCelda,true,"white"),new Tile(this.anchoCelda,this.altoCelda,false,"black")];
    
    this.mapa=
    [
        [1, 1, 1, 1, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 1, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 1, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1]
    ];
    
    this.canvas.width=this.anchoCelda*this.mapa[0].length;
    this.canvas.height=this.altoCelda*this.mapa.length;
    
    this.jugador;
    this.iniciarJugador();
    
    var self=this;
    this.tiempoTranscurrido=new Date().getTime();
    this.intervalo=setInterval(function(){self.loop()},25);
    
    this.boton=document.getElementById(idBoton);
    this.boton.onclick=function(){
        self.detener();
    };
}
Mundo.prototype.detener=function(){
    clearInterval(this.intervalo);
};


Mundo.prototype.iniciarJugador=function(){
    this.jugador=new Jugador(this,30, 30, 2.5, 1.5);
    var self=this;
    
    document.body.onkeydown=function(e){
        switch(e.keyCode)
        {
            case 38: //Arriba
                e.preventDefault();
                self.jugador.arriba=true;
                break;
            case 40: //Abajo
                e.preventDefault();
                self.jugador.abajo=true;
                break;
            case 39: //Derecha
                e.preventDefault();
                self.jugador.derecha=true;
                break;
            case 37: //Izquierda
                e.preventDefault();
                self.jugador.izquierda=true;
                break;
            
        }
    };
    document.body.onkeyup=function(e){
        switch(e.keyCode)
        {
            case 38: //Arriba
                e.preventDefault();
                self.jugador.arriba=false;
                break;
            case 40: //Abajo
                e.preventDefault();
                self.jugador.abajo=false;
                break;
            case 39: //Derecha
                e.preventDefault();
                self.jugador.derecha=false;
                break;
            case 37: //Izquierda
                e.preventDefault();
                self.jugador.izquierda=false;
                break;
            
        }
    };
};




Mundo.prototype.dibujarMapa=function(){
    var y=this.mapa.length;
    var x=this.mapa[0].length;
    for (var yi=0;yi<y;yi++)
    {
        for (var xi=0;xi<x;xi++)
        {
            this.conjuntoTiles[this.mapa[yi][xi]].dibujar(this.contexto,xi,yi);
        }
    }
};


Mundo.prototype.casillaCaminable=function(px,py){
    var x=parseInt(px);
    var y=parseInt(py);
    return this.conjuntoTiles[this.mapa[y][x]].caminable;
};

Mundo.prototype.loop=function(){
    var delta=(new Date().getTime()) - this.tiempoTranscurrido;
    this.tiempoTranscurrido=new Date().getTime();
    
    this.moverPersonajes(delta);
    this.dibujarMapa();
    this.dibujarPersonajes();
};

Mundo.prototype.moverPersonajes=function(delta){
    this.jugador.mover(delta);
};
Mundo.prototype.dibujarPersonajes=function(){
    this.jugador.dibujar(this.contexto);
};

function Personaje(mundo, ancho, alto, x, y, sprite){
    this.mundo=mundo;
    
    this.ancho=ancho;
    this.alto=alto;
    this.x=x;
    this.y=y;
    
    this.dx=0;
    this.dy=0;
    
    this.velocidad=0.001;
    
    this.sprite=sprite;
    this.direccion="abajo";
    this.spriteindice=0;
    this.transicionSprite=50;
    this.transicion=0;
}

Personaje.prototype.dibujar=function(contexto){
    contexto.save();
    contexto.translate(this.x*mundo.anchoCelda,this.y*mundo.altoCelda);
    
    
    this.sprite.dibujar(contexto,this.ancho,this.alto,this.direccion,this.spriteindice);
    
    contexto.restore();
};

Personaje.prototype.posicionValida=function(px,py){
    var ancho=this.ancho/(2*mundo.anchoCelda);
    var alto=this.alto/(2*mundo.altoCelda);
    
    if (!mundo.casillaCaminable(px-ancho,py-alto))
    {
        return false;
    }
    if (!mundo.casillaCaminable(px+ancho,py-alto))
    {
        return false;
    }
    if (!mundo.casillaCaminable(px-ancho,py+alto))
    {
        return false;
    }
    if (!mundo.casillaCaminable(px+ancho,py+alto))
    {
        return false;
    }
    return true;
    
};

Personaje.prototype.mover=function(delta){
    var nuevaDireccion="";
    if (this.dx==0 && this.dy==0) return;
    var px=this.x+this.dx*this.velocidad*delta;
    var py=this.y+this.dy*this.velocidad*delta;
    
    if (!this.posicionValida(px,this.y)) px=this.x;
    if (!this.posicionValida(this.x,py)) py=this.y;
    
    if (this.x==px && this.y==py) return;
    
    this.x=px;
    this.y=py;
    if (this.dx>0)
    {
        nuevaDireccion="derecha";
    }
    if (this.dx<0)
    {
        nuevaDireccion="izquierda";
    }
    if (this.dy>0)
    {
        nuevaDireccion="abajo";
    }
    if (this.dy<0)
    {
        nuevaDireccion="arriba";
    }
    if (this.direccion!=nuevaDireccion)
    {
        this.transicion=0;
        this.spriteindice=0;
        this.direccion=nuevaDireccion;
    }
    this.transicion+=delta;
    if (this.transicion>this.transicionSprite)
    {
        this.transicion=0;
        this.spriteindice=(this.spriteindice+1)%this.sprite.getNumSprites(nuevaDireccion);
    }
};

function Jugador(mundo, ancho, alto, x, y){
    Personaje.call(this, mundo, ancho, alto, x, y, Sprites.get("jugador"));
    this.arriba=false;
    this.abajo=false;
    this.derecha=false;
    this.izquierda=false;
}

Jugador.prototype=new Personaje;

Jugador.prototype.mover=function(delta){
    this.dx=0;
    this.dy=0;
    if (this.arriba)
    {
        this.dy-=1;
    }
    if (this.abajo)
    {
        this.dy+=1;
    }
    if (this.izquierda)
    {
        this.dx-=1;
    }
    if (this.derecha)
    {
        this.dx+=1;
    }
    Personaje.prototype.mover.call(this,delta);
};






