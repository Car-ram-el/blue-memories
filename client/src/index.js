import {createRoot} from 'react-dom/client';
import './styles.css'
import App from './App';
import {Provider} from 'react-redux'; // access a state (or the redux store) from anywhere
import {configureStore} from '@reduxjs/toolkit';
import reducers from './actions/reducersIndex.js';

const store= configureStore({
  reducer:reducers,
});

const domNode=document.getElementById('root');
// React will create a root for the domNode, and take over managing the DOM inside it
const root=createRoot(domNode);
root.render(
  <Provider store={store}><App/></Provider>
);