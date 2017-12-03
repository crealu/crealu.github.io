// animation js

function t1(el) {
  var e = el;
  var l = 0;
  function frame() {
    l++;
    //e.style.top = 15*Math.sin(l/15) + 15 + 'px';
		e.style.left = 15*Math.sin(l/15) + 'px';
    if (l === 300) {
      clearInterval(id);
    }
  }
  var id = setInterval(frame, 10);
};

function t2(el) {
  var e = el;
  var l = 0;
  function frame() {
    l++;
    e.style.top = -15*Math.sin(l/15) + 15 + 'px';
    if (l === 300) {
      clearInterval(id);
    }
  }
  var id = setInterval(frame, 10);
};


function loopt1(divs) {
	var ads = document.getElementsByClassName(divs);
	var i;
	for (i=0; i<ads.length; i++) {
		t1(ads[i]);
	}
};

function tryit(divs) {
	var ads = document.getElementsByClassName(divs);
	for (var i = 0; i<ads.length; i++) {
		if (i % 2 == 1) {
			t1(ads[i]);
		}
		else if (i % 2 == 0) {
			t2(ads[i]);
		}
	}
}

// new anim
function position(box) {
  var b = document.getElementById(box);
  var i = 0;
  function frame() {
    i++;
    //b.style.left = -5*Math.sin(i/15) + 20 + 'px';
    b.style.transform = "rotateX(" + i + "deg)";
    //b.style.transform = "skew(" + i + "deg)";
    b.style.tranform = "scale(" + i + "," + 2*i +  ")";
    b.style.borderRadius = -20*Math.sin(i/30) + 50 + 'px';
    b.style.background = 'rgb(' + i + ', ' + 218 + ', ' + 251 + ')';
    b.style.boxShadow = "0px"+ i +  "0px" + i + "px #686868";
    if (i === 360) {
      clearInterval(id);
    }
  }
  var id = setInterval(frame, 10);
}
