
let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let sender;

if (url.searchParams.get('by') != null) {
  sender = url.searchParams.get('by');
} else {
  sender = "Adam";
}

let footer = document.getElementById("credit");
footer.innerHTML = sender;
footer.href = "https://www.instagram.com/adamukti/";

document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire("Hallo Sayangku", "Aku ada pertanyaan nih buat kamu?", "question").then(function () {
    Swal.fire("Jawab yang jujur ya!").then(function () {
      Swal.fire("Awas aja kalo boong!!", "", "error").then(function () {

        const {
          value: name
        } = Swal.fire({
          title: 'Masukin nama kamu dulu',
          input: 'text',
          inputLabel: '',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'Isi dulu dong beb'
            } else {
              nama = value;
            }
          }
        }).then(function () {
          const pertanyaan = Swal.fire({
            title: `${nama} sayang ga sama ${sender}?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Sayang`,
            denyButtonText: `Gak`,<!DOCTYPE HTML>
<html>
<head><title>Hai vi</title>
<!-- Created By L3M4R1 -->
<script>alert ('hai')
alert ('Ini isi hatiku yang sesungguhnya')</script>
<script language="JavaScript"> 
 
function tb5_makeArray(n){
 this.length = n;
 return this.length;
}
 
tb5_messages = new tb5_makeArray(7);
tb5_messages[0] = "Hay Via";
tb5_messages[1] = "Aku Mau Kamu Tau";
tb5_messages[2] = "Aku Sayang Sama Kamu";
tb5_messages[3] = "Aku Serius Vi";
tb5_messages[4] = "Kamu Mau Ngga Jadi Pacar ku";
tb5_messages[5] = "Aku berharap kamu menerimanya";
tb5_messages[6] = "I Love You via!!!";
tb5_rptType = 'infinite';
tb5_rptNbr = 20;
tb5_speed = 30;
tb5_delay = 2000;
var tb5_counter=2;
var tb5_currMsg=0;
var tb5_stsmsg="";
function tb5_shuffle(arr){
var k;
for (i=0; i<arr.length; i++){
 k = Math.round(Math.random() * (arr.length - i - 1)) + i;
 temp = arr[i];arr[i]=arr[k];arr[k]=temp;
}
return arr;
}
tb5_arr = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
tb5_sts = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
for (var i=0; i<tb5_messages[tb5_currMsg].length; i++){
 tb5_arr[i] = i;
 tb5_sts[i] = "_";
}
tb5_arr = tb5_shuffle(tb5_arr);
function tb5_init(n){
var k;
if (n == tb5_arr.length){
 if (tb5_currMsg == tb5_messages.length-1){
 if ((tb5_rptType == 'finite') && (tb5_counter==tb5_rptNbr)){
 clearTimeout(tb5_timerID);
 return;
 }
 tb5_counter++;
 tb5_currMsg=0;
 }
 else{
 tb5_currMsg++;
 }
 n=0;
 tb5_arr = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
 tb5_sts = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
 for (var i=0; i<tb5_messages[tb5_currMsg].length; i++){
 tb5_arr[i] = i;
 tb5_sts[i] = "_";
 }
 tb5_arr = tb5_shuffle(tb5_arr);
 tb5_sp=tb5_delay;
}
else{
 tb5_sp=tb5_speed;
 k = tb5_arr[n];
 tb5_sts[k] = tb5_messages[tb5_currMsg].charAt(k);
 tb5_stsmsg = "";
 for (var i=0; i<tb5_sts.length; i++)
 tb5_stsmsg += tb5_sts[i];
 document.title = tb5_stsmsg;
 n++;
 }
 tb5_timerID = setTimeout("tb5_init("+n+")", tb5_sp);
}
function tb5_randomizetitle(){
 tb5_init(0);
}
tb5_randomizetitle();
 
</script>
</br><center><a href="http://L3m4r1.blogspot.com"><img src="https://assets.jalantikus.com/assets/cache/500/346/userfiles/2018/11/15/gambar-anime-romantis-10-3bbdd.jpg"alt="Lolykuu" width="30% atau xpx" height="40% atau ypx"/></a> 
</head>
<body BGCOLOR="black">
<center><center>
<br><font size="6"><font color="red" face="courier new">Touched by:L3M4R1</font>
<br><br><!-- Created By L3M4R1 -->
<font size="5"><font color="white" face="courier new">Hai ini dia isi hatiku yang sesungguhnya</font>
<br><font size="5"><font color="white" face="courier new">Selama ini ku hanya dapat diam dan berdoa kepada Yang Kuasa agar diri mu bisa bersamaku</font>
<br><font size="5"><font color="white" face="courier new">Namun kali ini Aku ingin mengutarakannya</font>
<br><font size="5"><font color="white" face="courier new">Mau ga jadi pacarku?!?</font>
<br><a href="https://api.whatsapp.com/send?phone=6283198529028&text=Ya%20aku%20Mau%20Terima"><input type="button" value="Yes I do" onclick="alert('Thanks yah udah mau trima aku apa ada nya');" style="font size="5"></a><><><><a href="https://api.whatsapp.com/send?phone=6283198529028&text=maaf%20aku%20nggabisa%20Terima"><input type="button" value=" Im sorry" onclick="alert('Baik lah kalau itu mau mu ^_^');" style="font size="5"></a>
<br><br><br><hr color="red"><!-- Created By L3M4R1 -->
<font size="4"><font color="white" face="courier new">("Thanks to:")</font>
<marquee><font size="3"><font color="white" face="courier new">[FCSI-Purbalingga Black Hat-Pekalongan Cyber Ghost-Dark Force Army-Indonesia Cyber Lite-Cyber Patah Hati-Hacker Patah Hati-INSULINDER TEAM-Sora Cyber Team-Cyber Kacang Team-Galau Cyber Team-Never Die AFK Cyber-Dunsanak Cyber Security-Kentang Cyber Security-Lollycorp Team-GHD Cyber Army Team-JancoXploit-N45HT-coizter_team]</marquee>
<br><br><font size="4.5"><font color="white" face="courier new">My friends:)</font>
<br><font size="3.5"><font color="white" face="courier new">[Mr.FOX-Brilly4n-0N3FR13ND5-M4RV3L0U5-K3NZO-katenbad-5TUP1D-B0Y- All member Ghost Hunter Illusion]</font>
<br><br><br><a href="http://m.facebook.com/L3M4R1.go.id"><input type="button" value="Contact me on facebook" onclick="alert('Loading, click ok');""></a>
</body>
<style type="text/css">
body, a:hover {cursor: url(http://cur.cursors-4u.net/cursors/cur-9/cur862.ani), url(http://cur.cursors-4u.net/cursors/cur-9/cur862.png), progress !important; 
</style>



<style type="text/css">

#outerCircleText {

font-style: courier new;
font-weight: bold;
font-family: 'comic sans ms', verdana, arial;
color: white;

position: absolute;top: 0;left: 0;z-index: 3000;cursor: default;}
#outerCircleText div {position: relative;}
#outerCircleText div div {position: absolute;top: 0;left: 0;text-align: center;}

</style>
<script type="text/javascript">


;(function(){


var msg = " Love you via:*";

var size = 15;


var circleY = 0.75; var circleX = 2;

var letter_spacing = 4;

var diameter = 10;


var rotation = 0.2;

var speed = 0.3;



if (!window.addEventListener && !window.attachEvent || !document.createElement) return;

msg = msg.split('');
var n = msg.length - 1, a = Math.round(size * diameter * 0.208333), currStep = 20,
ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],
o = document.createElement('div'), oi = document.createElement('div'),
b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,

mouse = function(e){
 e = e || window.event;
 ymouse = !isNaN(e.pageY)? e.pageY : e.clientY; // y-position
 xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; // x-position
},

makecircle = function(){ // rotation/positioning
 if(init.nopy){
  o.style.top = (b || document.body).scrollTop + 'px';
  o.style.left = (b || document.body).scrollLeft + 'px';
 };
 currStep -= rotation;
 for (var d, i = n; i > -1; --i){ // makes the circle
  d = document.getElementById('iemsg' + i).style;
  d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
  d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
 };
},

drag = function(){ // makes the resistance
 y[0] = Y[0] += (ymouse - Y[0]) * speed;
 x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
 for (var i = n; i > 0; --i){
  y[i] = Y[i] += (y[i-1] - Y[i]) * speed;
  x[i] = X[i] += (x[i-1] - X[i]) * speed;
 };
 makecircle();
},

init = function(){ 
 if(!isNaN(window.pageYOffset)){
  ymouse += window.pageYOffset;
  xmouse += window.pageXOffset;
 } else init.nopy = true;
 for (var d, i = n; i > -1; --i){
  d = document.createElement('div'); d.id = 'iemsg' + i;
  d.style.height = d.style.width = a + 'px';
  d.appendChild(document.createTextNode(msg[i]));
  oi.appendChild(d); y[i] = x[i] = Y[i] = X[i] = 0;
 };
 o.appendChild(oi); document.body.appendChild(o);
 setInterval(drag, 25);
},

ascroll = function(){
 ymouse += window.pageYOffset;
 xmouse += window.pageXOffset;
 window.removeEventListener('scroll', ascroll, false);
};

o.id = 'outerCircleText'; o.style.fontSize = size + 'px';

if (window.addEventListener){
 window.addEventListener('load', init, false);

 document.addEventListener('mouseover', mouse, false);
 document.addEventListener('mousemove', mouse, false);
  if (/Apple/.test(navigator.vendor))
   window.addEventListener('scroll', ascroll, false);
}
else if (window.attachEvent){
 window.attachEvent('onload', init);
 document.attachEvent('onmousemove', mouse);
};

})();

</script>
<!-- copyright@2k19 by L3M4R1 --> <!-- Tolong jangan hapus copyright nya yah :v tolong hargai karya saya L3M4R1 -->
<iframe width="0%" height="0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314301457&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
</html>
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire(`${sender} juga sayang banget sama ${nama}`).then(function () {
                Swal.fire({
                  title: 'Seberapa sayang emangnya?',
                  icon: 'question',
                  input: 'range',
                  inputLabel: 'Antara 1 - 100 ya',
                  inputAttributes: {
                    min: 1,
                    max: 100,
                    step: 1
                  },
                  inputValue: 50
                }).then((e) => {
                  val = e.value
                  Swal.fire(`Makasih ya udah sayang sama ${sender} ${val}%`).then(function () {
                    Swal.fire({
                      title: `Sekarang ${nama} kangen ga sama ${sender}?`,
                      showDenyButton: true,
                      showCancelButton: false,
                      confirmButtonText: `Kangen :(`,
                      denyButtonText: `Gak!`,
                    }).then((result) => {
                      /* Read more about isConfirmed, isDenied below */
                      if (result.isConfirmed) {
                        Swal.fire(`Huhu iya ${sender} juga kangen ${nama} :((`).then(function () {
                          Swal.fire('Terakhir deh sayang').then(function () {
                            Swal.fire('Coba klik ikon hati di paling bawah dong')
                          })
                        })
                      } else if (result.isDenied) {
                        Swal.fire('Jahat banget emang ga kangen sama pacar sendiri', '', 'error').then(function () {
                          Swal.fire('Yaudah deh bye!')
                        })
                      }
                    })
                  })
                })
              })
            } else if (result.isDenied) {
              Swal.fire(`Yakin ga suka sama ${sender}?`, '', 'error').then(function () {
                Swal.fire('Yaudah deh bye!')
              })
            }
          })
        })
      });
    });
  });
});



document.querySelector('.hati').addEventListener('click', function () {
  confetti();
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.classList.remove('d-none')
  btn.classList.add('d-none')
  console.log(teks);
  console.log(btn);
})

'use strict';

// If set to true, the user must press
// UP UP DOWN ODWN LEFT RIGHT LEFT RIGHT A B
// to trigger the confetti with a random color theme.
// Otherwise the confetti constantly falls.
var onlyOnKonami = false;

function confetti() {
  // Globals
  var $window = $(window),
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var runFor = 2000
  var isRunning = true

  setTimeout(() => {
    isRunning = false
  }, runFor);

  // Settings
  var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    pointer = 0;

  var particles = 150,
    spread = 20,
    sizeMin = 5,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = .13,
    dyMax = .18,
    dThetaMin = .4,
    dThetaMax = .7 - dThetaMin;
        
  var colorThemes = [
    function () {
      return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
    },
    function () {
      var black = 200 * random() | 0;
      return color(200, black, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, 200, black);
    },
    function () {
      var black = 200 * random() | 0;
      return color(black, black, 200);
    },
    function () {
      return color(200, 100, 200 * random() | 0);
    },
    function () {
      return color(200 * random() | 0, 200, 200);
    },
    function () {
      var black = 256 * random() | 0;
      return color(black, black, black);
    },
    function () {
      return colorThemes[random() < .5 ? 1 : 2]();
    },
    function () {
      return colorThemes[random() < .5 ? 3 : 5]();
    },
    function () {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];

  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity,
    radius2 = radius + radius;

  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;

      // Update the domain
      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  // Create the overarching container
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = $window.width() * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }


  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti

      var theme = colorThemes[onlyOnKonami ? colorThemes.length * random() | 0 : 0],
        count = 0;

      (function addConfetto() {

        if (onlyOnKonami && ++count > particles)
          return timer = undefined;

        if (isRunning) {
          var confetto = new Confetto(theme);
          confetti.push(confetto);

          container.appendChild(confetto.outer);
          timer = setTimeout(addConfetto, spread * random());
        }
      })(0);


      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = $window.height();

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  $window.keydown(function (event) {
    pointer = konami[pointer] === event.which ?
      pointer + 1 :
      +(event.which === konami[0]);
    if (pointer === konami.length) {
      pointer = 0;
      poof();
    }
  });

  if (!onlyOnKonami) poof();
};
