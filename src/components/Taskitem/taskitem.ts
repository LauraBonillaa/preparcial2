import { addObserver } from "../../store/index";
import { Task } from "../../types/tasks";
import { appState, dispatch } from "../../store/index";
import { addTask,removeTask,toggleTask  } from "../../store/actions";

export enum Attributes {
    'uid' = 'uid',
    'tasktitle' = 'tasktitle',
    'state' = 'state'
}
class Taskitem extends HTMLElement {
    uid?: number
    tasktitle?: string
    state?: boolean


    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        addObserver(this)
    }

    static get observedAttributes() {
        const attrs: Record<Attributes, null> = {
            uid: null,
            tasktitle: null,
            state: null,
        }
        return Object.keys(attrs)
    }


    connectedCallback() {
        this.render()
    }

    attributeChangeCallback(propName: Attributes, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attributes.uid:
                this.uid = newValue ? Number(newValue) : undefined
                break
            case Attributes.state:
                this.state = newValue ? newValue === 'true' : undefined
                break
            default:
                this[propName] = newValue
                break
        }
        this.render()

    }
    render() {
      if(this.shadowRoot){
        this.shadowRoot.innerHTML=`
        <article>
        <h3>${this.getAttribute("tasktitle")}</h3>
        <input type="checkbox" ${this.getAttribute("state")}? 'checked':''} class="check-task"/>
        <button class="remove-button">Eliminar</button>
        </article>
        `
      }
      const deletebutton = this.shadowRoot?.querySelector('.remove-button') as HTMLButtonElement
      deletebutton.addEventListener('click',()=>{
        const idToRemove = Number(this.getAttribute("uid"))
        dispatch(removeTask(idToRemove))
      })

      const checkbton = this.shadowRoot?.querySelector('.check-task') as HTMLInputElement
      checkbton.addEventListener('change',()=>{
        const idToToggle = Number(this.getAttribute('uid'))
        dispatch(toggleTask(idToToggle))

      })
    }





}
customElements.define('task-item', Taskitem)
export default Taskitem