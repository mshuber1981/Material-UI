// Media
import logo from "./logo.svg";
// Components
import "./App.css";
import { Button } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.udemy.com/share/102yXc3@DnR_cJNygYC9o0Y4DFvried6gCErpUkT_4QCBJlwcsBs-jmO-a6ML9SQrSLEcWvo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained">Learn Material UI</Button>
        </a>
      </header>
    </div>
  );
}
