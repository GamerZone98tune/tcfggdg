//https://teachablemachine.withgoogle.com/models/m1VLwOuVx/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/m1VLwOuVx/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResult)
}
function gotResult(error,result){
    if(error){
        console.log(error)
    }
    else
    {
        console.log(result)
        document.getElementById("result_lable").innerHTML="label:"+result[0].label
        document.getElementById("result_confidence").innerHTML="accuracy:"+(result[0].confidence*100).toFixed(2)+"%"
        random_r=Math.floor(Math.random()*255)
        random_b=Math.floor(Math.random()*255)
        random_g=Math.floor(Math.random()*255)
        document.getElementById("result_lable").style.color="rgb("+random_r+","+random_g+","+random_b+")"
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")"
        img1=document.getElementById("alien1")
        img2=document.getElementById("alien2")
        img3=document.getElementById("alien3")
        img4=document.getElementById("alien4")
        if(result[0].label=="clap"){
        img1.src="aliens-01.gif"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
        }
        else if(result[0].label=="snap"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
            }
            else if(result[0].label=="tap wood"){
                img1.src="aliens-01.png"
                img2.src="aliens-02.png"
                img3.src="aliens-03.gif"
                img4.src="aliens-04.png"
                }
                else {
                    img1.src="aliens-01.png"
                    img2.src="aliens-02.png"
                    img3.src="aliens-03.png"
                    img4.src="aliens-04.gif"
                }
        
    }
}