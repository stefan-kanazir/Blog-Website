// import React from "react";

// const Button = (props) => {
//     return (
//         <button>
//             <a href={props.url} className="py-3 px-7 bg-green-900 inline-block capitalize text-white text-sm font-semibold rounded cursor-pointer focus:ring-offset-2 focus:ring-offset-transparent focus:ring focus:ring-green-900 hover:bg-green-600">{props.text}</a>
//         </button>
//     )
// }

// export default Button;

import tw from "tailwind-styled-components";

const Button = tw.button`
    py-3 
    px-7
    font-semibold
    rounded
    cursor-pointer
`;

export default Button;

// export const PrimaryButton = tw(Button) `
//     //CSS
//     background-color: ${defaultTheme.primaryColor};
//     border: none;
//     color: #fff;
//     &:hover {
//         background-color: ${defaultTheme.primaryHoverColor};
//         color: ${defaultTheme.textColorOnPrimary};
//     }
//     &:focus {
//         outline: 3px solid ${defaultTheme.primaryColor};
//         outline-offset: 2px;
//     }
//     &:active {
//         background-color: ${defaultTheme.primaryActiveColor};
//         border-color: ${defaultTheme.primaryActiveColor};
//         color: ${defaultTheme.textColorOnPrimary};
//     }
//     &:disabled {
//         background-color: ${defaultTheme.disabled};
//         color: ${defaultTheme.textOnDisabled};
//         cursor: not-allowed;
//     }
//     ${applyStyleModifiers(BUTTON_MODIFIERS)}
// `;

// export const SecondaryButton = tw(Button) `
//     background: none;
//     border: 2px solid ${defaultTheme.primaryColor};
//     color: ${defaultTheme.primaryColor};
//     &:hover {
//         background-color: ${defaultTheme.secondaryHoverColor};
//         color: ${defaultTheme.primaryColor};
//     }
//     &:focus {
//         outline: 3px solid ${defaultTheme.primaryColor};
//         outline-offset: 2px;
//     }
//     &:active {
//         background-color: ${defaultTheme.secondaryActiveColor};
//     }
//     &:disabled {
//         background: none;
//         border-color: ${defaultTheme.disabled};
//         color: ${defaultTheme.textOnDisabled};
//         cursor: not-allowed;
//     }
//     ${applyStyleModifiers(BUTTON_MODIFIERS)}
// `;

// export const TertiaryButton = tw(Button) `
//     background: none;
//     color: ${defaultTheme.primaryColor};
//     text-decoration: underline;
//     svg {
//         transition: all 0.2s;
//         margin-left: 8px;
//     }
//     &:focus {
//         color: ${defaultTheme.primaryActiveColor};
//     }
//     &:active {
//         transform: scale(0.975);
//     }
//     &:disabled {
//         background-color: none;
//         color: ${defaultTheme.textOnDisabled};
//         cursor: not-allowed;
//     }
//     ${applyStyleModifiers(BUTTON_MODIFIERS)}
// `;
