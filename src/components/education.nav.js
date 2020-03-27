import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default(props)=>{
    /* react kook */
    const data =  useStaticQuery(graphql`
        {
            allEducationJson{
                edges{
                    node{
                        slug
                        title
                        description
                    }
                }
            }
        }
        
    `);
    return(
        <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center">Conoce sobre mi educación educativa</h2>
            <nav className="flex justify-center mt-8">
                {
                    data.allEducationJson.edges.map((element,index)=>{
                        const {node} = element;
                        return(
                            <article className="flex-1 bg-white shadow m-4 max-w-sm p-4" key={index}>
                                <header>
                                    <p className="font-bold leading-loose">{node.title}</p>
                                    <div className="mt-8">
                                        <p className="fint-light text-xs">{node.description}</p>
                                        <div className=" text-right">
                                            <Link to={`/${node.slug}`}  className="btn inline-block mt-4">
                                                ir
                                            </Link>
                                        </div>
                                    </div>
                                </header>
                            </article>
                        )
                    })
                }
            </nav>
        </div>
    );

}