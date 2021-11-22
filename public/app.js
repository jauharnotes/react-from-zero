function App() {
  const useState = React.useState(0); //   const count = state[0];
  //   const updateState = state[1];

  const [count, setCount] = useState;
  const [click, setClick] = React.useState(false);
  React.useEffect(() => {
    console.log(document.getElementById("judul"));
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    id: "judul"
  }, "Hello Judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setClick(true);
    }
  }, "Klik Aku Dong!"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));