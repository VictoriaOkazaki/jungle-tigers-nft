const imgs = document.images;
const imgsLen = imgs.length;
let loadImgCount = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    [].forEach.call(imgs, function(img) {
        if(img.complete) {
            incrementImgCounter();
        } else {
            img.addEventListener( 'load', incrementImgCounter, false );
        }
    });
    setTimeout(hideLoader, 5000);
});


let loaderVisible = true;
function hideLoader() {
    if (!loaderVisible) return;
    loaderVisible = false;
    // console.log('All images on page loaded');
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.wrapper').style.visibility = 'visible';
    // const video = document.querySelector('.project__video');
    // console.log('video start load');
    // video.load();
    // const start = performance.now();
    // video.oncanplaythrough = () => {
    //     video.oncanplaythrough = null;
    //     const end = performance.now();
    //     console.log('video loaded', end - start, 'ms');
    //     video.play();
    // };
}

function incrementImgCounter() {
    loadImgCount++;
    if (loadImgCount === imgsLen) {
        hideLoader();
    }
}
