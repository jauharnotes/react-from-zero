function App() {
  // styles
  const container = {
    textAlign: "center",
    marginTop: "20px"
  };
  const form = {
    margin: "20px 0 20px"
  }; // javascript logic

  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function addTotodo(event) {
    event.preventDefault();
    setTodos([...todos, activity]);
    setActivity("");
  }

  return /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTotodo,
    style: form
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (list, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, list);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));