import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { persistor, store } from './redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>  
    </Provider>
  </React.StrictMode>
);

// </PersistGate> are used to store user in local StorageEvent, if we refresh the page the user get not deleted