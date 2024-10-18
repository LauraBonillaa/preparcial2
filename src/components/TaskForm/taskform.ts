import Taskitem from "../Taskitem/taskitem";
import { Task } from "../../types/tasks";
import { appState, dispatch } from "../../store/index";
import { addTask } from "../../store/actions";

class TaskForm extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
           <h1>Tasks</h1>
           <form class="task-form">
           <input type="text" id="task-input" placeholder="Task name" required>
           <button type="submit" id="add-button">Agregar</button>
           </form>
           
           `
        }

        const taskForm = this.shadowRoot?.querySelector('.task-form') as HTMLFormElement
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault()
            const taskInput = this.shadowRoot?.querySelector('#task-input') as HTMLInputElement
            const taskName = taskInput.value
            const newTask: Task = {
                id:Date.now(),
                title: taskName,
                state: false

            }
            dispatch(addTask(newTask))
            console.log(appState)
        })
    }




}
customElements.define('task-form', TaskForm)
export default TaskForm