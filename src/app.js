function App() {
  // styles
  const container = {
    textAlign: "center",
    marginTop: "20px",
  };
  const form = { margin: "20px 0 20px" };

  // javascript logic
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function addTotodo(event) {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
      },
    ]);
    setActivity("");
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);
  }

  return (
    <div style={container}>
      <h1>Simple Todo List</h1>
      <form onSubmit={addTotodo} style={form}>
        <input
          type="text"
          placeholder="Nama Aktifitas"
          value={activity}
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map(function (event) {
          return (
            <li key={event.id}>
              {event.activity}
              <button onClick={() => removeTodoHandler(event.id)}>Hapus</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
