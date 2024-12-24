import { useState, useEffect } from "react";
import cn from "classnames";
import "./styles.scss";


const FloatingButtonAction = ({ actions }) => {
    const [open, setOpen] = useState(false);

    const handleClickUrl = (url,label) => {
        label === 'Chat Bot' ? window.location.href = url : window.open(url, "_blank")
        // if(label === 'Chat Bot' && url === ''){
        //     FresChat()
        // }else{
        //     window.location.href = url
        // }
    };

    useEffect(() => {
        const handleScroll = () => {
            setOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [actions]);


    return (
        <>
            <div className="container">
                <h1>Selamat Datang di Website RS Vertikal</h1>
                <p>
                    Halaman ini dikembangkan sebagai platform pengujian untuk fitur widget
                    chat
                </p>
                <div className="footer">Synergix Solution &copy; 2024</div>
            </div>
            <ul
                className={cn("fab-container", {open})}
                onClick={() => setOpen(!open)}
            >
                <li className="fab-button">
                    <img src="https://img.icons8.com/3d-fluency/94/online-support--v3.png" alt="Live Chat" width={30}/>
                </li>
                {open && actions.map((action, index) => (
                    <li
                        style={{transitionDelay: `${index * 25}ms`}}
                        className={cn("fab-action", {open})}
                        key={action.label}
                        onClick={() => handleClickUrl(action.onClick, action.label)}
                    >
                        <img src={action.icon} alt={action.label} width={30}/>
                        <span className="tooltip">{action.label}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FloatingButtonAction;
