import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

const logMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
}

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return() => {
            console.log('component unmounting code');
            window.removeEventListener('mouseover', logMousePosition)
        }
    }, [])
    return (
        <div>
            Hooks x = {x} {y}
        </div>
    )
}

export default HookMouse
