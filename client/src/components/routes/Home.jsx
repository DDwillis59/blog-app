import React, {useState, useEffect} from "react";
import Nav from "../Nav"
import Blog from "../Blog"
import Header from "../Header"


function Home(){

    const[data, setData] = useState(null);

    useEffect(()=>{
        fetch("/home").then(
            reponse => reponse.json()
        ).then(
            data => {setData(data)}
        )
    }, [])



    function createBlogs(blog){
        return(
            <Blog 
            key = {blog._id}
            title = {blog.title}
            content = {blog.message}
            />
        );
    };


    return(
    <div>
        <Nav/>
        
        {data ? <body><Header/>{data.map(createBlogs)}</body>: <div className="loading"></div>}
        
        
    </div>
    
    )
}

export default Home;