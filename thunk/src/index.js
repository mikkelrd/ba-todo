import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
	import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
