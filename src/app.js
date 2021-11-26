function App() {
  // styles
  const container = { textAlign: "center", marginTop: "20px" };

  // javascript logic
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // menggunakan fetch then
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
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const response = await request.json();
      setNews(response);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <div style={container}>
      <h2>Data Fect</h2>
      {loading ? (
        <i>Loading....</i>
      ) : (
        <ul>
          {news.map(function (item) {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
