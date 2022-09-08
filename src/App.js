import logo from "./logo.svg";
import "./App.css";

// amplify stuff
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">HELLO WORLD</header>
    </div>
  );
}

export default withAuthenticator(App);
