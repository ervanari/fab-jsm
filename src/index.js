import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import FloatingButtonAction from './components/floating-button-action/FloatingButtonAction.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <FloatingButtonAction actions={actions}/>
//   </React.StrictMode>
// );

export const renderFloatingButtonAction = (agents, containerId) => {
    ReactDOM.render(
        <FloatingButtonAction actions={agents} />,
        document.getElementById(containerId)
    );
};

window.widgetJsm = { render: renderFloatingButtonAction };


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


