
audioelement=new Audio('arigato.mp3')

audioelement.volume=0
let butno = document.querySelector("#no")
let img = document.querySelector("img")
let buttons = document.querySelector('.buttons')
let butyes = document.querySelector("#Yes");
let ques = document.querySelector(".h1")
butno.addEventListener("Click",()=>{
    butno.innerHTML="Yes"
    butyes.innerHTML="No"
})
butyes.addEventListener("click",()=>{
    
function Play(){
    if(audioelement.volume==1){
        while(audioelement.volume!=0){
            audioelement.volume-=0.01
            audioelement.play()
        }
    }
    audioelement.play()
    audioelement.volume+=0.01
  

}
setInterval(Play,100)
   
ques.innerHTML="Thank you ! "


img.src='giphy.gif'
img.style.width="100%"

buttons.style.opacity=0

  
})
function SendMail(){
    emailjs.send("service_cba0kiv","template_o2r247q").then(function(res){
        alert("Sucess!"+res.status);
    })
}





