import ReactDOM from "react-dom/client";
import Router from "./router/Router.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <Router />
  </Provider>
);
