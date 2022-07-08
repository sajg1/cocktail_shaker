
import './App.css';
import logo from './logo.svg';
import { useState } from 'react';
import axios from 'axios';


function App() {

  const [cocktailData, setCocktailData] = useState(null);

  function getData() {
    axios({
        method: "GET",
        url: "/random-cocktail"
      })
      .then((response) => {
        const res = response.data;
        console.log(res)
        setCocktailData(res)
      })
      .catch((error) => {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {cocktailData && <div>
              <p>Profile name: {cocktailData}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

export default App;
