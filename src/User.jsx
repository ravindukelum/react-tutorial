import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const {username}=useParams()

    useEffect(()=>{
            //fetch some data with username variable
    },[])
    return(
        <div>
            
            <h1>I am a user Component ({username})</h1>
        </div>
    )
}

export default User;