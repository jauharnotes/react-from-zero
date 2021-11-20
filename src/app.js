function App() {
  const useState = React.useState(0);
  //   const count = state[0];
  //   const updateState = state[1];
  const [count, setCount] = useState;

  return (
    <div>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
