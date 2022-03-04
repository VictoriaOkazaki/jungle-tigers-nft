const imgs = document.images;
const imgsLen = imgs.length;
let loadImgCount = 0;

window.addEventListener('load', (event) => {
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
    loaderVisible = true;
    // console.log('All images on page loaded');
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.wrapper').style.visibility = 'visible';
}

function incrementImgCounter() {
    loadImgCount++;
    if (loadImgCount === imgsLen) {
        hideLoader();
    }
}
