//your JS code here. If required.
let circles = document.querySelectorAll(".circle")
let progressBar = document.getElementById("progress-bar")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let currentState = 1

next.addEventListener("click",()=>{
	currentState++
	updateProgress()
})

prev.addEventListener("click",()=>{
	currentState--
	updateProgress()
})

function updateProgress(){
	circles.forEach((circle,index)=>{
		if(index < currentState){
			circle.classList.add("active")
		}else{
			circle.classList.remove("active")
		}
	})
	progressBar.style.width = ((currentState-1)/(circles.length-1)) * 100 + "%"
	prev.disabled = currentState === 1
	next.disabled = currentState === circles.length
}






