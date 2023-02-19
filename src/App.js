import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="avatar" />
        <p>Xuhao</p>
      </header>
      <div>golang / nodejs / react / k8s / devops</div>
      <div className="github-link">
        <a href="https://github.com/Xuhao">@github</a>
      </div>
    </div>
  );
}

export default App;
