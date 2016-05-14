function setup(){

THREE.ImageUtils.crossOrigin = '';
  	texture = THREE.ImageUtils.loadTexture('http://jmiike07.github.io/rv/cuadro.jpg')

var forma=new THREE.CylinderGeometry(1,1,8,50);
var forma2=new THREE.CylinderGeometry(2,2,10,50);
var material=new THREE.MeshPhongMaterial({color: 0xFF4500});
var floor=new THREE.Mesh(new THREE.BoxGeometry(40,40,10), new THREE.MeshPhongMaterial({map: texture}));
floor.position.z=-10;
floor.position.x=-1;
floor.position.y=15;


luzPuntual=new THREE.PointLight(0xFFFFFF);
luzPuntual.position.x=0;
luzPuntual.position.y=0;
luzPuntual.position.z=100;

malla=new THREE.Mesh(forma,material);
malla.position.x=-1;
malla.position.y=10;
malla.position.z=7;
malla.rotation.x=Math.PI/2;

malla2=new THREE.Mesh(forma2,material);
malla2.position.x=2;
malla2.position.y=5;
malla2.position.z=7;
malla2.rotation.x=Math.PI/2;



escena=new THREE.Scene();
escena.add(luzPuntual);
escena.add(floor);
escena.add(malla);
escena.add(malla2);

var fov=75;
var aspect=window.innerWidth/window.innerHeight;
var near=0.1;
var far=1000;

	camara=new THREE.PerspectiveCamera(fov,aspect,near,far);
		camara.position.z=20;
//camara.position.x=0;
//camara.position.y=0;
//camara.rotation.x=Math.PI/6;

//var Perspectiva=new THREE.PerspectiveCamera(fov,aspect,near,far);
//var Orientada=new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 500, 1000 ); 


renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled=true;
}

//document.onkeydown=teclado;

//function teclado(evento){
     // evento=evento||window.event;
    	//if(evento.keyCode=='38'){  //flecha arriba   
    	//	var camara=Perspectiva;
    	//}
    	//else if(evento.keyCode=='40'){  //flecha abajo
    	//	var camara=Orientada;
    	//}

//camara.position.z=20;
//camara.position.x=0;
//camara.position.y=0;
//camara.rotation.x=Math.PI/6;
//    }



function loop()
{
  requestAnimationFrame(loop);
  camara.position.x = Math.cos( timer ) * 200;
  camara.position.z = Math.sin( timer ) * 200;
  camara.lookAt( escena.position );
  renderer.render(escena,camara);
}

var escena,floor,camara,renderer,luzPuntual;
setup();
loop();



