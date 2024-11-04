import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Task } from '../types';

const TaskDetails = () => {
    const { id } = useParams();
    const tasks: Task[] = useSelector((state: any) => state.tasks);
    const task = tasks.find(task => task.id === parseInt(id!));

    if (!task) {
        return <div>Task not found</div>;
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <div>{task.description}</div>
            <div>Status: {task.status}</div>
            <div>Priority: {task.priority}</div>
        </div>
    );
};

export default TaskDetails;