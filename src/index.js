import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import SocialMediaButtons from './components/floating-button-action/FloatingButtonAction.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <FloatingButtonAction actions={actions}/>
//   </React.StrictMode>
// );

const agents = [
    { label: "WhatsApp", icon: "https://img.icons8.com/3d-fluency/94/whatsapp.png", onClick: 'https://api.whatsapp.com/send?phone=628973856130' },
    { label: "Chat Bot", icon: "https://img.icons8.com/3d-fluency/94/communication.png", onClick: 'https://rs-widget.synergix.co.id/chatbot/' },
    { label: "Voice Bot", icon: "https://img.icons8.com/3d-fluency/94/chatbot.png", onClick: 'https://108.143.51.70/app' },
    { label: "Video Call", icon: "https://img.icons8.com/3d-fluency/94/video-message.png", onClick: 'https://vcall-chat.mala-widiyanto.workers.dev/set-username' },
];

export const renderSocialMediaButtons = (agents, containerId) => {
    ReactDOM.render(
        <SocialMediaButtons actions={agents} />,
        document.getElementById(containerId)
    );
};

window.widgetJsm = { render: renderSocialMediaButtons };


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


