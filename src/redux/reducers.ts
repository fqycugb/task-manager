import { Task } from '../types';
import { handleTaskPrioity, handleTaskStatus } from '../utils/utils';


const initialState: Task[] = [];

const taskReducer = (state = initialState, action: any) => {
  console.log('action', action)
  switch (action.type) {
    case 'INIT_TASK':
    return [...action.payload]
    case 'CREATE_TASK':
      return [...state, action.payload];
    case 'EDIT_TASK':
      return state.map(task =>
        task.id === action.payload.id ? action.payload : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'SET_TASK_STATUS':
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.status }
          : task
      );
    case 'SET_TASK_PRIORITY':
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, priority: action.payload.priority }
          : task
      );
    case 'SORT_TASK_PRIORITY':
      var clone = [...state]
      clone.sort((taskA, taskB) => {
        const a = handleTaskPrioity(taskA)
        const b = handleTaskPrioity(taskB)
        return a - b
      })
      return clone
    case 'SORT_TASK_STATUS':
      var clone = [...state]
      clone.sort((taskA, taskB) => {
        const a = handleTaskStatus(taskA)
        const b = handleTaskStatus(taskB)
        return a - b
      })
      return clone
    default:
      return state;
  }
};

export default taskReducer;