function App() {
  // styles
  const container = { textAlign: "center", marginTop: "20px" };

  // javascript logic
  const [name, setName] = React.useState("Johar");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`nama: ${name}`);
  }

  return (
    <div style={container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={function (event) {
              setName(event.target.value);
            }}
          />
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
