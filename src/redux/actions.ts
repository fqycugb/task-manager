import { Task } from '../types'

export const initTask = (tasks: Task[]) => ({
  type: 'INIT_TASK',
  payload: tasks
})

export const createTask = (task: Task) => ({
  type: 'CREATE_TASK',
  payload: task,
})

export const editTask = (task: Task) => ({
  type: 'EDIT_TASK',
  payload: task,
})

export const deleteTask = (id: number) => ({
  type: 'DELETE_TASK',
  payload: id,
})

export const setTaskStatus = (id: number, status: string) => ({
  type: 'SET_TASK_STATUS',
  payload: { id, status },
})

export const setTaskPriority = (id: number, priority: string) => ({
  type: 'SET_TASK_PRIORITY',
  payload: { id, priority },
})

export const sortTaskPriority = () => ({
  type: 'SORT_TASK_PRIORITY'
})

export const sortTaskStatus = () => ({
  type: 'SORT_TASK_STATUS'
})