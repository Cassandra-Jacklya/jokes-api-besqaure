import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  const [jsonData, setJsonData] = React.useState([]);

  // React.useEffect(() => {
  //   const data = logJSONData();
  //   setJsonData(data);
  // }, [])

  const logJSONData = () => {
    axios
      .get(
        "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist&amount=10"
      )
      .then((res) => {
        setJsonData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(jsonData);
  };
  // async function logJSONData() {
  //   const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist&amount=10");
  //   const jsonData = await response.json();
  //   console.log(jsonData.jokes);
  //   return jsonData.jokes;
  // }

  //setJsonData(logJSONData());
  // console.log(jsonData);

  return (
    <div>
      <button onClick={logJSONData}>Click Me</button>
      {jsonData.amount}
      {jsonData.jokes.length > 0 &&
        jsonData.jokes.map((joke, key) => {
          return <p key={key}>{joke.category}</p>;
        })}
    </div>
  );
}

export default App;
