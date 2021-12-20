// import React from "react";
// import UseState from "./materi/hook/UseState";

function App() {
  <>{/* <UseState /> */}</>;
  // styles
  const container = {
    textAlign: "center",
    marginTop: "20px",
  };
  const form = { margin: "20px 0 20px" };

  // javascript logic
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function saveTotodoHandler(event) {
    event.preventDefault();

    if (edit.id) {
      const updatetodo = {
        id: edit.id,
        activity,
      };
      const editTodoId = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });

      console.log(editTodoId);

      return;
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
      },
    ]);
    setActivity("");
  }

  function handleEdit(todo) {
    setActivity(todo.activity);
    setEdit(todo);
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
      <form onSubmit={saveTotodoHandler} style={form}>
        <input
          type="text"
          placeholder="Nama Aktifitas"
          value={activity}
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? "Simpan perubahan" : "Tambah"}</button>
      </form>
      <ul>
        {todos.map(function (event) {
          return (
            <li key={event.id}>
              {event.activity}
              {/* <button onClick={() => removeTodoHandler(event.id)}>Hapus</button> */}
              <button onClick={handleEdit.bind(this, event)}>Edit</button>
              <button onClick={removeTodoHandler.bind(this, event.id)}>
                Hapus
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
