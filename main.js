function start(){
    navigator.mediaDevices.getUserMedia({audio :true});
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FPcauAjB2/',modelLoaded)
}

function modelLoaded(){
    classifier.classify( "audio",gotresult())
}
 
lion ="0";
dog ="0";
cat="0";

document.getElementById("heading").innerHTML = "Animal sound detected";

function gotresults(error , results){
    if(error){
        console.error("error")
    }

    else{
        console.log("results");
        red=Math.floor(Math.random()*255) + 1;
        blue=Math.floor(Math.random()*255) + 1;
        green=Math.floor(Math.random()*255) + 1;
        
        if (results[0].label == "dog"){
        img.src ="https://cdn.dribbble.com/users/1186670/screenshots/7189098/perro_walking_dribble.gif";
        dog="1";
        }

        if (results[0].label == "cat"){
            img.src ="https://acegif.com/wp-content/gifs/happy-cat-21.gif";
            cat="1";
            }

        else{
            img.src="https://www.animaker.com/blog/wp-content/uploads/2018/05/Animaker-lion.gif";
            lion="1";
        }
    }
}

