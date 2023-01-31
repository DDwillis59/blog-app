import React, {useState, useEffect} from "react";
import Nav from "../Nav"
import Blog from "../Blog"
import Header from "../Header"
import Footer from "../Footer";
import axios from 'axios'

function Home(){

    const[data, setData] = useState(null);

    function getData(){
        axios.get("http://localhost:3001/home")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }

    useEffect(()=>{
        getData()
        
        setInterval(()=>{
            getData()
        }, 10000)
        
    }, [])



    function createBlogs(blog){
        return(
            <Blog 
            key = {blog._id}
            id = {blog._id}
            title = {blog.title}
            content = {blog.message}
            />
        );
    };


    return(
    <div>
        <Nav/>
        
        {data ? <body><Header/>{data.map(createBlogs)}</body>: <body><div className="loading"></div></body>}
        
        <Footer/>
        
    </div>
    
    )
}

export default Home;