'use client'
//THIS IS A CLIENT COMPONENT
import { useState } from 'react';

export default function LikeButton(){
    const [likes,setLike] = useState(0);
    function handleClick(){
        setLike(likes+1);

    }
    return <button onClick={handleClick}>Like {likes}</button>
}