import React from 'react';
// import illustration from "../img/fondo.svg";
import illustration from "../img/fondo.png";

import Form from "./contact.form";

export default ()=> (
    <header className="bg-red-400">
        <div className="container mx-auto p-12 max-w-4xl ">
            <div className="flex justify-center items-center">
                <div className="flex-1">    
                    <h1 className="font-bold text-yellow-200 text-6xl ">¡Hola! Soy Carlos</h1>
                    <p className="text-xl font-light">Creo aplicaciones web y enseño programación</p>
                </div>
                <img src={illustration} alt="developer" style={{height: "400px"}}></img>
            </div>
            <div>
                <Form/>
            </div>
        </div>
        
    </header>
)