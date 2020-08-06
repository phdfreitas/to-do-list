class Db{

	constructor(){
		let taskId = localStorage.getItem('taskId')

		if(taskId === null){
			localStorage.clear()
			localStorage.setItem('taskId', 0)
		}
	}

	getNextId(){
		let nextId = localStorage.getItem('taskId')
		return Number(nextId) + 1
	}

	newTask(task){
		let taskId = this.getNextId()
		localStorage.setItem(taskId, task)
		localStorage.setItem('taskId', taskId)
	}
}

let db = new Db()

function addNewTask(){

	let task = document.getElementById('task')

	db.newTask(task.value)
}