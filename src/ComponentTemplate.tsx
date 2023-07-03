import React from  "react";
import "./ComponentTemplate.css";
import "./index.css";
import ComponentInterface from "./ComponentInterface";

function ComponentTemplate(props : ComponentInterface) {
   return ( <div>
        <h1 className = 'Title'>{props.title}</h1>
        <p className = 'Paragraph'>{props.paragraph1} </p>
        <p className = 'Paragraph'>{props.paragraph2}</p>
        <img src ={props.img} className="App-logo" alt="Nasa Logo"/>
    </div>
   )
}

export default ComponentTemplate;