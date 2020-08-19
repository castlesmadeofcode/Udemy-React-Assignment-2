import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent'
import Char from './CharComponent/CharComponent'


class App extends Component {

  state = {
    text: "",
    len: "",
    isValid: "",
    chars: ""
  }


  lengthChangeHandler = (event, id) => {
    let text = this.state.text
    text = event.target.value;
    let len = text.length
    this.setState({ text: text })
    this.setState({ len: len })
    if (len < 5) {
      this.setState({ isValid: "text is too short" })
    }
    else {
      this.setState({ isValid: "text is long enough" })
    }
  }

  removeCharHandler = (textIndex) => {
    const text = [...this.state.text.split("")];
    text.splice(textIndex, 1);
    const updatedText = text.join("")
    this.setState({ text: updatedText })
  }

  render() {

    let chars = null;
    let splitText = this.state.text.split("")

    chars = (
      < div >
        {splitText.map((char, index) => {
          return <Char
            click={() => this.removeCharHandler(index)}
            char={char}
            key={index}
          />
        })}
      </div >
    );



    return (
      <div className="App" >
        <ol>
          <input type="text" onChange={this.lengthChangeHandler} value={this.state.text}></input>
          <Validation
            len={this.state.len}
            isValid={this.state.isValid}
          />

          {chars}

        </ol>
      </div>
    );
  }
}

export default App;









