import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi"

const SecondaryButton = (props) => {
    return (
        <button>
            <a href={props.url} className="flex items-center py-3 px-7 capitalize text-sm font-semibold cursor-pointer hover:underline text-white">{props.text} <HiArrowNarrowRight className="ml-2 "/></a>
        </button>
    )
}

export default SecondaryButton;
