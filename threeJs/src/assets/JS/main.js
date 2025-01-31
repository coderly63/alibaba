import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement)
controls.update()

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

function animate() {
  requestAnimationFrame(animate);
  cube.position.x += 0.05
  if (cube.position.x > 5) cube.position.x = 0
  cube.rotation.x += 0.1
  controls.update()
  renderer.render(scene, camera);
};

animate();