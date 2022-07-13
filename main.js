function setup(){
    canvas=createCanvas(300,300);
    canvas.position(50,200);
    video=createCapture(VIDEO);
    video.hide();
    }
    function draw(){
    image(video,0,0,300,300);
    circle(100,100,20);
    ellipse(56,46,200,200);
    rect(30,20,60,60)
    }
    function take_snapshot(){
        save('manvith.png');
    }