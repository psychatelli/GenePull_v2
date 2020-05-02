import React, {useState, useEffect} from 'react'

function DataFetching() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://someurl.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        },[])
    })
    return (
        <div>
            <ul> 
                {posts.map(post => <li>{post} </li>)}
            </ul>
        </div>
    )
}

export default DetaFetching
