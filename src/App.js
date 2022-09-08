import logo from "./logo.svg";
import "./App.css";

// amplify stuff
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">HELLO WORLD</header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
