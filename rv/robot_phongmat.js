function Cuerpo(){
  THREE.Object3D.call(this);
  this.cuerpo=new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 4.5), new THREE.MeshPhongMaterial( { color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ));
  this.PieI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,1.8),new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ));
  this.PieD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,1.8),new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ));
  this.BrazoI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,3.3),new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ));
  this.BrazoD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,3.3),new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ));
  this.brazI = new THREE.Mesh(new THREE.CylinderGeometry(0.33,0.33,0.4),new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ));
  this.brazD = new THREE.Mesh(new THREE.CylinderGeometry(0.33,0.33,0.4),new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ));
  
this.PieI.position.x=-1;
this.PieI.position.y=-2.5;
this.PieD.position.x=1;
this.PieD.position.y=-2.5;

//this.brazI.rotation.z=90*Math.PI/180;
//this.brazD.rotation.z=90*Math.PI/180;

this.brazI.position.x=-2.7;
this.brazI.position.y=1.8;
this.brazD.position.x=2.7;
this.brazD.position.y=1.8;

this.BrazoI.position.x=-3.1;
this.BrazoI.position.y=0.65;
this.BrazoD.position.x=3.1;
this.BrazoD.position.y=0.65;



this.add(this.cuerpo)
  this.add(this.PieI)
  this.add(this.PieD)
  this.add(this.BrazoI)
  this.add(this.BrazoD)
  this.add(this.brazI)
  this.add(this.brazD)

}

function Cabeza(){
  THREE.Object3D.call(this);
  this.cabeza=new THREE.Mesh(new THREE.SphereGeometry(2.5,32,32,0,6.3,0,1.57),new THREE.MeshPhongMaterial({ color: 0xdddddd, specular: 0xFFD700, shininess: 15, shading: THREE.FlatShading } )); //YA
  this.cuello=new THREE.Mesh(new THREE.CylinderGeometry(2.3,2.3,0.3,64,64,0,0,6.3),new THREE.MeshPhongMaterial({color:0x777777})); //YA
  this.antena1=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.7),new THREE.MeshPhongMaterial({color:0xffffff})); //YA
  this.antena2=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.7),new THREE.MeshPhongMaterial({color:0xffffff})); //YA

 //POSICIONES

  this.cabeza.position.y=2.4;
  this.antena1.position.y=4.75;
  this.antena1.position.x=-1;
  this.antena2.position.y=4.75;
  this.antena2.position.x=1;
  this.cuello.position.y=2.4;


//Cuello.position.y=2.4;
//esfera1.position.y=2.4;
//Antena1.position.x=-1;
//Antena1.position.y=4.75;
//Antena2.position.x=1;
//Antena2.position.y=4.75;









  this.add(this.cabeza);
  this.add(this.cuello);
  this.add(this.antena1);
  this.add(this.antena2);
}





Cuerpo.prototype=new THREE.Object3D();
Cabeza.prototype=new THREE.Object3D();

function setup(){
  cuerpoAnd = new Cuerpo();
  cabezaAnd = new Cabeza();
  
  luzPuntual = new THREE.PointLight(0xffffff);
  luzPuntual.position.x=10;
  luzPuntual.position.y=10;
  luzPuntual.position.z=10;
  escena = new THREE.Scene();
  escena.add(cuerpoAnd);
  escena.add(cabezaAnd);
  escena.add(luzPuntual);
  camara = new THREE.PerspectiveCamera();
  camara.position.z=20;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize (window.innerHeight*0.95, window.innerHeight*0.95);
  document.body.appendChild( renderer.domElement );
}

function loop(){
  requestAnimationFrame( loop );
  renderer.render( escena, camara);
  //cuerpoAnd.rotation.x+=0.01;
  cabezaAnd.rotation.y+=0.01;
	
}

var escena,luzPuntual,camara,renderer;
var cabezaAnd,cuerpoAnd;

setup();
loop();