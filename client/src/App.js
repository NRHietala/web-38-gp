import "./App.css";
import { useState, useEffect } from "react";

function url(path) {
  return process.env.NODE_ENV === "development"
    ? `http:localhost:5000${path}`
    : path;
}
// development
// production
function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(url("/api/data"))
      // https://heroku.com/example
      // http://localhost:5000
      .then(res => res.json())
      .then(goods => setData(goods.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">{data}</header>
    </div>
  );
}

export default App;
