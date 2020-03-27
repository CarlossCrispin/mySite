import React from 'react';
// import repos from '../data/repos';


export default (props) => (
    <li className="flex item-center mt-4">
        <div className="w-10/12 overflow-x-hidden">
            <h4 className="text-pink-600 font-bold truncate">{props.repo.name}</h4>
            <p className="text-sm text-gray-800 overflow-y-hidden" style={{height:"1.5em"}}>{props.repo.description}</p>
        </div>
        <div className="flex-1 text-right">
            <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer"> Ver.</a>
            {/* <img src={props.repo.owner.avatar_url} alt="avatar" className="rounded border rounded-xl" style={{height:"50px"}}></img> */}
        </div>
    </li>
);