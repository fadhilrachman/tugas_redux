import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "./features/store";
import Redux from "./Redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Redux />
      </Provider>
    </div>
  );
}

export default App;
