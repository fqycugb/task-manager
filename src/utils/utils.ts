import { Task, TaskPriority, TaskStatus } from "../types";

export const handleTaskPrioity = (task: Task): number => {
    if(task.priority==='high') {
        return 1
    } else if(task.priority ==='medium'){
        return 2
    } else {
        return 3
    }
    
}
export const handleTaskStatus = (task: Task): number => {
    if(task.status=== 'completed') {
        return 3
    } else if (task.status==='in-progress'){
        return 2
    } else {
        return 1
    }
}