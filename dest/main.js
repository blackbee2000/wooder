console.log("Hello CFD");
//Hamburger button show menu
function showNavMenu() {
  console.log("Hello CFD");
  let nav = document.querySelector("body");
  nav.classList.toggle("menu-two");
}

//Active Menu

let menuHeader = document.querySelectorAll("header .menu li a");
for (let i = 0; i < menuHeader.length; i++) {
  menuHeader[i].addEventListener("click", function () {
    menuHeader.forEach(function (menuItem) {
      menuItem.classList.remove("activeMenu");
    });
    this.classList.add("activeMenu");
  });
}
//Change Language
let lang = document.querySelector(".language");
lang.addEventListener("click", function (e) {
  e.stopPropagation();
  lang.classList.toggle("active");
});
document.addEventListener("click", function () {
  lang.classList.remove("active");
});
let langCurrent = document.querySelector(".language .language__current span");
let langitems = document.querySelectorAll(".language .language__option a");
langitems.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(this);
    let langReverse = langCurrent.textContent;
    langCurrent.innerHTML = item.textContent;
    this.innerHTML = langReverse;
  });
});

//Scroll Background for Header
let header = document.querySelector("header");
let slider = document.querySelector(".slider");

function changeBackground() {
  let scrollY = window.pageYOffset;
  if (scrollY > slider.clientHeight - header.clientHeight) {
    header.classList.add("backgroundBlack");
  } else {
    header.classList.remove("backgroundBlack");
  }
}
document.addEventListener("scroll", function () {
  toTop();
  changeBackground();
});

//Back to Top
function backToTop() {
  window.scrollTo(0, 0);
}

function toTop() {
  let toTop = document.querySelector(".toTop");
  let getHeightScoll = window.innerHeight;
  let scrollY = window.pageYOffset;
  if (scrollY > getHeightScoll) {
    toTop.classList.add("showButtonToTop");
  } else {
    toTop.classList.remove("showButtonToTop");
  }
  toTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

//Slider
// let listSlider = document.querySelectorAll('.slider__img-item');
// let pageNumber = document.querySelector('.page__number');
// let listDotted = document.querySelectorAll('.page__dotted li');
// let currentPosition = 0;
// for(let i = 0; i < listSlider.length; i++){
//     if(listSlider[i].classList.contains('active')){
//         currentPosition = i;
//     }
// }

// function showPageNumber(index){
//     pageNumber.innerHTML = (index).toString().padStart(2, '0');
// }
// //--> Page Number
// showPageNumber(currentPosition + 1);
// listDotted[currentPosition].classList.add('isSelected');

// let next = document.querySelector('.--next');
// next.addEventListener('click', function(){
//     if(currentPosition < (listSlider.length- 1)){
//         goTo(currentPosition + 1);
//     }
//     else{
//         goTo(0);
//     }

// })

// let prev = document.querySelector('.--prev');
// prev.addEventListener('click', function(){
//     if(currentPosition > 0)
//     {
//         goTo(currentPosition - 1);
//     }
//     else{
//         goTo(listSlider.length - 1);
//     }
// })

// function goTo(index){
//     console.log("Linh Đẹp Trai");
//     listSlider[currentPosition].classList.remove('active');
//     listSlider[index].classList.add('active');
//     listDotted[currentPosition].classList.remove('isSelected');
//     listDotted[index].classList.add('isSelected');
//     currentPosition = index;
//     showPageNumber(currentPosition + 1);
// }

// for(let i = 0; i < listDotted.length; i++){
//     listDotted[i].addEventListener('click', function(){
//         goTo(i);
//     });
// }

// Popup video
let playVideo = document.querySelectorAll(".btn-play-video");
let popupVideo = document.querySelector(".popup-video");
let closeVideo = document.querySelector(".close");
let iframe = document.querySelector(".popup-video .iframe-video iframe");
playVideo.forEach(function (btnPlayVideo) {
  btnPlayVideo.addEventListener("click", function () {
    let videoID = btnPlayVideo.getAttribute("data-id-video");
    popupVideo.style.display = "flex";
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoID);
  });
});
closeVideo.addEventListener("click", function () {
  iframe.setAttribute("src", "");
  popupVideo.style.display = "none";
});
//Tags
let tagsTitle = document.querySelectorAll(".news-tags-title");
let newsList = document.querySelectorAll(".news-list");

for (let i = 0; i < tagsTitle.length; i++) {
  tagsTitle[i].addEventListener("click", function () {
    let tagsID = i + 1;
    tagsTitle.forEach(function (tag) {
      tag.classList.remove("tags-selected");
    });
    newsList.forEach(function (news) {
      news.classList.remove("show-list");
    });
    this.classList.add("tags-selected");
    document.querySelector(".news-list-" + tagsID).classList.add("show-list");
  });
}

$(document).ready(function () {
  console.log("linh duy linh!");
  //Flickity
  let $carousel = $(".slider__img");
  $carousel.flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
      ready: function () {
        let dotted = $(".flickity-page-dots");
        let paging = $(".page__dotted");
        dotted.appendTo(paging);
      },
      change: function (index) {
        let pageNumber = $(".page__number");
        let indexPage = index + 1;
        pageNumber.text(indexPage.toString().padStart(2, 0));
      },
    },
  });

  $(".slider__bottom .control .--prev").on("click", function () {
    $carousel.flickity("previous");
  });
  $(".slider__bottom .control .--next").on("click", function () {
    $carousel.flickity("next");
  });
  $(".my-paroller").paroller();
  $(".scalize").scalize();

  let $carouselBottom = $(".slider-bottom");
  $carouselBottom.flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    lazyLoad: 2,
    freeScroll: true,
    fullscreen: true,
  });

  let $progressBar = $(".progress-bar");
  $carouselBottom.on("scroll.flickity", function (event, progress) {
    progress = Math.max(0, Math.min(1, progress));
    $progressBar.width(progress * 100 + "%");
  });
});
var initPhotoSwipeFromDOM = function (gallerySelector) {
  var parseThumbnailElements = function (el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;
    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element
      if (figureEl.nodeType !== 1) {
        continue;
      }
      linkEl = figureEl.children[0]; // <a> element
      size = linkEl.getAttribute("data-size").split("x");
      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };
      if (figureEl.children.length > 1) {
        item.title = figureEl.children[1].innerHTML;
      }
      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute("src");
      }
      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }
    return items;
  };
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };
  var onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    var eTarget = e.target || e.srcElement;
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === "FIGURE";
    });
    if (!clickedListItem) {
      return;
    }
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;
    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }
      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }
    if (index >= 0) {
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };
  var photoswipeParseHash = function () {
    var hash = window.location.hash.substring(1),
      params = {};
    if (hash.length < 5) {
      return params;
    }
    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }
    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }
    return params;
  };
  var openPhotoSwipe = function (
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;
    items = parseThumbnailElements(galleryElement);
    options = {
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),
      getThumbBoundsFn: function (index) {
        var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      },
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
    };
    if (fromURL) {
      if (options.galleryPIDs) {
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }
    if (isNaN(options.index)) {
      return;
    }
    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
  var galleryElements = document.querySelectorAll(gallerySelector);
  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};
initPhotoSwipeFromDOM(".carousel-img");
AOS.init();
