import { Link } from "react-router-dom";

const Button = ({ text, href, children, className, onClick }) => {
    console.log(href);

    return (
        <Link
            onClick={onClick}
            to={href}
            className={`px-5 py-3 rounded-lg text-secondary font-bold leading-7 flex items-center gap-3 bg-btnColors btnHover ${className}`}

        >
            {children}
            <span className="ml-2">{text}</span>
        </Link>
    );
};

export default Button;
