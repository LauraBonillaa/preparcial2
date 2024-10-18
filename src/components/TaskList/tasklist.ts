import { addObserver, appState } from "../../store/index";
import { Task } from "../../types/tasks";
import Taskitem, { Attributes } from "../Taskitem/taskitem";

class TaskList extends HTMLElement{
    taskitems: Taskitem []=[]
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        addObserver(this)

        console.log('appstate', appState.tasks)

        if(appState.tasks != undefined){
            appState.tasks.forEach((task: any) => {
                const taskItem = this.ownerDocument.createElement('task-item') as Taskitem
            taskItem.setAttribute(Attributes.uid, task.id)
            taskItem.setAttribute(Attributes.tasktitle, task.title)
            taskItem.setAttribute(Attributes.state,task.state )
            this.taskitems.push(taskItem)
            });

        }

        
    }

    connectedCallback(){
        this.render()
    }
    render(){
        if(this.shadowRoot){
            this.taskitems.forEach((taskItem)=>{
                this.shadowRoot?.appendChild(taskItem)
            })
        }
    }




}
customElements.define('task-list',TaskList)
export default TaskList