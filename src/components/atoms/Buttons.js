import tw from "tailwind-styled-components";

const Button = tw.button`
    py-3 
    px-7
    text-sm
    capitalize
    font-semibold
    rounded
    cursor-pointer
    flex
    items-center
    justify-items-center
    transition
    ease-in-out
    duration-300
`;

export const PrimaryButton = tw(Button) `
    $light: boolean

    ${(p) => (p.$light ? 
        `
        text-black
        bg-white

        hover:bg-gray-200

        focus:ring 
        focus:ring-gray-300 
        focus:outline-none
        focus:ring-offset-2 
        focus:ring-offset-transparent 
        ` : `
        bg-green-700
        text-white

        hover:bg-green-600

        focus:ring 
        focus:ring-green-900 
        focus:ring-offset-2 
        focus:ring-offset-transparent 
        `
    )}
`;

export const SecondaryButton = tw(Button) `
    border-2

    $light: boolean

    ${(p) => (p.$light ? 
        `
        text-white

        hover:bg-gray-50
        hover:bg-opacity-10

        focus:ring 
        focus:ring-white 
        focus:ring-offset-2 
        focus:ring-offset-transparent 
        ` : `
        text-green-700
        border-green-700

        hover:bg-green-50
        hover:bg-opacity-10

        focus:ring 
        focus:ring-green-900 
        focus:ring-offset-2 
        focus:ring-offset-transparent 
        `
    )}
`;

export const TertiaryButton = tw(Button) `
    hover:underline

    $light: boolean

    ${(p) => (p.$light ? 
        `
        text-white
        ` : `
        text-black
        `
    )}
`;
