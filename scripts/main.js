// VIDEO

const addVideo = (scene, url, size, position) => {

    video = document.createElement( 'video' );
    video.src = url;
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
        new THREE.PlaneGeometry(size.w, size.h),
        new THREE.MeshBasicMaterial({ map: texture }));
    video.position.set(position.x,position.y,position.z);
    video.callback = () => {
        console.log('hello')
    }
    scene.add( video );
    
}


const addPicture = (scene, url, size, position) => {
    var map = new THREE.TextureLoader().load(url);
    var material = new THREE.SpriteMaterial( { map: map} );
    material.minFilter = THREE.LinearFilter;
    material.magFilter = THREE.LinearFilter;
    var sprite = new THREE.Sprite( material );
    sprite.scale.set(size.x,size.y,size.z);
    sprite.position.set(position.x,position.y,position.z);
    scene.add( sprite );
}

const addText = (scene,loader, url, content, size, position, color) => {

    loader.load( url, function ( font ) {
        var shapes = font.generateShapes( content, size);
        text = new THREE.Mesh( 
            new THREE.ShapeBufferGeometry(shapes),
            new THREE.MeshBasicMaterial({ color: color }));
        text.position.set(position.x,position.y,position.z);
        text.geometry.center()
        scene.add( text ); 
    })
    
}

const addDate = (scene, loader, date, position) => {
    addText(scene,loader,'assets/Montserrat_Bold.json',date, 2, {x:0,y:0,z:position}, 0x24282E)
    addText(scene,loader,'assets/Hijrnotes_Regular.json',"Années", 0.25, {x:0,y:0,z:position+0.2}, 0xffffff)
}


const init = () => {

    const scene = new THREE.Scene()
    var loader = new THREE.FontLoader()
    var mouse = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();


    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    const camera = new THREE.PerspectiveCamera(70, windowWidth / windowHeight, 0.001, 7)
    camera.position.z = 0
    camera.lookAt(0,0,0)
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
        
    })
    renderer.setSize(windowWidth, windowHeight)
    renderer.shadowMap.enabled = true
    document.body.appendChild(renderer.domElement)

    scene.background = new THREE.TextureLoader().load("assets/background.png")
    scene.fog = new THREE.Fog( 0x0C1015,2,5);


    var start = {x:0,y:0};
    function onMouseWheel( event ) {
        event.preventDefault();
        camera.position.z -= event.deltaY * 0.001;  
        if(camera.position.z > 0 ){
            camera.position.z = 0 
        }
    }
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
        camera.position.z += offset.y * 0.001;
        if(camera.position.z > 0 ){
            camera.position.z = 0 
        }
    
    }

    function onMouseMove( event ) {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        camera.rotation.x =  mouse.y / 20
        camera.rotation.y = - mouse.x / 20
    }

    const handleClick = () => {
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
        var intersects = raycaster.intersectObjects( scene.children );
        if(intersects.length){
            console.log(intersects[0].object)
        }
    }

    const handleOrientation = (event) => {
        camera.rotation.x =  event.alpha / 20
        camera.rotation.y = - event.beta/ 20
        console.log('orichange')
    }

    document.addEventListener("deviceorientation", handleOrientation, true);
    document.addEventListener( 'mousewheel', onMouseWheel, { passive: false } );
    document.addEventListener("touchstart", touchStart, { passive: false });
    document.addEventListener("touchmove", touchMove, { passive: false });
    document.addEventListener( 'mousemove', onMouseMove, false );
    document.addEventListener( 'click', handleClick, false );

    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth
        windowHeight = window.innerHeight
        camera.aspect = windowWidth / windowHeight
        camera.updateProjectionMatrix()
        renderer.setSize(windowWidth, windowHeight)
    })

    const animate = () => {
        window.requestAnimationFrame(animate)

        renderer.render(scene, camera)

    }

    animate()

    addPicture(scene,'https://picsum.photos/2000', {x: 1, y:1, z:1}, {x: 1, y:1, z:-4}  )
    addDate(scene,loader, '1910', -3)
    addDate(scene,loader, '1920', -13)
    addDate(scene,loader, '1930', -23)
    addDate(scene,loader, '1940', -33)
    addDate(scene,loader, '1950', -43)
    addVideo(scene,"assets/video.mp4", {w:2*16/9, h:2}, {x:0,y:0,z:-5})

}


init()






