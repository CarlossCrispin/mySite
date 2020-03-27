import React from "react";
import { graphql, Link } from "gatsby";
import EdNav from "../education.nav";

export default (props)=>{
    // console.log(props.data);
    const pageData = props.data.educationJson;

    
   return(
       <div>

            <header className="py-12 border-red-300 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="uppercase underline text-pink-600">
                        Regresar al Inicio.
                    </Link>
                    <h1 className="capitalize text-6xl font-bold">{pageData.title}</h1>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul>
                {
                    pageData.items.map((item,index)=>(
                        <li className="bg-white shadow mt-4 flex" key={index}>
                            <p className="vertical-text  border-red-500 border-solid border-l-4 ml-2">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{item.name}</h3>
                                    { 
                                        item.degree && <span className="inline-block p-2 radius bg-red-200 text-red-700">{item.degree}</span>
                                    }
                                    {
                                        item.url && <a className="btn2 mt-4 inline-block" href={item.url} target="_blank" rel="noopener noreferrer">ver más.</a>
                                    }
                                </div>
                                <div className="inline-block">
                                    <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">{item.score}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <EdNav/>
       </div>
   );
}

export const query = graphql`
    query($slug : String){
        educationJson(slug:{eq: $slug}){
            title
            description
            slug
            items{
                name
                degree
                score
                url
            }
        } 
    }
`;