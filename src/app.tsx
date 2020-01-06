import React from 'react';
import ReactDOM from 'react-dom';
import Kanban from './components/screen/Kanban';
import 'normalize.css/normalize.css';
import '../public/styles/style.scss';
import { createStore } from 'redux';
import { taskReducer } from './reducer/task';
import { Provider } from 'react-redux';

let store = createStore(taskReducer);
ReactDOM.render(<Provider store = {store}><Kanban /></Provider>, document.querySelector('#root'));