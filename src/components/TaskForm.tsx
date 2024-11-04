import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, editTask, sortTaskPriority, sortTaskStatus } from '../redux/actions';
import type { Task, TaskPriority, TaskStatus } from '../types';


const TaskForm = ({ editTaskId = null }: { editTaskId?: number | null }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<TaskPriority>('medium');
    const [status, setStatus] = useState<TaskStatus>('pending');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        console.log('handleSubmit')
        e.preventDefault();
        if (editTaskId) {
            dispatch(editTask({ id: editTaskId, title, description, priority, status }));
        } else {
            dispatch(createTask({ id: Date.now(), title, description, priority, status }));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)}>
                <option value="high">高</option>
                <option value="medium">中</option>
                <option value="low">低</option>
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                <option value="pending">待办</option>
                <option value="in-progress">进行中</option>
                <option value="completed">已完成</option>
            </select>
            <button type="submit">创建</button>
            <button type='button' onClick={() => {
                console.log('sortTaskPriority')
                dispatch(sortTaskStatus())
            }}>按状态排序</button>
            <button type='button' onClick={() => {
                console.log('sortTaskStatus')
                dispatch(sortTaskPriority())
            }}>按优先级排序</button>
        </form>
    );
};

export default TaskForm;