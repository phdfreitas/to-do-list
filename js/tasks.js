function tasks() {
	let myTasks = document.getElementsByName('to-do')

	for (let i = 0; i < myTasks.length; i++) {
		if(myTasks[i].checked == true){
			console.log(`Valor: ${i}`)
		}
	}
}
tasks()