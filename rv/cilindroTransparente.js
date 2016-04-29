function Cilindro(){
  THREE.Object3D.call(this);
  this.cilindro=new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 4.5), new THREE.MeshLambertMaterial( { color: 0xdd0ddd,opacity: 0.4,transparent: true } ));
  this.add(this.cilindro)
  }
  
  Cilindro.prototype=new THREE.Object3D();
  
  function setup(){
  cilindroT = new Cilindro();
  
  luzPuntual = new THREE.PointLight(0xffffff);
  luzPuntual.position.x=10;
  luzPuntual.position.y=10;
  luzPuntual.position.z=10;

  escena = new THREE.Scene();
  escena.add(cilindroT);
  escena.add(luzPuntual);
  camara = new THREE.PerspectiveCamera();
  camara.position.z=20;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize (window.innerHeight*0.95, window.innerHeight*0.95);
  document.body.appendChild( renderer.domElement );
  }

function loop(){

 cilindroT.rotation.x+=0.01;

}


var escena,luzPuntual,camara,renderer;
var cilindroT;

setup();
loop();
