import React from "react";
import Nav from "../Nav"
import Blog from "../Blog"
import Header from "../Header"
import blogs from "../../blogs.json"

function Home(){
    function createBlogs(blog){
        return(
            <Blog 
            title = {blog.title}
            content = {blog.content}
            />
        )
        }
        return(
        <div>
            <Nav/>
            <body>
            <Header/>
            {blogs.map(createBlogs)}
            </body>
            
        </div>
        
        )
}

export default Home;