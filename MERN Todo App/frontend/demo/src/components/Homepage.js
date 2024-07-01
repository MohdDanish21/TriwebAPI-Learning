import React, { useEffect,useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";




const Homepage=()=>{
    // return(
    //     <div>Homepage</div>
    // )
    const navigate =useNavigate();
    const[user,setUser]=useState([]);
    const [flag,setFlag]=useState(false);

    useEffect(()=>{
    axios
    .get("http://localhost:3002")
    .then((res)=>{
        console.log(res)
        setUser(res.data.data);
    })
    .catch((err)=>console.log(err));
    
    },[flag]);

    const deleteHandler =(_id)=>{
        console.log("id",_id);
        let payload={
            _id,
        };
        axios.delete("http://localhost:3002/",{data:payload})
        .then((res)=>setFlag(!flag))
        .catch((err)=>console.log(err));
    };

    console.log("user",user);
    return (
    <>
        <button onClick={()=>navigate("/add-user")}>Add User</button>
        <button onClick={()=>navigate("/edit-user")}>Edit user</button>
        <div>Homepage</div>
        <br/>
        <br/>
        <table className='moduleSection'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>userName</th>
                    <th>mobile</th>
                    <th>Delete</th>
                </tr>
            </thead>
                <tbody>
                    {user&& user.map((post)=>{
                        return (
                            <tr key={post._id}>
                                <td>{post._id}</td>
                                <td>{post.userName}</td>
                                <td>{post.mobile}</td>
                                <td  className="hoverable"  onClick={()=>deleteHandler(post._id)}>Delete</td>
                            </tr>
                        );
                    })}
                </tbody>
        </table>
    </>
    );
};

export default Homepage;