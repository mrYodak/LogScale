let segslider;
let segval;
let repslider;
let repval;
let ratslider;
let ratval;
let button;
let sizeval;
let apsize_d;
let cnv;

function setup() {
	cnv = createCanvas(100, 100);
	cnv.background(255);
	cnv.position(10, 100);
	
	let header = createElement('h2', 'Log scale degenerationX');
	header.position(10,0);
	
	segslider = createSlider(50, 500, 100);
	segslider.position(10, 80);
	segslider.style('width', '200px');
	let segtext = createElement('p', 'Segment size');
	segtext.position(10,48);
	segval = createDiv(str(segslider.value()));
	segval.position(170,65);
	  
	repslider = createSlider(10, 100, 50);
	repslider.position(230, 80);
	repslider.style('width', '90px');
	let reptext = createElement('p', 'Ratio');
	reptext.position(230,48);
	repval = createDiv(str(segslider.value()));
	repval.position(300,65);
	  
	ratslider = createSlider(2, 47, 20);
	ratslider.position(340, 80);
	ratslider.style('width', '90px');
	let rattext = createElement('p', 'Quantity');
	rattext.position(340,48);
	ratval = createDiv(str(segslider.value()));
	ratval.position(410,65);	
	
	sizeval = createDiv("00");
	sizeval.position(270,27);
	
	button = createButton('DEGENERATE');
	button.position(330, 22);
	button.mousePressed(genImg);
}

function draw() {
	segval.html(str(segslider.value()));	
	repval.html(nf(repslider.value()/100,1,2));
	ratval.html(str(ratslider.value()));
	
	let apsize_o=segslider.value();
	let apsize=segslider.value();
	for (let i = 0; i < ratslider.value()-1; i++) {
	apsize_o=apsize_o*repslider.value()/100;
	apsize=apsize+apsize_o;
	}
	apsize_d=floor(apsize);
	sizeval.html(+str(apsize_d)+" px");
}

function genImg(){	
	resizeCanvas(apsize_d+1,100);
	cnv.background(200);
	cnv.position(10, 100);
	
	line(0,0,0,100)
	
	let apsize_o=segslider.value();
	let apsize=segslider.value();
	
	line(floor(apsize),0,floor(apsize),100);
	
	for (let i = 0; i < ratslider.value()-1; i++) {
	apsize_o=apsize_o*repslider.value()/100;
	apsize=apsize+apsize_o;
	line(floor(apsize),0,floor(apsize),100);
	}
}

