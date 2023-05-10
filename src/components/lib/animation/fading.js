import {useEffect, useState} from 'react';

export default function Fading({on, delay = 1000, children}) {

    const [opacity, _opacity] = useState(on ? "initial" : "none")
    const [display, _display] = useState(on ? 1 : 0)

    useEffect(() => {
        if (on) {
            _display("initial")
            setTimeout(() => _opacity(1), 100)

        } else {
            _opacity(0)
            setTimeout(() => _display('none'), delay)
        }
    }, [on])

    return (
        <div
            className={"Fading"}
            style={{
                opacity: opacity,
                transition: `opacity ${delay}ms ease-in-out`,
                display: display
            }}
        >
            {children}
        </div>
    )
}
