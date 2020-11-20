import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';

import App from './App';
import reportWebVitals from './config/reportWebVitals';
import { unregister } from './config/registerServiceWorker';

window.renderEvent = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  unregister();
};

window.unmountRestaurant = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
