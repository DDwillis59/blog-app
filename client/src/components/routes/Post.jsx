import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";


function Post(){

    let {id} = useParams();

    const[data, setData] = useState(null);

    function getData(){
        axios.get("http://localhost:3001/blog/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }

    useEffect(()=>{
        getData()
        
        setInterval(()=>{
            getData()
        }, 10000)
        
    }, [])




    return(
        
        <div>
            <Nav/>
            {data ? 
            <div className="postPage"> 
                <h1>{data.title} </h1> 
                <span>{data.message}</span>
            </div>: 
            
            <div className="loading"></div>}
            <Footer/>
        </div>  

        
        
    )
}

export default Post;