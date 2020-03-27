
import React from 'react';

export default (props) =>{

    const post = props.element;
    return(
        <div className="shadow p-8 bg-white mr-4 bg-red-100 border border-red-200 border-red-300 border-l-4">
            <header className="h-40 bg-cover bg-center " style={{backgroundImage: `url(${post.thumbnail})`}}></header>
            <h4 className="font-bold text-pink-600 h-40 overflow-y-hidden overflow-x-scroll">
                {post.title} </h4>
            <div className="text-center mt-12">
                {/* <span className="inline-block bg-red-200 text-pink-600 p-2 mt-2 rounded-full py-2 px-4 text-sm"> Progreso : {parseInt(course.progress)}%</span> */}
                <a className="btn" target="_blank" rel="noopener noreferrer" href={post.link}>Leer.</a>
            </div>
        </div>
    );
}