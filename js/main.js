'use strict';
(function ($) {
    $('.header__link').click(function (e) {
        e.preventDefault();
        $('.header__link').removeClass('header__link--active');
        this.classList.add('header__link--active');
    });

    var elMap = $('.js-map')[0];
    var place = {lat: 52.427207, lng: 16.937317};
    var mymap = new google.maps.Map(elMap, {
        zoom: 15,
        center: place
    });
    mymap.panBy(350, 0);
    var marker = new google.maps.Marker({position: place, map: mymap, icon: "./img/marker.png"});
})(jQuery);
