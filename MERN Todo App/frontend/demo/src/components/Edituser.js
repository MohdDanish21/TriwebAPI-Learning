import React, { useEffect,useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Edituser=()=>{
    const navigate =useNavigate();
    const[user,setUser]=useState([]);
    const [flag,setFlag]=useState(false);
    const editHandler=(e,_id, key)=>{
        const editedData = user.find((item)=>item._id===_id);
        let payload = {...editedData,[key]: e.target.innerHTML};

        axios.put("http://localhost:3002/", payload)
        .then((res)=>{
            setUser(editedData);
            setFlag(!flag);
        });
    };

    useEffect(()=>{
        axios
        .get("http://localhost:3002")
        .then((res)=>{
            console.log(res)
            setUser(res.data.data);
        })
        .catch((err)=>console.log(err));
        
        },[flag]);

        return (
            <>
                <button onClick={()=>navigate("/")}>Homepage</button>
                <button onClick={()=>navigate("/add-user")}>Add user</button>
                <div>Homepage</div>
                <br/>
                <br/>
                <table className='moduleSection'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>userName</th>
                            <th>mobile</th>
                        </tr>
                    </thead>
                        <tbody>
                            {user.length > 0? user&& user.map((post)=>{
                                return (
                                    <tr key={post._id}>
                                        <td>{post._id}</td>
                                        <td contentEditable
                                         suppressContentEditableWarning
                                          onBlur={(e)=>editHandler(e,post._id,"userName")}>
                                            {post.userName}</td>
                                        <td contentEditable 
                                        suppressContentEditableWarning
                                         onBlur={(e)=>editHandler(e,post._id,"mobile")}>
                                            {post.mobile}</td>
                                    </tr>
                                );
                            }):"no data found"}
                        </tbody>
                </table>
            </>
            );
}

export default Edituser