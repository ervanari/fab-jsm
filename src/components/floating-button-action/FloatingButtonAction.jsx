import { useState } from "react";
import cn from "classnames";
import { MdSupportAgent } from "react-icons/md";
import "./styles.scss";

const FloatingButtonAction = ({ actions }) => {
    const [open, setOpen] = useState(false);

    return (
        <ul
            className={cn("fab-container", { open })}
            onClick={() => setOpen(!open)}
        >
            <li className="fab-button">
                <MdSupportAgent />
            </li>
            {actions.map((action, index) => (
                <li
                    style={{ transitionDelay: `${index * 25}ms` }}
                    className={cn("fab-action", { open })}
                    key={action.label}
                    onClick={action.onClick}
                >
                       {action.icon}
                    <span className="tooltip">{action.label}</span>
                </li>
            ))}
        </ul>
    );
};

export default FloatingButtonAction;
