import "./App.css";

function App() {
  const todos = ["Learn reactjs", "Learn vuejs"];

  return (
    <div className="App">
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  );
}

export default App;
