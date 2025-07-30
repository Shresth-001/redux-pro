import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { Counter } from "./components";


function App() {
  return (
    <Provider store={store}>
        <Counter/>
    </Provider>
  );
}

export default App;
