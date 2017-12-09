// animation js

function jigLeft(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.left = 20*Math.sin(i/5) + 'px';
    if (i === 100) {
      clearInterval(id);
      b1.style.left = '0px';
    }
  }
  let id = setInterval(frame, 10);
};

function jigTop(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.top = 20*Math.sin(i/5) + 'px';
    if (i === 100) {
      clearInterval(id);
      b1.style.top = '0px';
    }
  }
  let id = setInterval(frame, 10);
};

function jigCorners(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.borderRadius = 15*Math.sin(i/10) + 15 + 'px';
    if (i === 100) {
      clearInterval(id);
      b1.style.borderRadius = '8px';
    }
  }
  let id = setInterval(frame, 10);
}

function jigWidth(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.width = 15*Math.sin(i/15) + 30 + 'px';
    if (i === 100) {
      clearInterval(id);
      b1.style.width = '75px';
    }
  }
  let id = setInterval(frame, 10);
}

function jigHeight(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.height = 20*Math.sin(i/15) + 30 + 'px';
    if (i === 100) {
      clearInterval(id);
      b1.style.height = '75px';
    }
  }
  let id = setInterval(frame, 10);
}

function jigScale(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.transform = 'scale(' + 5*Math.sin(i/30) + ')';
    b1.style.webkitTransform = 'scale(' + 5*Math.sin(i/30) + ')';
    b1.style.msTransform = 'scale(' + 5*Math.sin(i/30) + ')';
    if (i === 100) {
      clearInterval(id);
      b1.style.transform = 'scale(1)';
      b1.style.webkitTransform = 'scale(1)';
      b1.style.msTransform = 'scale(1)';
    }
  }
  let id = setInterval(frame, 10);
}

function jigRotate(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.transform = 'rotate(' + 20*Math.sin(i/15) + 'deg)';
    b1.style.webkitTransform = 'rotate(' + 20*Math.sin(i/15) + 'deg)';
    b1.style.msTransform = 'rotate(' + 20*Math.sin(i/15) + 'deg)';
    if (i === 100) {
      clearInterval(id);
      b1.style.transform = 'rotate(0deg)';
      b1.style.webkitTransform = 'rotate(0deg)';
      b1.style.msTransform = 'rotate(0deg)';
    }
  }
  let id = setInterval(frame, 10);
}

function jigSkew(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.transform = 'skew(' + 20*Math.sin(i/15) + 'deg)';
    b1.style.webkitTransform = 'skew(' + 20*Math.sin(i/15) + 'deg)';
    b1.style.msTransform = 'skew(' + 20*Math.sin(i/15) + 'deg)';
    if (i === 100) {
      clearInterval(id);
      b1.style.transform = 'skew(0deg)';
      b1.style.webkitTransform = 'skew(0deg)';
      b1.style.msTransform = 'skew(0deg)';
    }
  }
  let id = setInterval(frame, 10);
}

function jigTranslate(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.transform = 'translate(' + 20*Math.sin(i/15) + 'px,' + i + 'px)';
    b1.style.webkitTransform = 'translate(' + 20*Math.sin(i/15) + 'px,' + i + 'px)';
    b1.style.msTransform = 'translate(' + 20*Math.sin(i/15) + 'px,' + i + 'px)';
    if (i === 100) {
      clearInterval(id);
      b1.style.transform = 'translate(0)';
      b1.style.webkitTransform = 'translate(0)';
      b1.style.msTransform = 'translate(0)';
    }
  }
  let id = setInterval(frame, 10);
}

function jigMatrix(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.transform = 'matrix(' + i + ', ' + i + ', ' + i + ', ' + i + ', ' + i + ', ' + i +')';
    if (i === 100) {
      clearInterval(id);
      b1.style.transform = 'matrix(0, 0, 0, 0, 0, 0)';
    }
  }
  let id = setInterval(frame, 10);
}


// font animation

function jigFontSize(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let b1 = b[n];
  let i = 0;
  function frame() {
    i++;
    b1.style.fontSize = 15*Math.sin(i/15) + 30 + 'px';
    if (i === 100) {
      clearInterval(id);
      b1.style.fontSize = '16px';
    }
  }
  let id = setInterval(frame, 10);
}

// combination
function variety1(yoda, n) {
  let b = document.getElementsByClassName(yoda);
  let bn = b[n];
  let i = 0;
  function frame() {
    i++;
    //b.style.left = -5*Math.sin(i/15) + 20 + 'px';
    bn.style.transform = "rotateX(" + i + "deg)";
    //b.style.transform = "skew(" + i + "deg)";
    bn.style.tranform = "scale(" + i + "," + 2*i +  ")";
    bn.style.borderRadius = -20*Math.sin(i/30) + 50 + 'px';
    bn.style.background = 'rgb(' + i + ', ' + 218 + ', ' + 251 + ')';
    bn.style.boxShadow = "0px"+ i +  "0px" + i + "px #686868";
    if (i === 360) {
      clearInterval(id);
    }
  }
  let id = setInterval(frame, 10);
}

// old code with calling functions inside functions
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
