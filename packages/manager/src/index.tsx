import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "@patternfly/react-core/dist/styles/base.css";
import "react-toastify/dist/ReactToastify.css";
import "./static/css/root.css";
import App from "./App";

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
