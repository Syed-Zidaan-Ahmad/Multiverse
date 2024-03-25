var images = [
    "https://i.ytimg.com/vi/lt0WQ8JzLz4/maxresdefault.jpg",
    "http://bestwallpaperhd.com/wp-content/uploads/2013/01/nebula-wallpaper-widescreen.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/3e/a3/03/3ea3035261cda442f086ee1f3b55dd46.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/d8/78/ac/d878ac9bd86d4da1b9f75b8fc27d837a.jpg",
    "http://www.desdelaplaza.com/wp-content/uploads/2017/02/via-lactea.jpg",
    "http://wallpaper-gallery.net/images/wallpaper-artwork/wallpaper-artwork-13.jpg",
    "http://thewardrobedoor.com/wp-content/uploads/2015/11/the_bubble_nebula_nasa_space_abstract_stars_1280x768_hd-wallpaper-1401667.jpg",
    "https://cdn.spacetelescope.org/archives/images/large/heic1007a.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/d6/0e/0b/d60e0b8cddad9cd53563de171e2e4af9--iphone-backgrounds-the-galaxy.jpg",
    "http://wallpaperlayer.com/img/2015/5/blue-space-wallpaper-5752-6015-hd-wallpapers.jpg",
    "http://static.tumblr.com/690d31c36461b53a05cfb40684c91643/r2vn2mz/dQPom9zi7/tumblr_static_2v3gg23km4o4gowooss48wg88.jpg",
    "https://s-media-cache-ak0.pinimg.com/originals/00/e1/98/00e198619bd23e2695a485901bd5471d--nebula-wallpaper-star-wallpaper.jpg",
    "https://www.nasa.gov/images/content/612969main_pia15252-full_full.jpg",
    "https://www.nasa.gov/sites/default/files/thumbnails/image/hs-2015-29-a-xlarge_web.jpg",
    "https://i.ytimg.com/vi/NPjCwXyvTG8/maxresdefault.jpg",
    "https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAyMy82Mzgvb3JpZ2luYWwvb3Jpb24tbmVidWxhLmpwZw==",
    "http://media.npr.org/assets/img/2016/05/16/istock_000068588675_full_wide-08f4003d4700b3f2d1a32e208cea0988459161a1-s900-c85.jpg",
    "http://en.es-static.us/upl/2016/07/orion-nebula-HAWK-1-infrared-2016-e1468249157566.jpg",
    "http://fabianoefner.com/wp-content/uploads/2014/06/Oefner_Nebula_07-1180x842.jpg"
];

var container = $("#container");
var scope = new Graphemescope(container[0]);

var index = 0;
function changePicture() {
    scope.setImage(images[index]);
    index = (index + 1) % images.length;
};

setInterval(changePicture, 10000);
changePicture();

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function (event) {
        var x = Math.round(event.beta);
        var y = Math.round(event.gamma);
        var factorx = y / $(window).width();
        var factory = x / $(window).height();
        scope.angleTarget = factorx + 2;
        scope.zoomTarget = 0.5 + 4.0 * factory;
    });
} else {
    alert("Your device does not support device orientated motions.");
}

$(window).mousemove(function (event) {
    var factorx = event.pageX / $(window).width();
    var factory = event.pageY / $(window).height()
    scope.angleTarget = factorx;
    scope.zoomTarget = 0.5 + 3.0 * factory;
});

var resizeHandler = function () {
    container.height($(window).height());
    container.width($(window).width());
};

$(window).resize(resizeHandler);
$(window).resize();
container.click(changePicture);