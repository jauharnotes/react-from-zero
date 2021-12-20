// import React from "react";
// import UseState from "./materi/hook/UseState";
function App() {
  /*#__PURE__*/
  React.createElement(React.Fragment, null); // styles

  const container = {
    textAlign: "center",
    marginTop: "20px"
  };
  const form = {
    margin: "20px 0 20px"
  }; // javascript logic

  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function saveTotodoHandler(event) {
    event.preventDefault();

    if (edit.id) {
      const updatetodo = {
        id: edit.id,
        activity
      };
      const editTodoId = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });
      console.log(editTodoId);
      return;
    }

    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setActivity("");
  }

  function handleEdit(todo) {
    setActivity(todo.activity);
    setEdit(todo);
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
    onSubmit: saveTotodoHandler,
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
  }, edit.id ? "Simpan perubahan" : "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (event) {
    return /*#__PURE__*/React.createElement("li", {
      key: event.id
    }, event.activity, /*#__PURE__*/React.createElement("button", {
      onClick: handleEdit.bind(this, event)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, event.id)
    }, "Hapus"));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));