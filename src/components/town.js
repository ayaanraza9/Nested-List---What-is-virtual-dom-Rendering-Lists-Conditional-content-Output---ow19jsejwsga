import React from "react";

export default function Town(props){
  
  return(
  <>
    {props.town.towns.map((items,index)=>(
    <div id={`towns${index+1}`} key={index}>
      {items.name}
      </div>
  ))}
  </>
  );
  }
