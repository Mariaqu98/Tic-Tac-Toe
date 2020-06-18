var square = document.getElementsByTagName("td")
var counter = 0 
square.onclick = function (){
// if the player will start with X then the next click will be O , so show X when the counter is Even , O when its Odd 
counter++
if(counter%2===0){
square.innerHTML="<img src=\"x.png\" >";
}
else{
square.innerHTML="<img src=\"o.png\" >";

}

};


