function App() {
  // styles
  const container = { textAlign: "center", marginTop: "20px" };
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null);

  React.useEffect(() => {
    console.log(judulRef);
    setTimeout(() => {
      judulRef.current.textContent = "Aplikasi Dirubah";
    }, 2000);
  }, []);

  return (
    <div style={container}>
      <h1 ref={judulRef}>Aplications</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
