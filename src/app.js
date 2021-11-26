function App() {
  // styles
  const container = { textAlign: "center", marginTop: "20px" };

  const fruits = ["Apple", "Banana", "Orange", "Ganyong", "Banana"];

  console.log(fruits);

  return (
    <div style={container}>
      <ul>
        {fruits.map(function (fruit, index) {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
