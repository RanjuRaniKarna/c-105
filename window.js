Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
    })
}

console.log("ml5 version is", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jpalba1Bk/model.json', modelloaded);

function modelloaded(){
    console.log("machine model is loaded successfully");
}

function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
if (error){
    console.log(error);
}
else {
console.log(result);
console.log(result[0].label);
console.log(result[0].confidence);

document.getElementById("result_object").innerHTML = result[0].label;
document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(2);

}
}
