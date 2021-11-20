function App() {
  const useState = React.useState(0); //   const count = state[0];
  //   const updateState = state[1];

  const [count, setCount] = useState;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));