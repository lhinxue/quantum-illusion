import {useEffect, useState} from 'react';

export default function Fading({on, delay = 500, children}) {

    return (
        <span
            className={"Fading"}
            style={{
                opacity: on ? 1 : 0,
                transition: `visibility ${delay}ms ease-in-out, opacity ${delay}ms ease-in-out`,
                visibility: on ? "visible" : "hidden"
            }}
        >
            {children}
        </span>
    )
}
