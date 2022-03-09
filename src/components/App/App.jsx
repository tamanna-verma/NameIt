//this is a react file or jsx  extension shows that this file contain the jsx code 
import React from 'react';//import react module from React library
import './App.css';
import ResultContainer from './../ResultContainer/ResultContainer';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
//lets build our class component

const name=require('@rstacruz/startup-name-generator');


class App extends React.Component{

    state={
        headerText:"Name It!",
        headerExpanded:true,
        suggestedNames:[]
    }

    handleInputChange=(inputText)=>   //we can also pass the functions as prop
    { 
       
       this.setState({
           headerExpanded:!inputText,
           suggestedNames:inputText?name(inputText):[],
        });
    };

    render()
    {
          return (

        <div>
            <Header headerExpanded={this.state.headerExpanded}
             headTitle={this.state.headerText}/>
            <SearchBox onInputChange={this.handleInputChange}/>
            <ResultContainer suggestedNames={this.state.suggestedNames} />
        </div>
        );
    } 
}
//lets build our functional componenet first 
 
export default App;



