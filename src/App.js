import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';

function App() {
  return  (
    <div id="app" > 
      <Provider store={store }>
      <Home />
      </Provider>
    </div>
  );
}

export default App;
