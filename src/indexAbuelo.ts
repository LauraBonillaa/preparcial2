import "./components/TaskForm/taskform"
import "./components/TaskList/tasklist"
import { addObserver, appState } from "./store/index";
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        addObserver(this)
    }

    connectedCallback(){
        console.log(appState)
        console.log(appState.tasks)
        this.render()
    }
    render(){
       if(!this.shadowRoot)return
        this.shadowRoot.innerHTML=`
        <task-form></task-form>
        <task-list></task-list>
        `
       
    }




}
customElements.define('app-container',AppContainer)
export default AppContainer