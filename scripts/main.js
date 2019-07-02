"use strict";

var path = "assets/";
var spaceBetweenYears = 5;
var spaceAfterYears = 3;
var spaceBetweenElements = 2;
var spaceBetweenYearAndText = 1;
var position = 0;
var elementsPosition = [
  {
    x: -1.5,
    y: 1
  },
  {
    x: 1.5,
    y: 1
  },
  {
    x: 1.5,
    y: -1
  },
  {
    x: -1.5,
    y: -1
  }
];
var elementsPositionMobile = [
  {
    x: 1,
    y: -1.5
  },
  {
    x: 1,
    y: 1.5
  },
  {
    x: -1,
    y: 1.5
  },
  {
    x: -1,
    y: -1.5
  }
]; // TODO : Random sur le premier element d'une année

var dates = {
  0: [
    {
      date: 1880,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1881,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1882,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1883,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    }
  ],
  1910: [
    {
      date: 1912,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1913,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1914,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1915,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1916,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1917,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    }
  ],
  1920: [
    {
      date: 1922,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1925,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    }
  ],
  1930: [
    {
      date: 1932,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1935,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    }
  ],
  1940: [
    {
      date: 1942,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1945,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    }
  ],
  1950: [
    {
      date: 1952,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1953,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1954,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1955,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1956,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1957,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    }
  ],
  1960: [
    {
      date: 1962,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1963,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1964,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1965,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1966,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1967,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    }
  ],
  1970: [
    {
      date: 1972,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1973,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1974,
      type: "picture",
      url: "histoire-6.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1975,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1976,
      type: "picture",
      url: "histoire-3.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    },
    {
      date: 1977,
      type: "picture",
      url: "histoire-4.jpg",
      content:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
    }
  ] // 1980: [
  //     {
  //         date: 1972,
  //         type: "picture",
  //         url : "histoire-6.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1973,
  //         type: "picture",
  //         url : "histoire-3.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1974,
  //         type: "picture",
  //         url : "histoire-6.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1975,
  //         type: "picture",
  //         url : "histoire-4.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  //     {
  //         date: 1976,
  //         type: "picture",
  //         url : "histoire-3.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  //     {
  //         date: 1977,
  //         type: "picture",
  //         url : "histoire-4.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  // ],
  // 1990: [
  //     {
  //         date: 1972,
  //         type: "picture",
  //         url : "histoire-6.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1973,
  //         type: "picture",
  //         url : "histoire-3.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1974,
  //         type: "picture",
  //         url : "histoire-6.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1975,
  //         type: "picture",
  //         url : "histoire-4.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  //     {
  //         date: 1976,
  //         type: "picture",
  //         url : "histoire-3.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  //     {
  //         date: 1977,
  //         type: "picture",
  //         url : "histoire-4.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  // ],
  // 2000: [
  //     {
  //         date: 1972,
  //         type: "picture",
  //         url : "histoire-6.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1973,
  //         type: "picture",
  //         url : "histoire-3.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1974,
  //         type: "picture",
  //         url : "histoire-6.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1975,
  //         type: "picture",
  //         url : "histoire-4.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  //     {
  //         date: 1976,
  //         type: "picture",
  //         url : "histoire-3.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  //     {
  //         date: 1977,
  //         type: "picture",
  //         url : "histoire-4.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  // ],
  // 2010: [
  //     {
  //         date: 1972,
  //         type: "picture",
  //         url : "histoire-6.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1973,
  //         type: "picture",
  //         url : "histoire-3.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1974,
  //         type: "picture",
  //         url : "histoire-6.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
  //     },
  //     {
  //         date: 1975,
  //         type: "picture",
  //         url : "histoire-4.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  //     {
  //         date: 1976,
  //         type: "picture",
  //         url : "histoire-3.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  //     {
  //         date: 1977,
  //         type: "picture",
  //         url : "histoire-4.jpg",
  //         content :"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" ,
  //     },
  // ],
};

var addVideo = function addVideo(scene, url, size, position, name, content) {
  video = document.createElement("video");
  video.src = url;
  video.muted = "true";
  video.load(); // TODO Support play device

  video.play();
  var texture = new THREE.VideoTexture(video);
  texture.needsUpdate;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.format = THREE.RGBFormat;
  texture.crossOrigin = "anonymous";
  var video = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(size.w, size.h),
    new THREE.MeshBasicMaterial({
      map: texture
    })
  );
  video.position.set(position.x, position.y, position.z);
  video.name = name;
  video.content = content;

  video.callback = function() {
    console.log("hello");
  };

  scene.add(video);
};

function normalize(val, max, min) {
  return (val - min) / (max - min);
}

var addPicture = function addPicture(scene, url, position, name, content) {
  var map = new THREE.TextureLoader().load(url);
  var img = document.createElement("img");
  var result;
  img.src = url;

  img.onload = function() {
    img.style.visibility = "hidden";
    document.body.appendChild(img);
    var width = img.clientWidth;
    var height = img.clientHeight;
    document.body.removeChild(img);
    sprite.scale.set(
      normalize(width, 3000, 0) * 1.5,
      normalize(height, 3000, 0) * 1.5,
      0.0001
    );
  };

  var material = new THREE.SpriteMaterial({
    map: map
  });
  material.minFilter = THREE.LinearFilter;
  material.magFilter = THREE.LinearFilter;
  var sprite = new THREE.Sprite(material);
  sprite.name = name;
  sprite.content = content;
  sprite.position.set(position.x, position.y, position.z);
  scene.add(sprite);
};

var addText = function addText(
  scene,
  loader,
  url,
  content,
  size,
  position,
  color,
  opacity
) {
  loader.load(url, function(font) {
    var shapes = font.generateShapes(content, size);
    text = new THREE.Mesh(
      new THREE.ShapeBufferGeometry(shapes),
      new THREE.MeshBasicMaterial({
        color: color,
        opacity: opacity,
        transparent: true
      })
    );
    text.position.set(position.x, position.y, position.z);
    text.geometry.center();
    scene.add(text);
  });
};

var addDate = function addDate(scene, loader, date, position) {
  addText(
    scene,
    loader,
    "assets/Montserrat_Bold.json",
    date,
    2,
    {
      x: 0,
      y: 0,
      z: position
    },
    0x24282e,
    0.9
  );
  addText(
    scene,
    loader,
    "assets/Hijrnotes_Regular.json",
    "Années",
    0.25,
    {
      x: 0,
      y: 0,
      z: position + spaceBetweenYearAndText
    },
    0xffffff,
    1
  );
};

var addItemsMobile = function addItemsMobile(
  obj,
  scene,
  loader,
  sidebarContainer,
  camera,
  sidebarCursor
) {
  for (var i = 0; i < Object.values(obj).length; i++) {
    if (i > 0) {
      position -= spaceBetweenYears;
      addDate(scene, loader, Object.keys(obj)[i], position);
      Object.values(obj)[i].position = position;
    }

    console.log(position);

    for (var j = 0; j < Object.values(obj)[i].length; j++) {
      if (j == 0 && i !== 0) {
        position -= spaceAfterYears;
      }

      position -= spaceBetweenElements;

      switch (Object.values(obj)[i][j].type) {
        case "picture":
          addPicture(
            scene,
            path + Object.values(obj)[i][j].url,
            {
              x: elementsPositionMobile[j % elementsPositionMobile.length].x,
              y: elementsPositionMobile[j % elementsPositionMobile.length].y,
              z: position
            },
            Object.values(obj)[i][j].date,
            Object.values(obj)[i][j].content
          );
          break;

        case "video":
          addVideo(
            scene,
            path + Object.values(obj)[i][j].url,
            {
              w: (2 * 16) / 9,
              h: 2
            },
            {
              x: elementsPositionMobile[j % elementsPositionMobile.length].x,
              y: elementsPositionMobile[j % elementsPositionMobile.length].y,
              z: position
            },
            Object.values(obj)[i][j].date,
            Object.values(dates)[i][j].content
          );
          break;

        default:
          console.log("error");
      }
    }
  }
};

var addItems = function addItems(
  obj,
  scene,
  loader,
  sidebarContainer,
  camera,
  sidebarCursor
) {
  for (var i = 0; i < Object.values(obj).length; i++) {
    if (i > 0) {
      position -= spaceBetweenYears;
      addDate(scene, loader, Object.keys(obj)[i], position);
      Object.values(obj)[i].position = position;
    }

    console.log(position);

    for (var j = 0; j < Object.values(obj)[i].length; j++) {
      if (j == 0 && i !== 0) {
        position -= spaceAfterYears;
      }

      position -= spaceBetweenElements;

      switch (Object.values(obj)[i][j].type) {
        case "picture":
          addPicture(
            scene,
            path + Object.values(obj)[i][j].url,
            {
              x: elementsPosition[j % elementsPosition.length].x,
              y: elementsPosition[j % elementsPosition.length].y,
              z: position
            },
            Object.values(obj)[i][j].date,
            Object.values(obj)[i][j].content
          );
          break;

        case "video":
          addVideo(
            scene,
            path + Object.values(obj)[i][j].url,
            {
              w: (2 * 16) / 9,
              h: 2
            },
            {
              x: elementsPosition[j % elementsPosition.length].x,
              y: elementsPosition[j % elementsPosition.length].y,
              z: position
            },
            Object.values(obj)[i][j].date,
            Object.values(dates)[i][j].content
          );
          break;

        default:
          console.log("error");
      }
    }
  }

  createTimeLine(obj, sidebarContainer, camera, sidebarCursor);
};

var createTimeLine = function createTimeLine(
  obj,
  sidebarContainer,
  camera,
  sidebarCursor
) {
  var _loop = function _loop(i) {
    year = document.createElement("div");
    year.classList.add("sidebar-container-year"); // console.log(Object.keys(obj)[i])

    year.textContent = Object.keys(obj)[i];
    year.id = "annee-" + Object.keys(obj)[i];
    sidebarContainer.appendChild(year);
    year.addEventListener("click", function() {
      jumpTo(obj, Object.keys(obj)[i], camera, sidebarContainer, sidebarCursor);
      updateTimeLinePosition(sidebarContainer, sidebarCursor, camera, sidebar); // TweenMax.to(document.querySelector('.intro'),0.5,{autoAlpha:0, scale: 5, onComplete: () =>{intro.style.display = 'none'}})
    });
  };

  for (var i = 1; i < Object.values(obj).length; i++) {
    var year;

    _loop(i);
  }
};

var jumpTo = function jumpTo(
  obj,
  year,
  camera,
  sidebarContainer,
  sidebarCursor
) {
  var goodone = Object.entries(obj).filter(function(entry) {
    return entry[0] == year;
  }); // console.log(goodone[0][1].position)
  // console.log(1 - goodone[0][1].position / 100)

  TweenMax.to(camera.position, 2, {
    ease: Power4.easeOut,
    z: goodone[0][1].position + 4,
    overwrite: "none"
  });
};

var updateTimeLinePosition = function updateTimeLinePosition(
  sidebarContainer,
  sidebarCursor,
  camera,
  sidebar
) {
  if (window.innerHeight < window.innerWidth) {
    var years = Array.from(sidebarContainer.children);
    document.querySelector(".origin").classList.remove("active");

    for (var j = 0; j < Object.values(dates).length; j++) {
      if (j != 0) {
        document
          .querySelector("#annee-".concat(Object.keys(dates)[j]))
          .classList.remove("active");
      }

      if (
        j == 0 &&
        camera.position.z - 5 > Object.values(dates)[j + 1].position
      ) {
        var value =
          document.querySelector(".origin").getBoundingClientRect().height / 2 +
          document.querySelector(".origin").offsetTop;
        TweenMax.to(sidebarCursor.style, 1, {
          ease: Power0.ease,
          top: value + "px",
          overwrite: "none"
        });
        document.querySelector(".origin").classList.add("active");
      } else if (
        j != 0 &&
        camera.position.z - 5 < Object.values(dates)[j - 1].position &&
        camera.position.z - 5 > Object.values(dates)[j].position
      ) {
        var value =
          document
            .querySelector("#annee-".concat(Object.keys(dates)[j - 1]))
            .getBoundingClientRect().height /
            2 +
          document.querySelector("#annee-".concat(Object.keys(dates)[j - 1]))
            .offsetTop;
        TweenMax.to(sidebarCursor.style, 1, {
          ease: Power0.ease,
          top: value + "px",
          overwrite: "none"
        });
        document
          .querySelector("#annee-".concat(Object.keys(dates)[j - 1]))
          .classList.add("active");
      }

      if (
        camera.position.z - 5 <
        Object.values(dates)[Object.values(dates).length - 1].position
      ) {
        var value =
          document
            .querySelector(
              "#annee-".concat(
                Object.keys(dates)[Object.values(dates).length - 1]
              )
            )
            .getBoundingClientRect().height /
            2 +
          document.querySelector(
            "#annee-".concat(
              Object.keys(dates)[Object.values(dates).length - 1]
            )
          ).offsetTop;
        TweenMax.to(sidebarCursor.style, 1, {
          ease: Power0.ease,
          top: value + "px",
          overwrite: "none"
        });
        document
          .querySelector(
            "#annee-".concat(
              Object.keys(dates)[Object.values(dates).length - 1]
            )
          )
          .classList.add("active");
      }
    }
  } else {
    sidebar.style.display = "none";
  }
};

var init = function init() {
  var scene = new THREE.Scene();
  var loader = new THREE.FontLoader();
  var mouse = new THREE.Vector2();
  var raycaster = new THREE.Raycaster();
  var picOpened = false;
  var picOpenedCoords = {};
  var container = document.querySelector(".story-container");
  var overlayContainer = document.querySelector(".overlay");
  var overlayYear = document.querySelector(".year");
  var overlayContent = document.querySelector(".content");
  var overlayContainerMobile = document.querySelector(".mobile-overlay");
  var overlayYearMobile = document.querySelector(".mobile-overlay-year");
  var overlayContentMobile = document.querySelector(".mobile-overlay-content");
  var overlayImageMobile = document.querySelector(".mobile-overlay-image");
  var overlayCloseMobile = document.querySelector(".mobile-overlay-close");
  var sidebar = document.querySelector(".sidebar");
  var sidebarContainer = document.querySelector(".sidebar-container");
  var sidebarCursor = document.querySelector(".sidebar-cursor");
  var intro = document.querySelector(".intro");
  var progress = document.querySelector(".progress");
  var progressContainer = document.querySelector(".progress-container");
  var progressBar = document.querySelector(".progression");
  var progressNumber = document.querySelector(".progressNumber");
  var scrollItem = document.querySelector(".scroll");
  var nextImage, prevImage, baseAlpha, baseBeta;
  var canScroll = true;
  var canBounce = true;
  var loadingComplete = false;
  var initialOrientation = true;
  document.querySelector(".origin").addEventListener("click", function() {
    TweenMax.to(camera.position, 1, {
      ease: Power0.ease,
      z: 4,
      overwrite: "none"
    });
  }); // THREE.DefaultLoadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
  //     progress.innerText = 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
  // };

  THREE.DefaultLoadingManager.onLoad = function() {
    // progress.innerText = 'Chargement terminé !'
    onLoadingComplete();
  };

  THREE.DefaultLoadingManager.onProgress = function(
    url,
    itemsLoaded,
    itemsTotal
  ) {
    progressNumber.innerText =
      Math.floor((itemsLoaded / itemsTotal) * 100) + " %";
    progressBar.style.width = (itemsLoaded / itemsTotal) * 100 + "%";
  };

  THREE.DefaultLoadingManager.onError = function(url) {
    progress.innerText = "There was an error loading " + url;
  };

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var camera = new THREE.PerspectiveCamera(
    70,
    windowWidth / windowHeight,
    0.001,
    1000
  );
  camera.position.z = 4;
  camera.lookAt(0, 0, 0);
  scene.add(camera);
  var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(windowWidth, windowHeight);
  renderer.shadowMap.enabled = true;
  renderer.domElement.id = "canvas-histoire";
  container.appendChild(renderer.domElement);

  var onLoadingComplete = function onLoadingComplete() {
    loadingComplete = true;
    TweenMax.to(progress, 0.5, {
      opacity: 0,
      onComplete: function onComplete() {
        // progress.style.display= 'none'
        TweenMax.to(scrollItem, 0.5, {
          opacity: 1
        });
      }
    });
    TweenMax.to(renderer.domElement, 1, {
      opacity: 1
    });
    TweenMax.to(sidebar, 1, {
      opacity: 1
    });
  };

  scene.background = new THREE.TextureLoader().load(path + "background.png");
  scene.fog = new THREE.Fog(0x0c1015, 2, 10); // TODO : Opti fog

  var start = {
    x: 0,
    y: 0
  };

  function onMouseWheel(event) {
    event.preventDefault();
    updateTimeLinePosition(sidebarContainer, sidebarCursor, camera, sidebar);

    if (typeof event.deltaY !== "undefined") {
      if (loadingComplete) {
        if (!picOpened) {
          TweenMax.to(progressContainer, 0.25, {
            opacity: 0,
            onComplete: function onComplete() {
              progressContainer.style.display = "none";
            }
          });
          var move = scale(event.deltaY, -300, 300, -50, 50);

          if (camera.position.z - move <= 4) {
            // camera.position.z -= move;
            TweenMax.to(camera.position, 1, {
              ease: Power0.easeInOut,
              z: "-=" + move,
              overwrite: "all"
            });
          }

          if (camera.position.z - move >= 4) {
            // camera.position.z = 4;
            TweenMax.to(camera.position, 0.25, {
              ease: Power0.easeInOut,
              z: 4,
              delay: 0.25,
              overwrite: "all"
            });
          }
        } else {
          if (canScroll) {
            if (event.deltaY > 0) {
              toggleImage(nextImage, 0);
            } else {
              toggleImage(prevImage, 1);
            }

            canScroll = false;
            setTimeout(function() {
              canScroll = true;
            }, 1000);
          }
        }
      }
    } else {
      if (loadingComplete) {
        if (!picOpened) {
          TweenMax.to(progressContainer, 0.25, {
            opacity: 0,
            onComplete: function onComplete() {
              progressContainer.style.display = "none";
            }
          });

          var _move = scale(event.detail, -50, 50, -80, 80);

          if (camera.position.z - _move <= 4) {
            // camera.position.z -= move;
            TweenMax.to(camera.position, 1, {
              ease: Power0.easeInOut,
              z: "-=" + _move,
              overwrite: "all"
            });
          }

          if (camera.position.z - _move >= 4) {
            // camera.position.z = 4;
            TweenMax.to(camera.position, 0.25, {
              ease: Power0.easeInOut,
              z: 4,
              delay: 0.25,
              overwrite: "all"
            });
          }
        } else {
          if (canScroll) {
            if (event.detail > 0) {
              toggleImage(nextImage, 0);
            } else {
              toggleImage(prevImage, 1);
            }

            canScroll = false;
            setTimeout(function() {
              canScroll = true;
            }, 1000);
          }
        }
      }
    }
  }

  function touchStart(event) {
    console.log("touch");
    event.preventDefault();
    start.x = event.touches[0].pageX;
    start.y = event.touches[0].pageY;
    mouse.x = +(event.targetTouches[0].pageX / window.innerWidth) * 2 + -1;
    mouse.y = -(event.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
  }

  function touchEnd(event) {
    handleTouch(mouse);
  }

  function touchMove(event) {
    event.preventDefault();
    offset = {};
    offset.x = start.x - event.touches[0].pageX;
    offset.y = start.y - event.touches[0].pageY;
    updateTimeLinePosition(sidebarContainer, sidebarCursor, camera, sidebar);

    if (loadingComplete) {
      if (!picOpened) {
        TweenMax.to(progressContainer, 0.25, {
          opacity: 0,
          onComplete: function onComplete() {
            progressContainer.style.display = "none";
          }
        });
        var move = scale(offset.y, -300, 300, 30, -30);

        if (camera.position.z - move <= 4.2) {
          // camera.position.z -= move;
          TweenMax.to(camera.position, 0.5, {
            ease: Power0.easeInOut,
            z: "-=" + move,
            overwrite: "none"
          });
        }

        if (camera.position.z - move >= 4) {
          TweenMax.to(camera.position, 1, {
            ease: Power0.easeInOut,
            z: 4,
            overwrite: "none"
          });
        }
      } else {
        if (canScroll) {
          if (offset.y > 0) {
            toggleImage(nextImage, 0);
          } else {
            toggleImage(prevImage, 1);
          }

          canScroll = false;
          setTimeout(function() {
            canScroll = true;
          }, 1000);
        }
      }
    }
  }

  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1; // camera.rotation.x =  mouse.y / 20

    TweenMax.to(camera.rotation, 1, {
      ease: Power0.ease,
      x: mouse.y / 10,
      y: -mouse.x / 10,
      overwrite: "none"
    });
    TweenMax.to(overlayContent.style, 1, {
      ease: Power0.ease,
      top: 50 + mouse.y + "%",
      left: "+=" - mouse.x + "%"
    });
    TweenMax.to(overlayYear.style, 1, {
      ease: Power0.ease,
      top: 20 + mouse.y + "%",
      left: "+=" - mouse.x + "%"
    });
    updateCursor();
  }

  var updateCursor = function updateCursor() {
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);

    if (picOpened) {
      document.querySelector("body").style.cursor =
        "url(assets/close_cursor.svg) 25 25, auto";
    } else {
      if (intersects.length && intersects[0].object.type === "Sprite") {
        document.querySelector("body").style.cursor = "pointer";
      } else {
        document.querySelector("body").style.cursor = "auto";
      }
    }
  };

  var openImage = function openImage(obj) {
    picOpened = true;
    picOpenedCoords.name = obj.name;
    picOpenedCoords.x = obj.position.x;
    picOpenedCoords.y = obj.position.y;
    picOpenedCoords.z = obj.position.z;
    overlayYear.textContent = obj.name;
    overlayContent.textContent = obj.content;
    document.querySelector("body").style.cursor = "pointer";

    if (picOpenedCoords.x > 0) {
      overlayContent.classList.add("content-left");

      if (overlayContent.classList.contains("content-right")) {
        overlayContent.classList.remove("content-right");
      }
    } else {
      overlayContent.classList.add("content-right");

      if (overlayContent.classList.contains("content-left")) {
        overlayContent.classList.remove("content-left");
      }
    }

    TweenMax.to(camera.position, 1, {
      ease: Power2.easeInOut,
      x: obj.position.x * 0.6,
      y: obj.position.y,
      z: obj.position.z + 1.5
    });
    overlayContainer.style.display = "block";
    TweenMax.to(overlayContainer, 0.5, {
      ease: Power2.easeInOut,
      delay: 0.75,
      opacity: 1,
      scale: 1
    });
    var toHide = scene.children.filter(function(mesh) {
      return mesh.uuid !== obj.uuid && mesh.type !== "PerspectiveCamera";
    });
    toHide.map(function(mesh) {
      TweenMax.to(mesh.material, 1, {
        ease: Power2.easeInOut,
        opacity: 0.1
      });
    });

    for (var i = 0; i < scene.children.length; i++) {
      if (
        scene.children[i].uuid == obj.uuid &&
        scene.children[i].type === "Sprite"
      ) {
        if (i > 0 && i < scene.children.length) {
          nextImage = scene.children[i + 1];
          prevImage = scene.children[i - 1];
        } else if ((i = 0)) {
          nextImage = scene.children[i + 1];
          prevImage = scene.children[i];
        } else {
          nextImage = scene.children[i];
          prevImage = scene.children[i - 1];
        }
      }
    }
  };

  var openImageMobile = function openImageMobile(obj) {
    picOpened = true;
    picOpenedCoords.name = obj.name;
    overlayYearMobile.textContent = obj.name;
    overlayContentMobile.textContent = obj.content;
    overlayImageMobile.src = obj.material.map.image.currentSrc;
    overlayContainerMobile.style.display = "flex";
    overlayCloseMobile.style.display = "block";
    TweenMax.to(overlayContainerMobile, 0.5, {
      ease: Power2.easeInOut,
      opacity: 1,
      scale: 1
    });
    TweenMax.to(overlayCloseMobile, 0.5, {
      ease: Power2.easeInOut,
      opacity: 1,
      scale: 1
    });
  };

  var closeImageMobile = function closeImageMobile() {
    TweenMax.to(overlayCloseMobile, 0.5, {
      ease: Power2.easeInOut,
      opacity: 0,
      scale: 0.9,
      onComplete: function onComplete() {
        return (overlayContainer.style.display = "none");
      }
    });
    TweenMax.to(overlayContainerMobile, 0.5, {
      ease: Power2.easeInOut,
      opacity: 0,
      scale: 0.9,
      onComplete: function onComplete() {
        return (overlayContainerMobile.style.display = "none");
      }
    });
    picOpened = false;
  };

  overlayCloseMobile.addEventListener("touchstart", function() {
    closeImageMobile();
  });

  var scale = function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  var updateIntro = function updateIntro(cameraPos) {
    opacity = scale(cameraPos, 0, 4, 0, 1);
    scaleIntro = scale(cameraPos, 4, -2, 1, 10);

    if (scaleIntro < 0.7) {
      scaleIntro = 0.7;
    }

    intro.style.opacity = opacity; // intro.style.transform = 'scale('+scaleIntro+') translateX(-50%)'

    TweenMax.to(intro, 0, {
      scale: scaleIntro,
      translateX: "-50%"
    });

    if (opacity <= 0) {
      intro.style.display = "none";
    } else {
      intro.style.display = "flex";
    }
  };

  var closeImage = function closeImage() {
    var toShow = scene.children.filter(function(mesh) {
      return mesh.type !== "PerspectiveCamera";
    });
    toShow.map(function(mesh) {
      if (mesh.type == "Mesh") {
        TweenMax.to(mesh.material, 0.5, {
          ease: Power2.easeInOut,
          opacity: 0.9
        });
      } else {
        TweenMax.to(mesh.material, 0.5, {
          ease: Power2.easeInOut,
          opacity: 1
        });
      }
    }); // TweenMax.to(scene.getObjectByName(picOpenedCoords.name).position, 0.5, { ease: Power2.easeInOut, x:picOpenedCoords.x, y:picOpenedCoords.y, z: picOpenedCoords.z });

    TweenMax.to(camera.position, 1, {
      ease: Power2.easeInOut,
      x: 0,
      y: 0,
      z: picOpenedCoords.z + 2
    });
    TweenMax.to(overlayContainer, 0.5, {
      ease: Power2.easeInOut,
      opacity: 0,
      scale: 0.9,
      onComplete: function onComplete() {
        return (overlayContainer.style.display = "none");
      }
    });
    picOpened = false;
  };

  var toggleImage = function toggleImage(obj, way) {
    picOpened = true;
    picOpenedCoords.name = obj.name;
    picOpenedCoords.x = obj.position.x;
    picOpenedCoords.y = obj.position.y;
    picOpenedCoords.z = obj.position.z;
    document.querySelector("body").style.cursor = "pointer";
    TweenMax.to(camera.position, 1, {
      ease: Power2.easeInOut,
      x: obj.position.x * 0.6,
      y: obj.position.y,
      z: obj.position.z + 1.5
    });

    if (way === 1) {
      TweenMax.to(overlayContainer, 0.5, {
        ease: Power2.easeInOut,
        opacity: 0,
        scale: 0.8,
        onComplete: function onComplete() {
          overlayYear.textContent = obj.name;
          overlayContent.textContent = obj.content;
          overlayContainer.style.transform = "scale(0)";

          if (picOpenedCoords.x > 0) {
            overlayContent.classList.add("content-left");

            if (overlayContent.classList.contains("content-right")) {
              overlayContent.classList.remove("content-right");
            }
          } else {
            overlayContent.classList.add("content-right");

            if (overlayContent.classList.contains("content-left")) {
              overlayContent.classList.remove("content-left");
            }
          }

          TweenMax.to(overlayContainer, 0.5, {
            ease: Power2.easeInOut,
            opacity: 1,
            scale: 1
          });
        }
      });
    } else {
      TweenMax.to(overlayContainer, 0.5, {
        ease: Power2.easeInOut,
        opacity: 0,
        scale: 1.2,
        onComplete: function onComplete() {
          overlayYear.textContent = obj.name;
          overlayContent.textContent = obj.content;

          if (picOpenedCoords.x > 0) {
            overlayContent.classList.add("content-left");

            if (overlayContent.classList.contains("content-right")) {
              overlayContent.classList.remove("content-right");
            }
          } else {
            overlayContent.classList.add("content-right");

            if (overlayContent.classList.contains("content-left")) {
              overlayContent.classList.remove("content-left");
            }
          }

          TweenMax.fromTo(
            overlayContainer,
            0.5,
            {
              ease: Power2.easeInOut,
              opacity: 0,
              scale: 0.8
            },
            {
              ease: Power2.easeInOut,
              opacity: 1,
              scale: 1
            }
          );
        }
      });
    }

    var toShow = scene.children.filter(function(mesh) {
      return mesh.type !== "PerspectiveCamera";
    });
    toShow.map(function(mesh) {
      if (mesh.type == "Mesh") {
        TweenMax.to(mesh.material, 0.5, {
          ease: Power2.easeInOut,
          opacity: 0.9
        });
      } else {
        TweenMax.to(mesh.material, 0.5, {
          ease: Power2.easeInOut,
          opacity: 1
        });
      }
    });
    var toHide = scene.children.filter(function(mesh) {
      return mesh.uuid !== obj.uuid && mesh.type !== "PerspectiveCamera";
    });
    toHide.map(function(mesh) {
      TweenMax.to(mesh.material, 1, {
        ease: Power2.easeInOut,
        opacity: 0.1
      });
    });

    for (var i = 0; i < scene.children.length; i++) {
      if (
        scene.children[i].uuid == obj.uuid &&
        scene.children[i].type === "Sprite"
      ) {
        if (i > 0 && i < scene.children.length) {
          nextImage = scene.children[i + 1];
          prevImage = scene.children[i - 1];
        } else if ((i = 0)) {
          nextImage = scene.children[i + 1];
          prevImage = scene.children[i];
        } else {
          nextImage = scene.children[i];
          prevImage = scene.children[i - 1];
        }
      }
    }
  };

  var toggleImageContent = function toggleImageContent() {
    console.log(raycaster);
    var intersects = raycaster.intersectObjects(scene.children);

    if (picOpened) {
      closeImage();
    } else {
      if (intersects.length) {
        // console.log(intersects[0].object)
        if (intersects[0].object.type === "Sprite" && !picOpened) {
          openImage(intersects[0].object);
        }
      }
    }
  };

  var handleTouch = function handleTouch(tar) {
    raycaster.setFromCamera(tar, camera);
    console.log(raycaster);
    var intersects = raycaster.intersectObjects(scene.children);
    console.log(intersects);

    if (intersects.length) {
      // console.log(intersects[0].object)
      if (intersects[0].object.type === "Sprite" && !picOpened) {
        openImageMobile(intersects[0].object);
      }
    }
  };

  var handleClick = function handleClick() {
    updateCursor();
    toggleImageContent();
  }; // // TODO : Handle Mobile Orientation
  // const handleOrientation = (event,initialOrientation) => {
  //     if(initialOrientation){
  //         baseBeta = event.beta
  //         baseAlpha = event.alpha
  //         initialOrientation = false
  //     }
  //     camera.rotation.x +=  (baseBeta - event.beta) /100
  //     camera.rotation.y +=  (baseAlpha - event.alpha) /100
  // }
  // window.addEventListener('deviceorientation', (e) =>{handleOrientation(e,initialOrientation)}, false);

  renderer.domElement.addEventListener("mousewheel", onMouseWheel, {
    passive: false
  });
  renderer.domElement.addEventListener("DOMMouseScroll", onMouseWheel, {
    passive: false
  });
  renderer.domElement.addEventListener("touchstart", touchStart, {
    passive: false
  });
  renderer.domElement.addEventListener("touchend", touchEnd, {
    passive: false
  });
  renderer.domElement.addEventListener("touchmove", touchMove, {
    passive: false
  });
  renderer.domElement.addEventListener("mousemove", onMouseMove, false);
  renderer.domElement.addEventListener("click", handleClick, false);
  overlayContainer.addEventListener("click", handleClick, false);
  overlayContainer.addEventListener("mousewheel", onMouseWheel, {
    passive: false
  });
  overlayContainer.addEventListener("mousemove", onMouseMove, false);
  intro.addEventListener("mousewheel", onMouseWheel, {
    passive: false
  });
  intro.addEventListener("touchstart", touchStart, {
    passive: false
  });
  intro.addEventListener("touchmove", touchMove, {
    passive: false
  });
  intro.addEventListener("mousemove", onMouseMove, false);
  intro.addEventListener("click", handleClick, false);
  window.addEventListener("resize", function() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(windowWidth, windowHeight);
    updateTimeLinePosition(sidebarContainer, sidebarCursor, camera, sidebar);
  });

  var animate = function animate() {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    updateTimeLinePosition(sidebarContainer, sidebarCursor, camera, sidebar);

    if (camera.position.z >= -2) {
      updateIntro(camera.position.z);
    }
  };

  if (window.innerHeight > window.innerWidth) {
    addItemsMobile(
      dates,
      scene,
      loader,
      sidebarContainer,
      camera,
      sidebarCursor
    );
  } else {
    addItems(dates, scene, loader, sidebarContainer, camera, sidebarCursor);
  }

  animate();
  console.log(scene.children);
};

init(); // var delta,memo_delta;
// var isFirefox = (navigator.userAgent.indexOf("Firefox") != -1) ;
// var handleWheel = function (event)
// {
//  var e = window.event || event;
//  delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
//  change_slide(delta,e.wheelDelta);
//  e.preventDefault();
// };
// var addMouseWheelEventListener = function (scrollHandler)
// {
//  if (window.addEventListener)
//  {
//   // IE9+, Chrome, Safari, Opera
//   window.addEventListener("mousewheel", scrollHandler, false);
//   // Firefox
//   window.addEventListener("DOMMouseScroll", scrollHandler, false);
//  }
//  else
//  {
//   // // IE 6/7/8
//   window.attachEvent("onmousewheel", scrollHandler);
//  }
// }
// addMouseWheelEventListener(handleWheel);
