import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const {username}=useParams()
    return(
        <div>
            
            <h1>I am a user Component ({username})</h1>
        </div>
    )
}

export default User;