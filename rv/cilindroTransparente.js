function Cilindro(){
  THREE.Object3D.call(this);
  this.cilindro=new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 4.5), new THREE.MeshLambertMaterial( { color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ));
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

  chkIluminacion=document.getElementById("lighting");
  
  
        if (chkIluminacion.checked)
        {
            cubo.material.transparent = true;
            cubo.material.opacity = parseFloat(txtBlending.value);
        }
        else
        {
            cubo.material.transparent = false;
            cubo.material.opacity = 1.0;
        }
        cubo.material.needsUpdate = true;

}


var escena,luzPuntual,camara,renderer;
var cilindroT;

setup();
loop();
