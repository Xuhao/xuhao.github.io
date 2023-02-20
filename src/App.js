import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={logo} alt="avatar" />
        <p>Xuhao</p>
      </header>
      <div>golang / nodejs / react / k8s / devops</div>
      <div className="github-link">
        <a href="https://github.com/Xuhao">@github</a>
      </div>
      <div className="icp-links">
        <a target="_blank" href="http://www.miitbeian.gov.cn">
          豫ICP备11005941号-4
        </a>
        <br />
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41152402000161"
        >
          豫公网安备41152402000161号
        </a>
      </div>
    </div>
  );
}

export default App;
