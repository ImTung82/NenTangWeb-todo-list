import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="flex justify-center h-screen bg-green-300">
      <div>
        <h1 className="text-3xl font-bold flex justify-center">
          TODO LIST
        </h1>
        <div className="flex justify-center">
          <AddTask />
        </div>
      </div>
    </div>
  );
}

export default App;
