// import axios from 'axios';
import { FETCH_POSTS, POST_SELECTED, DELETE_POST } from './types';


export const showDetails = (post) => {
    console.log(post)
    return {
        type: POST_SELECTED,
        payload: post ,

    }
} 

export const fetchPosts = () => dispatch => {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            // payload: posts,
            payload: [
                {
                    id: 0,
                    avatar: '100008343750912',
                    name: 'Adam Donatelli',
                    thumbnail: 'https://photos.smugmug.com/Test/i-J6mRXp2/0/6d0fc701/S/phoenixvaca-S.jpg',
                    gallery: true,
                    description: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    liked: false,
                    date: '',
                    comments: [
                                {
                                    id: 0,
                                    user: '',
                                    avatar: '100008343750912',
                                    text: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing.',
                                },
                                {
                                id: 1,
                                user: '',
                                avatar: '100008343750912',
                                text: '0 - Lorem ipsum dolor sit amet, consectetur.',
                                }
                              ],
                    likes: [
                                {
                                    userId: '3829',
                                },
                                {
                                    userId: '1265',
                                },
                            ]
                    },
                    {
                    id: 1,
                    avatar: '100008343750912',
                    name: 'Sam Jones II',
                    thumbnail: 'https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg',
                    gallery: false,
                    description: '1 - Lorem ipsum dolor sit amet, . ',
                    liked: true,
                    date: '',
                    comments: [
                                {
                                id: 0,
                                user: '',
                                avatar: '100008343750912',
                                text: '1 - Lorem ipsum dolor sit amet, consectetur.',
                               
                                },
                                {
                                id: 1,
                                user: '',
                                avatar: '100008343750912',
                                text: '1 - Lorem ipsum dolor sit amet, consectetur.',
                                }
                              ],
                    likes: [
                                {
                                userId: '3829',
                                },
                                {
                                userId: '1265',
                                },
                        ]
                    },
                    {
                    id: 2,   
                    avatar: '100008343750912',
                    name: 'Donald Jones',
                    thumbnail: 'https://photos.smugmug.com/Test/i-3J6gxXV/0/d9bc62f6/S/LonelyGirl-S.jpg',  
                    gallery: true,
                    description: '2 - Lorem ipsum dolor sit amet. ',
                    liked: false,
                    date: '',
                    comments: [
                                {
                                id: 0,
                                user: '',
                                avatar: '100008343750912',
                                text: '2 - Lorem ipsum dolor sit amet.',
                                },
                                {
                                id: 1,
                                user: '',
                                avatar: '100008343750912',
                                text: '2 - Lorem ipsum dolor sit amet, consectetur..',
                                },
                                {
                                id: 3,
                                user: '',
                                avatar: '100008343750912',
                                text: '2 - Lorem ipsum dolor sit amet, consectetur adipiscing.',
                                }
                              ],
                    likes: [
                                {
                                    userId: '3829',
                                },
                                {
                                    userId: '1265',
                                },
                            ]
                    
                    }
            ]
        }) );
    }



    export const deletePost = id => dispatch => {
        alert("Are you sure you want to delete this post")

        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(whatever => dispatch({
            type: DELETE_POST,
            payload: id
        }) )
    }

