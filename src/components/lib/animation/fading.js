import {useEffect, useState} from 'react';

export default function Fading({on, delay = 500, children}) {

    const [opacity, _opacity] = useState(on)
    const [visibility, _visibility] = useState(on)

    useEffect(() => {
        if (on) {
            _visibility(true)
            _opacity(true)
        } else {
            _opacity(false)
            setTimeout(() => _visibility(false), delay)
        }
    }, [on, delay])

    return (
        <div
            className={"Fading"}
            style={{
                opacity: opacity ? 1 : 0,
                transition: `opacity ${delay}ms ease-in-out`,
                visibility: visibility ? "initial" : "hidden"
            }}
        >
            {children}
        </div>
    )
}
