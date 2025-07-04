//Multiverse (JavaScript Part)
// Custom kaleidoscope animation class
(function () {
  var a, b;
  // Cross-browser requestAnimationFrame fallback
  b = function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (a) {
        return window.setTimeout(a, 1000 / 30);
      };
  }();
  // Graphemescope class constructor
  window.Graphemescope = a = function () {
    function a(a) {
      var c = this;
      this.parentElement = a || window.document.body;
      this.enabled = true;
      this.radiusFactor = 1;
      this.zoomFactor = 1;
      this.angleFactor = 0;
      this.zoomTarget = 1.2;
      this.angleTarget = 0.8;
      this.easeEnabled = true;
      this.ease = 0.1;
      this.alphaFactor = 1;
      this.alphaTarget = 1;
      // create canvas if not exist
      if (this.domElement == null) {
        this.domElement = document.createElement("canvas");
      }
      if (this.ctx == null) {
        this.ctx = this.domElement.getContext("2d");
      }
      this.parentElement.appendChild(this.domElement);
      // handle window resize
      this.oldResizeHandler = function () { };
      if (window.onresize !== null) {
        this.oldResizeHandler = window.onresize;
      }
      window.onresize = function () {
        return c.resizeHandler();
      };
      this.resizeHandler();
      // start animation loop
      b(function () {
        return c.animationFrame();
      });
    }
    // Animation frame handler
    a.prototype.animationFrame = function () {
      var self = this;
      b(function () {
        return self.animationFrame();
      });
      if (this.enabled) {
        this.update();
        this.draw();
      }
    };
    // force heading reflow on window resize
    window.addEventListener("resize", function () {
      const heading = document.querySelector(".heading");
      if (heading) {
        // force redraw
        heading.style.transform = "scale(1)";
        heading.offsetHeight; // trigger reflow
        heading.style.transform = "";
      }
    });
    // Canvas resize calculations
    a.prototype.resizeHandler = function () {
      this.width = this.domElement.width = this.parentElement.offsetWidth;
      this.height = this.domElement.height = this.parentElement.offsetHeight;
      this.radius = 0.5 * this.radiusFactor * Math.min(this.width, this.height);
      this.radiusHeight = 0.5 * Math.sqrt(3) * this.radius;
      this.oldResizeHandler();
    };
    // Ease transition of zoom and angle
    a.prototype.update = function () {
      if (this.easeEnabled) {
        this.angleFactor += (this.angleTarget - this.angleFactor) * this.ease;
        this.zoomFactor += (this.zoomTarget - this.zoomFactor) * this.ease;
        this.alphaFactor += (this.alphaTarget - this.alphaFactor) * this.ease;
      } else {
        this.angleFactor = this.angleTarget;
        this.zoomFactor = this.zoomTarget;
        this.alphaFactor = this.alphaTarget;
      }
    };
    // Draws an image inside a cell
    a.prototype.drawImage = function (a) {
      var b, c;
      this.ctx.save();
      b = (2 / 3) * this.radiusHeight;
      c = this.zoomFactor * b / (0.5 * Math.min(a.width, a.height));
      this.ctx.translate(0, b);
      this.ctx.scale(c, c);
      this.ctx.rotate(2 * this.angleFactor * Math.PI);
      this.ctx.translate(-0.5 * a.width, -0.5 * a.height);
      this.ctx.fill();
      this.ctx.restore();
    };
    // Draws one hexagonal cell
    a.prototype.drawCell = function (a) {
      for (var b = 0; b < 6; b++) {
        this.ctx.save();
        this.ctx.rotate((2 * b * Math.PI) / 6);
        this.ctx.scale(b % 2 === 0 ? -1 : 1, 1);
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(-0.5 * this.radius, 1 * this.radiusHeight);
        this.ctx.lineTo(0.5 * this.radius, 1 * this.radiusHeight);
        this.ctx.closePath();
        this.drawImage(a);
        this.ctx.restore();
      }
    };
    // Draws the full hexagonal pattern layer
    a.prototype.drawLayer = function (a) {
      this.ctx.save();
      this.ctx.translate(0.5 * this.width, 0.5 * this.height);
      var f = Math.ceil(0.5 * this.height / this.radiusHeight);
      var c = Math.ceil(0.5 * this.width / (3 * this.radius));
      for (var e = -f; e <= f; e++) {
        this.ctx.save();
        this.ctx.translate(0, this.radiusHeight * e);
        if (Math.abs(e) % 2) {
          this.ctx.translate(1.5 * this.radius, 0);
        }
        for (var b = -c; b <= c; b++) {
          this.ctx.save();
          this.ctx.translate(3 * b * this.radius, 0);
          this.drawCell(a);
          this.ctx.restore();
        }
        this.ctx.restore();
      }
      this.ctx.restore();
    };
    // Main draw handler
    a.prototype.draw = function () {
      if (this.imageProxy != null) {
        this.ctx.fillStyle = this.patternProxy;
        this.ctx.globalAlpha = 1 - this.alphaFactor;
        this.drawLayer(this.imageProxy);
      }
      if (this.image != null) {
        this.ctx.fillStyle = this.pattern;
        this.ctx.globalAlpha = this.alphaFactor;
        this.drawLayer(this.image);
      }
    };
    // Set the current image directly
    a.prototype.setImageDirect = function (a) {
      if (this.image != null) {
        this.imageProxy = this.image;
        this.patternProxy = this.pattern;
      }
      this.image = a;
      this.pattern = this.ctx.createPattern(this.image, "repeat");
      this.alphaFactor = 0;
    };
    // Load and set an image
    a.prototype.setImage = function (a) {
      var b, c = this;
      if (typeof a === "string") {
        b = new Image();
        b.src = a;
        b.crossOrigin = "anonymous";
        b.onload = function () {
          return c.setImageDirect(b);
        };
      } else {
        this.setImageDirect(a);
      }
    };
    return a;
  }();
})();
// Kaelidoscope logic
// Image list to cycle through
var images = [
  "https://i.ytimg.com/vi/lt0WQ8JzLz4/maxresdefault.jpg",
  "http://bestwallpaperhd.com/wp-content/uploads/2013/01/nebula-wallpaper-widescreen.jpg"
];
// Target container
var container = $("#container");
var scope = new Graphemescope(container[0]);
// start with first image
var index = 0;
// Function to change picture
function changePicture() {
  scope.setImage(images[index]);
  index = (index + 1) % images.length;
}
// Change image every 10s
setInterval(changePicture, 10000);
changePicture(); // show first image
// Device orientation controls
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
// Mouse controls
$(window).mousemove(function (event) {
  var factorx = event.pageX / $(window).width();
  var factory = event.pageY / $(window).height();
  scope.angleTarget = factorx;
  scope.zoomTarget = 0.5 + 3.0 * factory;
});
// Resize handler to keep canvas full-screen
$(window).resize(function () {
  container.height($(window).height());
  container.width($(window).width());
});
$(window).resize();
// Click to manually change image
container.click(changePicture);
// Info modal toggles
document.getElementById("infoButton").addEventListener("click", function () {
  let modal = document.getElementById("infoModal");
  modal.style.display = "block";
  setTimeout(() => modal.style.opacity = 1, 50);
});
// Function to close info modal
function closeInfoModal() {
  let modal = document.getElementById("infoModal");
  modal.style.opacity = 0;
  setTimeout(() => modal.style.display = "none", 300);
}
// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('✅ Service Worker registered:', reg))
    .catch(err => console.error('❌ Service Worker error:', err));
}
// Security features with taunts
// Funny taunt on right click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("😏 No right click! Thought you were smart, huh?");
});
// Funny taunt on F12 and other DevTools keys
document.addEventListener('keydown', function (e) {
  if (e.key === "F12" || e.keyCode === 123) {
    e.preventDefault();
    alert("😈 F12? Trying to act clever? Nope!");
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    alert("😜 Inspect shortcut? Busted!");
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
    alert("😂 Console peek? Dream on!");
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    alert("😅 View source? Not happening, buddy!");
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'C') {
    e.preventDefault();
    alert("😏 Element inspector? You wish!");
  }
});
//End of Program
