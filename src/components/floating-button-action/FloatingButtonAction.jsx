import { useState } from "react";
import cn from "classnames";
import "./styles.scss";

const FloatingButtonAction = ({ actions }) => {
    const [open, setOpen] = useState(false);

    const handleClickUrl = (url) => {
        window.open(url, "_blank");
    };

    return (
        <ul
            className={cn("fab-container", { open })}
            onClick={() => setOpen(!open)}
        >
            <li className="fab-button">
                <img src="https://img.icons8.com/3d-fluency/94/online-support--v3.png" alt="Live Chat" width={30} />
            </li>
            {actions.map((action, index) => (
                <li
                    style={{ transitionDelay: `${index * 25}ms` }}
                    className={cn("fab-action", { open })}
                    key={action.label}
                    onClick={() => handleClickUrl(action.onClick)}
                >
                       <img src={action.icon} alt={action.label} width={30} />
                    <span className="tooltip">{action.label}</span>
                </li>
            ))}
        </ul>
    );
};

export default FloatingButtonAction;
