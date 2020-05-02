import React, {useState, useEffect} from 'react'

function useEffect() {
    
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `you clicked ${count} times` 
    }, [count])

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count}times </button>
        </div>
    )
}

export default useEffect










const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.results;
        setData(item);
        setLoading(false);
    }, [])

    return {data, loading}
}

const useEffect = () => {
    
    const [count, setCount] = useState(0);
    const {data} = useFetch("http://api.random.com")

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count}times </button>
            {loading ? <div>...loading</div> : <div>{data.name.first} </div> }
        </div>
    )
}
