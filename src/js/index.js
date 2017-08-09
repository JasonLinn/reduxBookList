import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import '../../semantic/src/semantic.less';
import '../sass/main.scss';
import App from "./components/app";
import reducers from "./reducers";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector(".container")
);