import "./App.css";

import Counter from "./components/Counter";

import store from "./store/configureStore";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="container">
      <div>Redux Counter</div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
