function App() {
  // styles
  const container = {
    textAlign: "center",
    marginTop: "20px"
  }; // javascript logic

  const [name, setName] = React.useState("Johar");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`nama: ${name}`);
  }

  return /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    value: name,
    onChange: function (event) {
      setName(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));