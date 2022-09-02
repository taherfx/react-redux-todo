import logo from './logo.svg';
import './App.css';
import CreateTodo from './component/CreateTodo';
import ListTodo from './component/ListTodo';

function App() {
  return (
    <div className="App">
      <CreateTodo />
      <ListTodo />
    </div>
  );
}

export default App;
