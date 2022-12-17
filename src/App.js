

import { Provider } from 'react-redux';
import './App.css';
import store from './app/store';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    
    </div>
  );
}

export default App;
