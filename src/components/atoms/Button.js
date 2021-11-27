import React from "react";

const Button = (props) => {
    return (
        <button>
            <a href={props.url} className="py-3 px-7 bg-green-700 inline-block capitalize text-white text-sm font-semibold rounded cursor-pointer focus:ring-offset-2 focus:ring-offset-transparent focus:ring focus:ring-green-700 hover:bg-green-600">{props.text}</a>
        </button>
    )
}

export default Button;
