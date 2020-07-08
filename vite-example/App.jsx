import { React } from "es-react";
import logo from "./logo.svg";
import "./App.css";
import Root from "./Root";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <ul>
          <li>
            <a className="App-link" href="#/">
              home
            </a>
          </li>
          <li>
            <a className="App-link" href="#/main">
              main
            </a>
          </li>
          <li>
            <a className="App-link" href="#/user">
              user
            </a>
          </li>
          <li>
            <a className="App-link" href="#/about">
              about
            </a>
          </li>
        </ul>

        <div>
          <h3>下面是路由页面</h3>
          <Root />
        </div>
      </header>
    </div>
  );
}
export function Home() {
  return <div>home</div>;
}
export function Main() {
  return <div>main</div>;
}
export function User() {
  return <div>user</div>;
}
export function About() {
  return <div>about</div>;
}

export default App;
