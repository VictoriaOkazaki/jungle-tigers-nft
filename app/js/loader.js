var imgs = document.images,
    len = imgs.length,
    counter = 0;
window.addEventListener('load', (event) => {
    [].forEach.call( imgs, function(img) {
        if(img.complete) {
            incrementImgCounter();
        } else {
            img.addEventListener( 'load', incrementImgCounter, false );
        }
    });
});

function hideLoader() {
    console.log('All images on page loaded');
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.wrapper').style.visibility = 'visible';
}

function incrementImgCounter() {
    counter++;
    if (counter === len) {
        // setTimeout(hideLoader, 5000);
        hideLoader();
    }
}
