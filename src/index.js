import React from 'react';
import ReactDOM from 'react-dom';

//Modules
// import JsxApp from './jsx/JsxApp';
// import ComponentsApp from './components/ComponentsApp';
// import SeasonsApp from './seasons/SeasonsApp';
// import PicsApp from './pics/PicsApp';
import RootsTubeApp from './roots-tube/RootsTubeApp';
//TODO: replace with a react-router
ReactDOM.render(<RootsTubeApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();