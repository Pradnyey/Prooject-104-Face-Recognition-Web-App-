Webcam.set({
    height: 360,
    width: 350,
    image_format: 'png',
    png_quality: 90
})

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = '<img id=selfie_image src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded');
}

//When model is loaded
function check() {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}

//A function to run when we get errors and the results
function gotResult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_person_name").innerHTML = results[0].label;
        document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.tofixed(3);

    }
}
