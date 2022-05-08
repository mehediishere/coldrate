$(function(){
    var splideMain = new Splide( '.mainSlider', {
        type    : 'loop',
        perPage : 1,
        autoplay: true,
        // type  : 'fade',
        rewind: true,
        arrows: false,
        interval: 4000,
        // pagination: false,
        pauseOnHover: true,
        speed: 2000
    });
    splideMain.mount();
});