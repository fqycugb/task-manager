import  TaskList  from '../components/TaskList'
import  TaskForm  from '../components/TaskForm'

const HomePage = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default HomePage;