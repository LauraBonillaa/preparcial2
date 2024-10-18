import { Actions } from "../types/store"
import { Task } from "../types/tasks"

export const addTask=(payload: Task) => {
    return {
        action: Actions.ADD_TASK,
        payload
    }
    
}
export const removeTask=(payload: number) => {
    return {
        action: Actions.REMOVE_TASK,
        payload
    }
    
}

export const toggleTask=(payload: number) => {
    return {
        action: Actions.TOOGLE_TASK,
        payload
    }
    
}