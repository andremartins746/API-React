import { useState, useEffect } from "react";
const App = () => {
  // const [Form, setForm] = useState({});
  const [Data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/movie_id?language=en-US";
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => setData(json))
      .catch((err) => console.error("error:" + err));
    
  }, [Data]);

  return (
    <>
      <h1>Ola mundo!!</h1>
    </>
  );
};

export default App;
