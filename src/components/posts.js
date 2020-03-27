import React, { Fragment} from 'react';


export default (props) => (
    
    <Fragment>
        <h2 className="text-3xl font-bold text-center mt-12 border-red-300 py-2 px-4 border-b-4">{props.title}</h2>
        <div className="flex mt-8 cont">
            <div className="grid grid-cols-3 gap-4">
                {
                    props.data.map((prop,index)=> (
                        <props.card element={prop} key={index}/>
                    ))
                }
            </div>
        </div>
    </Fragment>

)

