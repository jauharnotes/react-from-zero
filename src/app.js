function App() {
  const useState = React.useState(0);
  //   const count = state[0];
  //   const updateState = state[1];
  const [count, setCount] = useState;

  const [click, setClick] = React.useState(false);

  React.useEffect(() => {
    console.log(document.getElementById("judul"));
  }, []);

  return (
    <div>
      <div id="judul">Hello Judul</div>
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
      <button
        onClick={function () {
          setClick(true);
        }}
      >
        Klik Aku Dong!
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
