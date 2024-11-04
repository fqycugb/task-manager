import { useSelector, useDispatch } from 'react-redux'
import { Task } from '../types'
import { initTask, deleteTask, setTaskStatus, setTaskPriority } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { useEffect, type SyntheticEvent } from 'react'
import { getTasks } from '../mockData'

const TaskList = () => {
    const tasks: Task[] = useSelector((state: any) => state.tasks)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (id: number) => {
        dispatch(deleteTask(id))
    }
    const handleTaskClick = (id: number) => {
        navigate(`/task/${id}`);
    }

    const handleStatusChange = (id: number, status: string) => {
        dispatch(setTaskStatus(id, status))
    }

    const handlePriorityChange = (id: number, priority: string) => {
        dispatch(setTaskPriority(id, priority))
    }
    useEffect(() => {
        const initTasks = getTasks()
        console.log('initTasks', initTasks)
        dispatch(initTask(initTasks))
    }, [])

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}
                    onClick={(e: SyntheticEvent) => {
                        if (e.target !== e.currentTarget) {
                            return
                        }
                        handleTaskClick(task.id)
                    }}
                >
                    <div>{task.title}</div>
                    <div>Status: {task.status}</div>
                    <div>Priority: {task.priority}</div>
                    <button onClick={(e) => {
                        e.stopPropagation()
                        handleDelete(task.id)
                    }}>Delete</button>
                    <select
                        value={task.status}
                        onChange={(e) => handleStatusChange(task.id, e.target.value)}
                    >
                        <option value="pending">待办</option>
                        <option value="in-progress">进行中</option>
                        <option value="completed">已完成</option>
                    </select>
                    <select
                        value={task.priority}
                        onChange={(e) => handlePriorityChange(task.id, e.target.value)}
                    >
                        <option value="high">高</option>
                        <option value="medium">中</option>
                        <option value="low">低</option>
                    </select>
                </li>
            ))}
        </ul>
    )
}

export default TaskList