//https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz
//https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40carlos.crispin.cc

import React, { useState, useEffect } from 'react';
import Posts from "./posts";
import Post from "./post";

export default () =>{
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const data = sessionStorage.getItem('posts');
        // console.log(data);

        
        if(data){
            setPosts(JSON.parse(data));
        }
        let myPosts; 


        async function getMidiumPosts(){
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz");

            myPosts = await response.json();

            sessionStorage.setItem('posts',JSON.stringify(myPosts.items));

            setPosts(myPosts.items);
        }
        getMidiumPosts();
    },[])
    return( 

        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts 
                    data={posts} 
                    card={Post}
                    title={"Mis publicaciones en Medium"}/>
                    
                </div>
            </div>
        </section>
       /*  <Posts
        data={posts} 
        card={Post}
        title={"Mis publicaciones en Medium"} />
 */
        
        
    );
}