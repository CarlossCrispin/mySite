import React from 'react';

export default (props)=>{
    const course = props.element;
    
    
    return(
        <div className="shadow p-8 bg-white mr-4 bg-red-100 border border-red-200 border-red-300 border-l-4">
            <h4 className="font-bold text-pink-600 truncate">
                <a href={course.url} target="_blank" rel="noopener noreferrer">{course.title} </a> </h4>
            <div className="text-center ">
                <span className="inline-block bg-red-200 text-pink-600 p-2 mt-2 rounded-full py-2 px-4 text-sm"> Progreso : {parseInt(course.progress)}%</span>
            </div>
        </div>
       /*  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        </div> */
    )
}