function App() {
  // styles
  const container = {
    textAlign: "center",
    marginTop: "20px"
  };
  const fruits = ["Apple", "Banana", "Orange", "Ganyong", "Banana"];
  console.log(fruits);
  return /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, fruit);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));