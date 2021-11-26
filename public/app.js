function App() {
  // styles
  const container = {
    textAlign: "center",
    marginTop: "20px"
  }; // javascript logic

  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // menggunakan fetch then
  // React.useEffect(function () {
  //   const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     });
  // }, []);
  // menggunakan async await

  React.useEffect(() => {
    async function getData() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const response = await request.json();
      setNews(response);
      setLoading(false);
    }

    getData();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("h2", null, "Data Fect"), loading ? /*#__PURE__*/React.createElement("i", null, "Loading....") : /*#__PURE__*/React.createElement("ul", null, news.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));