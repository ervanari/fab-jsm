import Fab from "./components/floating-button-action/FloatingButtonAction.jsx";

const actions = [
  { label: "WhatsApp", icon: "https://img.icons8.com/3d-fluency/94/whatsapp.png", onClick: 'https://api.whatsapp.com/send?phone=628973856130' },
  // { label: "Instagram", icon: "https://img.icons8.com/3d-fluency/94/instagram-new.png", onClick: console.log },
  // { label: "Facebook Messenger", icon: "https://img.icons8.com/3d-fluency/94/facebook-messenger.png", onClick: console.log },
  { label: "Chat Bot", icon: "https://img.icons8.com/3d-fluency/94/communication.png", onClick: 'https://rs-widget.synergix.co.id/chatbot/' },
  { label: "Voice Bot", icon: "https://img.icons8.com/3d-fluency/94/chatbot.png", onClick: 'https://108.143.51.70/app' },
  { label: "Video Call", icon: "https://img.icons8.com/3d-fluency/94/video-message.png", onClick: 'https://vcall-chat.mala-widiyanto.workers.dev/set-username' },
];

const App = () => {
    return (
      <main>
        <Fab actions={actions}/>
      </main>
    );
};

export default App;
