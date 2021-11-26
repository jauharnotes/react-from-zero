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

  function addTotodo(event) {
    event.preventDefault();

    setTodos([...todos, activity]);
    setActivity("");
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
        {todos.map(function (list, index) {
          return <li key={index}>{list}</li>;
        })}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
