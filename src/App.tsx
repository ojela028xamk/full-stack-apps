import "./App.scss";
import TodoList from "./components/TodoList";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="todolist" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
