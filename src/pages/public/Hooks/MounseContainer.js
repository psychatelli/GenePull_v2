import React, {useState} from 'react'

function MounseContainer() {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display) }>
                {display && <HookMouse/>}
            </button>
        </div>
    )
}

export default MounseContainer
