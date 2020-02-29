import React from "react";
import ReactDOM from "react-dom";

//Modules
// import JsxApp from './jsx/JsxApp';
// import ComponentsApp from './components/ComponentsApp';
// import SeasonsApp from './seasons/SeasonsApp';
// // import PicsApp from './pics/PicsApp';
// import RootsTubeApp from './roots-tube/RootsTubeApp';
// import SongsApp from "./songs/SongsApp";
import BlogApp from "./blog/BlogApp";
// import PortfolioApp from "./portfolio/PortfolioApp";
//TODO: replace with a react-router
ReactDOM.render(<BlogApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.a
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
