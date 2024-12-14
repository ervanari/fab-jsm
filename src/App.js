import { FaWhatsapp, FaInstagram, FaFacebookMessenger, FaRocketchat } from "react-icons/fa";
import Fab from "./components/floating-button-action/FloatingButtonAction.jsx";

const actions = [
  { label: "WhatsApp", icon: <FaWhatsapp />, onClick: console.log },
  { label: "Instagram", icon: <FaInstagram />, onClick: console.log },
  { label: "Facebook Messenger", icon: <FaFacebookMessenger />, onClick: console.log },
  { label: "Live Chat", icon: <FaRocketchat />, onClick: console.log },
];

const App = () => {
  return (
      <main>
        <Fab actions={actions} />
      </main>
  );
};

export default App;
