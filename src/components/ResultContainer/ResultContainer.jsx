import React from 'react';
import NameCard from './../NameCards/NameCards';
import './ResultContainer.css';

const ResultContainer=({suggestedNames})=>
{
     const suggestNamesJSX=suggestedNames.map((suggestedName)=>{
         return <NameCard key={suggestedName} suggestedName={suggestedName}/>
     });

    return (
    <div className="result-container">{suggestNamesJSX}</div>
    );
}
export default ResultContainer;