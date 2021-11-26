function App() {
  // styles
  const container = {
    textAlign: "center",
    marginTop: "20px"
  };
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null);
  React.useEffect(() => {
    console.log(judulRef);
    setTimeout(() => {
      judulRef.current.textContent = "Aplikasi Dirubah";
    }, 2000);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "Aplications"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));