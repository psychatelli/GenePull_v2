import React, {useState} from 'react'

function IntervolHookCounter() {

    const [count, setCoutount] = useState(0)

    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return () =>{
            clearInterval(interval)
        }
    },[])


    const tick = () =>{
        setCoutount(count + 1)
    }


    return (
        <div>
            
        </div>
    )
}

export default IntervolHookCounter
