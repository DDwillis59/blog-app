import React from "react";

function Blog(props){
    return(
        <div className="blogPost">
            <h2>{props.title}</h2>
            <p>{props.content.substring(0,250)} .... </p>
            <a href={"/blog/"+props.id}>Read More</a>
        </div>
    )
    
}


export default Blog;