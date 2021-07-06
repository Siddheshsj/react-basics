// Import the React and ReactDOM lib
import React from "react";
import ReactDOM from "react-dom";

function txt() {
    return 'click';
}

//Create a react component
const App = () => {
    const btn = 'me';
    return (
        <div>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>
                {txt()} {btn}
            </button>
        </div>
    );
};

//show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);