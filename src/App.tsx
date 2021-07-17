import React from 'react';
import './App.css';
import {BogglePuzzle} from './modules/boggle/components/BogglePuzzle'
import {store} from "./store"
import {Provider} from "react-redux"
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          <BogglePuzzle />
      </div>
    </Provider>
  );
}

export default App;
