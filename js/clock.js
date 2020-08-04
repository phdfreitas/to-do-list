let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let totalSeconds = seconds.innerHTML
let timer

function clockStart(){
	timer = setInterval(function(){
		if(minutes.innerHTML > 0 || seconds.innerHTML > 0){
			if(totalSeconds == 0){
				totalSeconds = 59
				minutes.innerHTML--
				seconds.innerHTML = totalSeconds
			}
			else{
				totalSeconds--
				if(totalSeconds <= 9) seconds.innerHTML = `0${totalSeconds}`
				else seconds.innerHTML = totalSeconds	
			}	
		}
	}, 1000)
}

function clockStop(){
	clearInterval(timer)
}

function timerControl(value){

	if(value == 'm+'){
		if(minutes.innerHTML < 60){
			minutes.innerHTML++
		}
	}
	else if(value == 'm-'){
		if(minutes.innerHTML > 0){
			minutes.innerHTML--
		}
	}
	else if(value == 's+'){
		if(seconds.innerHTML < 59){
			totalSeconds++
			if(totalSeconds < 10) seconds.innerHTML = `0${totalSeconds}`
			else seconds.innerHTML = totalSeconds	
		}
	}
	else if(value == 's-'){
		if(seconds.innerHTML > 0){
			totalSeconds--
			if(totalSeconds < 10) seconds.innerHTML = `0${totalSeconds}`
			else seconds.innerHTML = totalSeconds
		}
	}
}