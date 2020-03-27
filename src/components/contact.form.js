import React from 'react';


export default ()=> (
    <form className="mt-16 text-center">
        <label htmlFor="contact-content" className="block text-gray-800 text-sm font-bold mb-2">Cuéntame esa idea que quieres hacer realidad :</label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea 
            className="flex-1 py-2 px-3 text-gray-800 focus:outline-none focus:shadow-outline" id="contact-content" 
            name="contact-content"></textarea>
            <button className="btn ml-4">Enviar</button>
        </div>
    </form>
);