export type TaskPriority = 'high' | 'medium' | 'low'
export type TaskStatus = 'pending' | 'in-progress' | 'completed'
export interface Task {
    id: number;
    title: string;
    description: string;
    priority: TaskPriority;
    status: TaskStatus;
}