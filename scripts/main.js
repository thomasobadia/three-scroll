const path = "assets/"
const spaceBetweenYears = 5
const spaceBetweenElements = 2
const spaceBetweenYearAndText = 1
let position = -3
const elementsPosition = [{x:2,y:1},{x:-2,y:-1}, {x:-2,y:1}, {x:2,y:-1}]


const dates = {
    1910: [
        {
            date: 1912,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1913,
            type: "picture",
            url : "histoire-3.jpg",
            content :"azdazd",
        },
        {
            date: 1914,
            type: "picture",
            url : "histoire-2.jpg",
            content :"azdazd",
        },
        {
            date: 1915,
            type: "picture",
            url : "histoire-4.jpg",
            content :"",
        },
        {
            date: 1916,
            type: "picture",
            url : "histoire-8.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1917,
            type: "picture",
            url : "histoire-5.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        
    ],
    1920: [
        {
            date: 1922,
            type: "picture",
            url : "histoire-3.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1925,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
    ],
    1930: [
        {
            date: 1932,
            type: "picture",
            url : "histoire-5.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1935,
            type: "picture",
            url : "histoire-6.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
    ],
    1940: [
        {
            date: 1942,
            type: "picture",
            url : "histoire-7.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1945,
            type: "picture",
            url : "histoire-8.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
    ],
    1950: [
        {
            date: 1952,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1953,
            type: "picture",
            url : "histoire-3.jpg",
            content :"azdazd",
        },
        {
            date: 1954,
            type: "picture",
            url : "histoire-2.jpg",
            content :"azdazd",
        },
        {
            date: 1955,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1956,
            type: "picture",
            url : "histoire-8.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1957,
            type: "picture",
            url : "histoire-5.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        
    ],
    1960: [
        {
            date: 1962,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1963,
            type: "picture",
            url : "histoire-3.jpg",
            content :"azdazd",
        },
        {
            date: 1964,
            type: "picture",
            url : "histoire-2.jpg",
            content :"azdazd",
        },
        {
            date: 1965,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1966,
            type: "picture",
            url : "histoire-8.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1967,
            type: "picture",
            url : "histoire-5.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        
    ],
    1970: [
        {
            date: 1972,
            type: "picture",
            url : "histoire-1.jpg",
            content :"azdazd",
        },
        {
            date: 1973,
            type: "picture",
            url : "histoire-3.jpg",
            content :"azdazd",
        },
        {
            date: 1974,
            type: "picture",
            url : "histoire-2.jpg",
            content :"azdazd",
        },
        {
            date: 1975,
            type: "picture",
            url : "histoire-4.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1976,
            type: "picture",
            url : "histoire-8.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        {
            date: 1977,
            type: "picture",
            url : "histoire-5.jpg",
            content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
        },
        
    ],  

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
    addText(scene,loader,'assets/Hijrnotes_Regular.json',"Années", 0.25, {x:0,y:0,z:position+spaceBetweenYearAndText}, 0xffffff)
}

const addItems = (obj,scene,loader, sidebarContainer,camera, sidebarCursor) => {
    for(let i = 0; i < Object.values(obj).length; i++){
        if (i > 0){
            position -= spaceBetweenYears
        }
        addDate(scene,loader, Object.keys(obj)[i],position)
        Object.values(obj)[i].position = position
        console.log(position)


        for (let j = 0; j <Object.values(obj)[i].length; j++){
            // console.log(Object.values(obj)[i][j].date)
            position -= spaceBetweenElements
            switch (Object.values(obj)[i][j].type){
                case 'picture':
                    addPicture(scene, path + Object.values(obj)[i][j].url, {x: elementsPosition[j%elementsPosition.length].x, y:elementsPosition[j%elementsPosition.length].y, z:position}, Object.values(obj)[i][j].date, Object.values(obj)[i][j].content)
                    break;
                case 'video':
                    addVideo(scene,path + Object.values(obj)[i][j].url, {w:2*16/9, h:2}, {x: elementsPosition[j%elementsPosition.length].x, y:elementsPosition[j%elementsPosition.length].y,z:position}, Object.values(obj)[i][j].date, Object.values(dates)[i][j].content)
                    break;
                default:
                    console.log('error')
            }
        }

    }
    createTimeLine(obj, sidebarContainer,camera, sidebarCursor)
}

const createTimeLine = (obj,sidebarContainer, camera, sidebarCursor) => {
    for(let i = 0; i < Object.values(obj).length; i++){
        var year = document.createElement('div')
        year.classList.add('sidebar-container-year')
        // console.log(Object.keys(obj)[i])
        year.textContent = Object.keys(obj)[i]
        year.id = "annee-"+ Object.keys(obj)[i]
        sidebarContainer.appendChild(year)
        year.addEventListener('click', () => {
            jumpTo(obj, Object.keys(obj)[i],camera, sidebarContainer, sidebarCursor)
            updateTimeLinePosition(sidebarContainer, sidebarCursor, camera)

        })
    }

}
// origin.addEventListener('click', () => {
//     jumpTo(obj, 'origines')
// })

const jumpTo = (obj, year, camera, sidebarContainer, sidebarCursor) => {

    var goodone = Object.entries(obj).filter(entry => entry[0] == year)
    console.log(goodone)
    TweenMax.to(camera.position,1, { ease: Power0.ease, z: goodone[0][1].position + 4 , overwrite : "none"});
    


}


const updateTimeLinePosition = (sidebarContainer, sidebarCursor, camera) => {
    let years = Array.from(sidebarContainer.children)
    for(let j = 0; j< Object.values(dates).length; j++){
        
        if(j == 0 && camera.position.z -5 > Object.values(dates)[j].position ){
            var value = document.querySelector('.origin').getBoundingClientRect().height /2 + document.querySelector('.origin').offsetTop
            TweenMax.to(sidebarCursor.style,1, { ease: Power0.ease, top: value + "px" , overwrite : "none"});


        } else if( j != 0 && camera.position.z -5 < Object.values(dates)[j-1].position && camera.position.z -5 > Object.values(dates)[j].position){
            var value = document.querySelector(`#annee-${Object.keys(dates)[j-1]}`).getBoundingClientRect().height /2 + document.querySelector(`#annee-${Object.keys(dates)[j-1]}`).offsetTop
            TweenMax.to(sidebarCursor.style,1, { ease: Power0.ease, top: value + "px" , overwrite : "none"});

        } 
    }

}




const init = () => {


    const scene = new THREE.Scene()
    var loader = new THREE.FontLoader()
    var mouse = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();
    let picOpened = false
    let picOpenedCoords = {}
    const overlayContainer = document.querySelector('.year-content-overlay')
    const overlayYear = document.querySelector('.year')
    const overlayContent = document.querySelector('.content')
    const sidebarContainer = document.querySelector('.sidebar-container')
    const sidebarCursor = document.querySelector('.sidebar-cursor')
    var nextImage, prevImage
    let canScroll = true;

    TweenMax.set(overlayContainer,{autoAlpha:0});


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



    function onMouseWheel( event) {
        event.preventDefault();
        // console.log(camera.position.z)
        if(!picOpened){
            // camera.position.z -= event.deltaY * 0.001;  
            console.log(event.deltaY )
            TweenMax.to(camera.position,1, { ease: Power0.ease, z: "-=" +event.deltaY /10 , overwrite : "none"});
            
        }else {
            
            if(canScroll){
                closeImage()
                if(event.deltaY > 0){

                    
                    openImage(nextImage)
                   
                
                }else{

                    openImage(prevImage)

                }
                canScroll = false
                setTimeout(()=>{ canScroll = true },3000)
            }
                    
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
        TweenMax.to(camera.rotation,1, { ease: Power0.ease, x: mouse.y / 10, y: - mouse.x / 10, overwrite : "none"});
        TweenMax.to(overlayContent.style,1, {ease: Power0.ease, top: 50 + mouse.y  + '%', left: 50+ - mouse.x   + '%'});
        TweenMax.to(overlayYear.style,1, {ease: Power0.ease, top: 20 + mouse.y  + '%', left: 50+ - mouse.x   + '%'});

        
        updateCursor()
        

    }
    const updateCursor = () => {
        raycaster.setFromCamera( mouse, camera );
        var intersects = raycaster.intersectObjects( scene.children );

        if(picOpened){
            document.querySelector('body').style.cursor = `url(assets/close_cursor.svg), auto`

        } else{
            if(intersects.length && intersects[0].object.type === "Sprite"){
                document.querySelector('body').style.cursor ="pointer";

            } else {
                    document.querySelector('body').style.cursor ="auto";
                }
            }
    }

    const openImage = (obj) => {
        picOpened = true
        picOpenedCoords.name = obj.name
        picOpenedCoords.x = obj.position.x
        picOpenedCoords.y = obj.position.y
        picOpenedCoords.z = obj.position.z
        overlayYear.textContent = obj.name
        overlayContent.textContent = obj.content
        // console.log(picOpenedCoords)
        document.querySelector('body').style.cursor ="pointer";                
        TweenMax.to(obj.position, 0.5, { ease: Power2.easeOut, x:-1, y:0, z: camera.position.z - 2 });
        TweenMax.to(overlayContainer,0.1, {ease: Power2.easeOut, autoAlpha:1 });

        var toHide = scene.children.filter(mesh => mesh.uuid !== obj.uuid)
        toHide.map( mesh => mesh.visible = false)
        console.log(scene.children)
        console.log(obj.uuid)
        for (let i = 0 ; i < scene.children.length; i++){
            if(scene.children[i].uuid == obj.uuid && scene.children[i].type === "Sprite"){
                if(i > 0 && i < scene.children.length){
                    nextImage = scene.children[i+1]
                    prevImage = scene.children[i-1]
                } else if (i = 0) {
                    nextImage = scene.children[i+1]
                    prevImage = scene.children[i]
                }else  {
                    nextImage = scene.children[i]
                    prevImage = scene.children[i - 1]
                }
                
            }
        }

    }

    const closeImage = () => {
        scene.children.map(mesh => mesh.visible = true)
            
        TweenMax.to(scene.getObjectByName(picOpenedCoords.name).position, 0.5, { ease: Power2.easeOut, x:picOpenedCoords.x, y:picOpenedCoords.y, z: picOpenedCoords.z });
        TweenMax.to(overlayContainer,0.1, {ease: Power2.easeOut, autoAlpha:0 });
        picOpened = false
    }
    


    const toggleImageContent = () => {
        var intersects = raycaster.intersectObjects( scene.children );
        if(picOpened){
            closeImage()  
        }else{
            if(intersects.length){
                // console.log(intersects[0].object)
                if(intersects[0].object.type === "Sprite" && !picOpened){

                    openImage(intersects[0].object)

                }
            }
        }
    }

    const handleClick = () => {
        updateCursor()
        toggleImageContent()


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
        updateTimeLinePosition(sidebarContainer, sidebarCursor, camera)
    })

    const animate = () => {
        window.requestAnimationFrame(animate)
        // TODO : Correct bug camera > 4
        if(camera.position.z > 4 ){
            camera.position.z = 4
        }
        updateTimeLinePosition(sidebarContainer, sidebarCursor, camera);
        renderer.render(scene, camera)

    }

    addItems(dates, scene, loader, sidebarContainer, camera, sidebarCursor)
    updateTimeLinePosition(sidebarContainer, sidebarCursor, camera)
    animate()
    console.log(scene.children)



}


init()
