import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {

  return (
    <Provider store={store} >
      <div className="App">
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer Cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
