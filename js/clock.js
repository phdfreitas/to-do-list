let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let minutesB = document.getElementById('minutes-b')
let secondsB = document.getElementById('seconds-b')

let totalSeconds = seconds.innerHTML
let totalSecondsB = secondsB.innerHTML

let timer
let timerB

function clockStart(value){
	if(value == 'work'){
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
	else{
		timerB = setInterval(function(){
			if(minutesB.innerHTML > 0 || secondsB.innerHTML > 0){
				if(totalSecondsB == 0){
					totalSecondsB = 59
					minutesB.innerHTML--
					secondsB.innerHTML = totalSecondsB
				}
				else{
					totalSecondsB--
					if(totalSecondsB <= 9) secondsB.innerHTML = `0${totalSecondsB}`
					else secondsB.innerHTML = totalSecondsB
				}	
			}
		}, 1000)	
	}
}

function clockStop(value){
	if(value == 'work'){
		clearInterval(timer)
	}
	else{
		clearInterval(timerB)
	}
}

function timerControl(value){

	if(value == 'm+' || value == 'mb+'){
		if(value == 'm+'){
			if(minutes.innerHTML < 60){
				minutes.innerHTML++
			}
		}
		else{
			if(minutesB.innerHTML < 60){
				minutesB.innerHTML++
			}	
		}
	}
	else if(value == 'm-' || value == 'mb-'){
		if(value == 'm-'){
			if(minutes.innerHTML > 0){
				minutes.innerHTML--
			}
		}
		else{
			if(minutesB.innerHTML > 0){
				minutesB.innerHTML--
			}	
		}
	}
	else if(value == 's+' || value == 'sb+'){
		if(value == 's+'){
			if(seconds.innerHTML < 59){
				totalSeconds++
				if(totalSeconds < 10) seconds.innerHTML = `0${totalSeconds}`
				else seconds.innerHTML = totalSeconds	
			}
		}
		else{
			if(secondsB.innerHTML < 59){
				totalSecondsB++
				if(totalSecondsB < 10) secondsB.innerHTML = `0${totalSecondsB}`
				else secondsB.innerHTML = totalSecondsB	
			}
		}
	}
	else if(value == 's-' || value == 'sb-'){
		if(value == 's-'){
			if(seconds.innerHTML > 0){
				totalSeconds--
				if(totalSeconds < 10) seconds.innerHTML = `0${totalSeconds}`
				else seconds.innerHTML = totalSeconds
			}
		}
		else{
			if(secondsB.innerHTML > 0){
				totalSecondsB--
				if(totalSecondsB < 10) secondsB.innerHTML = `0${totalSecondsB}`
				else secondsB.innerHTML = totalSecondsB
			}	
		}
	}
}