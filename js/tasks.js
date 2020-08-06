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

	getAllTasks(){
		let tasks = []
		let taskId = localStorage.getItem('taskId')

		for (let i = 1; i <= taskId; i++) {
			let task = localStorage.getItem(i)
			
			if(task !== null) tasks.push(task)
		}

		return tasks
	}
}

let db = new Db()

function addNewTask(){
	
	let task = document.getElementById('task')
	db.newTask(task.value)
}

function loadTasks(){
	let tasks = []
	tasks = db.getAllTasks()

	let taskList = document.getElementById('all_tasks')
	
	tasks.forEach( (t, index) => {
		let row = taskList.insertRow()
		let input = document.createElement('input')
		input.setAttribute('type', 'checkbox')

		row.insertCell(0).innerHTML = index + 1
		row.insertCell(1).innerHTML = t
		row.insertCell(2).appendChild(input)
	});
}