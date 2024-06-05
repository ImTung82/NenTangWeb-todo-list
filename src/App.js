import logo from './logo.svg';
import './App.css';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">
        TODO LIST
      </h1>
      <AddTask />

    </div>
  );
}

export default App;
