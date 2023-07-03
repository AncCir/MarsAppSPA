import React from "react";
import nasa from './nasa.jpg';
import ComponentTemplate from "./ComponentTemplate";
function NasaComponent() {
    return(
        <div>
            <ComponentTemplate
                title= 'Nasa Baby'
                paragraph1='The National Aeronautics and Space Administration is America’s civil space program and the global leader in space exploration. '
                paragraph2='The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.'
                img={nasa}/>
        </div>
    )
}

export default NasaComponent;