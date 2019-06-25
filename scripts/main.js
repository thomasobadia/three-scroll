/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Camera
 */
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
const camera = new THREE.PerspectiveCamera(70, windowWidth / windowHeight, 0.001, 7)
camera.position.z = 0

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
    
})
renderer.setSize(windowWidth, windowHeight)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)


// VIDEO

video = document.createElement( 'video' );
video.src = "assets/video.mp4";
video.muted = "true"
video.load()
// TODO Support play device
video.play()
var texture = new THREE.VideoTexture( video );
texture.needsUpdate;
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.format = THREE.RGBFormat;
texture.crossOrigin = 'anonymous';

var video = new THREE.Mesh(
    new THREE.PlaneGeometry(2*16/9, 2),
    new THREE.MeshBasicMaterial({ map: texture }),);
scene.add( video );


// Picture 

var map = new THREE.TextureLoader().load( 'https://picsum.photos/2000');
var material = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );
material.minFilter = THREE.LinearFilter;
material.magFilter = THREE.LinearFilter;
var sprite = new THREE.Sprite( material );
sprite.scale.set(1,1,1);
sprite.position.y= 1
sprite.position.x= 1
sprite.position.z= 2
scene.add( sprite );


// TEXT

var loader = new THREE.FontLoader()


loader.load( 'assets/Montserrat_Bold.json', function ( font ) {
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var message = "1910";
    var shapes = font.generateShapes( message, 2);
    var geometry = new THREE.ShapeBufferGeometry( shapes );
    geometry.computeBoundingBox();

    text = new THREE.Mesh( geometry, material );
    text.position.x = -2.5;
    text.position.y = -1;
    text.position.z = 1;
    scene.add( text );
})



// BACKGROUND AND FOG 

scene.background = new THREE.TextureLoader().load("assets/background.png")
scene.fog = new THREE.Fog( 0x0C1015,0,5);

/**
 * Scroll
 */

// window.addEventListener( 'wheel', onMouseWheel, { passive: false } );

// window.addEventListener('scroll', onMouseWheel );
document.addEventListener( 'mousewheel', onMouseWheel, { passive: false } );


document.addEventListener("touchstart", touchStart, false);
document.addEventListener("touchmove", touchMove, false);

var start = {x:0,y:0};

function touchStart(event) {
    event.preventDefault()
    start.x = event.touches[0].pageX;
    start.y = event.touches[0].pageY;
}

function touchMove(event){
    event.preventDefault()
    offset = {};

    offset.x = start.x - event.touches[0].pageX;
    offset.y = start.y - event.touches[0].pageY;

    camera.position.z -= offset.y * 0.001;

}



function onMouseWheel( event ) {

	event.preventDefault();

    camera.position.z -= event.deltaY * 0.001;
  
  // prevent scrolling beyond a min/max value
  

}



/**
 * Resize
 */
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    camera.aspect = windowWidth / windowHeight
    camera.updateProjectionMatrix()
    renderer.setSize(windowWidth, windowHeight)
})

/**
 * Loop
 */
const animate = () => {
    window.requestAnimationFrame(animate)
    camera.lookAt(scene.position)
    // camera.position.z += 0.01
    renderer.render(scene, camera)
}
animate()