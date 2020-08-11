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
			
			if(task !== null && task !== undefined && task !== '') tasks.push(`${task}${i}`)
		}

		return tasks
	}

	deleteTask(task){
		localStorage.removeItem(task)
	}
}

let db = new Db()

function addNewTask(){
	
	let task = document.getElementById('task')

	console.log(task.value)
	if(task.value !== undefined && this.value !== null && this.value !== ''){
		db.newTask(task.value)
	}
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
		row.insertCell(1).innerHTML = t.slice(0, t.length - 1)
		row.insertCell(2).appendChild(input)

		let btn = document.createElement('span')
		btn.innerHTML = 'clear'
		btn.className = 'material-icons remove'
		btn.style.cursor = 'pointer'
		btn.style.lineHeight = 1.4

		let id = t.slice(t.length - 1, t.length)

		btn.onclick = function(){
			db.deleteTask(id)
			window.location.reload()
		}

		row.insertCell(3).appendChild(btn)
	});
}