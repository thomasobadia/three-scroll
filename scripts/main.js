const path = "assets/"
const spaceBetweenYears = 5
const spaceBetweenElements = 2
let position = -3
const elementsPosition = [{x:2,y:1},{x:-2,y:-1}, {x:-2,y:1}, {x:2,y:-1}]


const randomPosition = () => {  
    let result = 0
        while (result <= 1 && result >= -1 ){
            result = (Math.floor(Math.random()*2) == 1 ? 1 : -1)*(Math.random()*2)

        }
    return result;
}

    


const dates = {
    1910: [
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1915,
            type: "picture",
            url : "histoire-2.jpg",
            content :"azdazdadz",
        },
        {
            date: 1916,
            type: "picture",
            url : "histoire-3.jpg",
            content :"azdazdadz",
        },
        {
            date: 1917,
            type: "picture",
            url : "histoire-4.jpg",
            content :"azdazdadz",
        },
        {
            date: 1918,
            type: "picture",
            url : "histoire-5.jpg",
            content :"azdazdadz",
        },
        {
            date: 1910,
            type: "picture",
            url : "histoire-5.jpg",
            content :"azdazdadz",
        },
        {
            date: 56,
            type: "picture",
            url : "histoire-5.jpg",
            content :"azdazdadz",
        },
        {
            date: 156789918,
            type: "picture",
            url : "histoire-5.jpg",
            content :"azdazdadz",
        },
        {
            date: 1919,
            type: "video",
            url : "video.mp4",
            content :"azdazdadz",
        },
    ],
    1920: [
        {
            date: 1922,
            type: "",
            url : "",
            content :"",
        },
        {
            date: 1925,
            type: "",
            url : "",
            content :"",
        },
        {
            date: 1919,
            type: "video",
            url : "video.mp4",
            content :"azdazdadz",
        },
        {
            date: 1919,
            type: "video",
            url : "video.mp4",
            content :"azdazdadz",
        },
        {
            date: 1919,
            type: "video",
            url : "video.mp4",
            content :"azdazdadz",
        },
        {
            date: 1919,
            type: "video",
            url : "video.mp4",
            content :"azdazdadz",
        },
        {
            date: 1919,
            type: "video",
            url : "video.mp4",
            content :"azdazdadz",
        },
        {
            date: 1919,
            type: "video",
            url : "video.mp4",
            content :"azdazdadz",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
    ] 

}




const addVideo = (scene, url, size, position, name, content) => {

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
    video.name = name
    video.content = content
    video.callback = () => {
        console.log('hello')
    }
    scene.add( video );
    
}

function normalize(val, max, min) { return (val - min) / (max - min); }


const addPicture = (scene, url, position, name, content) => {
    var map = new THREE.TextureLoader().load(url);
    var img = document.createElement("img");
    var result
    img.src = url;
    img.onload = function (){
        img.style.visibility = 'hidden';
        document.body.appendChild(img);
        var width = img.clientWidth;
        var height = img.clientHeight;
        document.body.removeChild(img)
        sprite.scale.set(normalize(width,3000,0)*1.5,normalize(height,3000,0)*1.5,0.0001);
    }
    var material = new THREE.SpriteMaterial( { map: map} );
    material.minFilter = THREE.LinearFilter;
    material.magFilter = THREE.LinearFilter;
    var sprite = new THREE.Sprite( material );
    sprite.name = name
    sprite.content = content
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

    const camera = new THREE.PerspectiveCamera(70, windowWidth / windowHeight, 0.001, 1000)
    camera.position.z = 4
    camera.lookAt(0,0,0)
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
        
    })



    renderer.setSize(windowWidth, windowHeight)
    renderer.shadowMap.enabled = true
    document.body.appendChild(renderer.domElement)

    scene.background = new THREE.TextureLoader().load(path + "background.png")
    scene.fog = new THREE.Fog( 0x0C1015,2,10);


    var start = {x:0,y:0};

    function onMouseWheel( event ) {
        event.preventDefault();
        // camera.position.z -= event.deltaY * 0.001;  
        console.log(event.deltaY /2)
        TweenLite.to(camera.position,1, { ease: Power0.ease, z: "-=" +event.deltaY /10 , overwrite : "none"});
        
        var animCompleted = false
        if(camera.position.z > 5 && !animCompleted ){
            console.log('eazd')
            TweenLite.to(camera.position, 0.25, { ease: Power2.easeOut, z: 4, onComplete: () => {animCompleted = true}});
            // camera.position.z = 4 
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
        camera.position.z -= offset.y * 0.001;
        if(camera.position.z > 4 ){
            camera.position.z = 4 
        }
    
    }

    

    function onMouseMove( event ) {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        // camera.rotation.x =  mouse.y / 20
        TweenLite.to(camera.rotation,1, { ease: Power0.ease, x: mouse.y / 10, y: - mouse.x / 10, overwrite : "none"});

        // camera.rotation.y = - mouse.x / 20
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
        var intersects = raycaster.intersectObjects( scene.children );
        if(intersects.length){
            console.log(intersects[0].object)
            if(intersects[0].object.type === "Sprite"){
                document.querySelector('body').style.cursor ="pointer";

            }else {
                document.querySelector('body').style.cursor ="inherit";
            }
        }
        else {
            document.querySelector('body').style.cursor ="inherit";

        }
    }

    const handleClick = () => {
        // raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
        var intersects = raycaster.intersectObjects( scene.children );
        if(intersects.length){
            console.log(intersects[0].object)
            if(intersects[0].object.type === "Sprite"){
                document.querySelector('body').style.cursor ="pointer";                
                TweenLite.to(intersects[0].object.position, 0.5, { ease: Power2.easeOut, x:0, y:0, z: camera.position.z - 1 });
                var toHide = scene.children.filter(mesh => mesh.uuid !== intersects[0].object.uuid)
                toHide.map( mesh => mesh.visible = false)
                console.log(toHide)
                console.log('launch Anim')
                console.log(scene.children)
                // TODO : remove listener
            }
        }
    }



    // TODO : Handle Mobile Orientation
    // const handleOrientation = (event) => {
    //     console.log('orichange')
    //     console.log((event.beta - 90) / 100)
    //     console.log(event.alpha / 100)
    //     camera.rotation.x =  (event.beta - 90) / 100
    //     camera.rotation.y =  event.alpha / 100
    // }

    // window.addEventListener('deviceorientation', handleOrientation, false);

    
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


    for(let i = 0; i < Object.values(dates).length; i++){
        if (i > 0){
            position -= spaceBetweenYears
        }
        addDate(scene,loader, Object.keys(dates)[i],position)

        for (let j = 0; j <Object.values(dates)[i].length; j++){
            console.log(Object.values(dates)[i][j].date)
            position -= spaceBetweenElements

            switch (Object.values(dates)[i][j].type){
                case 'picture':
                    addPicture(scene, path + Object.values(dates)[i][j].url, {x: elementsPosition[j%elementsPosition.length].x, y:elementsPosition[j%elementsPosition.length].y, z:position}, Object.values(dates)[i][j].date, Object.values(dates)[i][j].content)
                    break;
                case 'video':
                    addVideo(scene,path + Object.values(dates)[i][j].url, {w:2*16/9, h:2}, {x: elementsPosition[j%elementsPosition.length].x, y:elementsPosition[j%elementsPosition.length].y,z:position}, Object.values(dates)[i][j].date, Object.values(dates)[i][j].content)
                    break;
                default:
                    console.log('error')
            }
        }

    }

    animate()



}


init()
