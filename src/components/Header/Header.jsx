import React from 'react';
import './Header.css'

const Header=({headTitle,headerExpanded })=>{                    //here we are using es6 function 
    return (
                           //in javascript class keyword is already taken so to we use className keyword in jsx to specify the class
        <div className="head-container">    
        <img src="https://images.unsplash.com/photo-1646731929303-f1effea8fd03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80"
        className={`head-image ${ headerExpanded
                    ? 'head-image-expanded' : 'head-image-contracted'
                   }`}
        alt="headerImage"/>   
        <h1 className=
                {`head-text ${ headerExpanded
                    ? 'head-text-expanded':'head-text-contracted'
                }`}>{headTitle}</h1> 
        </div>
                                    //so we have created html div whose class is head-container
    );
};
 
export default Header;  