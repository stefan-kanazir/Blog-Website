import React from "react";

const ButtonWhite = (props) => {
    return (
        <button>
            <a href={props.url} className="py-3 px-7 bg-white inline-block capitalize text-sm font-semibold rounded cursor-pointer focus:ring-offset-2 focus:ring-offset-transparent focus:ring focus:ring-white hover:bg-gray-200">{props.text}</a>
        </button>
    )
}

export default ButtonWhite;
