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

  function generateId() {
    return Date.now();
  }

  function addTotodo(event) {
    event.preventDefault();
    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setActivity("");
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
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
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (event) {
    return /*#__PURE__*/React.createElement("li", {
      key: event.id
    }, event.activity, /*#__PURE__*/React.createElement("button", {
      onClick: () => removeTodoHandler(event.id)
    }, "Hapus"));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));