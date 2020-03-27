import React from 'react';

export default (props) => {
    const certificate = props.element;
    return(
        <div className="shadow  p-8 bg-white mr-4 bg-red-100 border border-red-200 border-red-300 border-l-4">
            <h4 className="font-bold text-pink-600 truncate"> {certificate.title}</h4>
            <div className="text-center ">
                <span className="inline-block bg-red-200 text-pink-600 p-2 mt-2 rounded-full py-2 px-4"> Calificación : {certificate.score}</span>
            </div>
        </div>
    );
}