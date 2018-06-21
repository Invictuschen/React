import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
    state={
        inputnumber:0,
        inputChar:'',
    }

    countInput=(event)=>
    {
        const inputnumber = event.target.value.length;
        const inputChar =  event.target.value;
        this.setState({inputnumber:inputnumber,
                        inputChar:inputChar});
    }

    onClick=(index)=>
    {
        const chars = this.state.inputChar.split('');
        chars.splice(index,1);
        const text = chars.join('');//.join() function makes the array join to a string
        const inputnumber = text.length;//update the number that when click occurs
        this.setState(
            {inputChar:text,
            inputnumber:inputnumber}
        )
    }
  render() {
        const Chars = this.state.inputChar.split('').map((char,index)=>{//.split() function makes the js string to js array
            return(<Char key={index} click={()=>this.onClick(index)}>{char}</Char>)
      })
    return (
      <div className="App">
          <input type="text" onChange={this.countInput} value={this.state.inputChar}/>
          <Validation count={this.state.inputnumber}/>
          {Chars}
      </div>
    );
  }
}

export default App;
