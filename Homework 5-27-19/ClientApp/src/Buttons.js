import React from 'react';

class Buttons extends React.Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 1,
            color: ""
        };
    }      

    OnClick = () => {
        this.setState({ number1: this.state.number1 + this.state.number2 });
    }

    OnClick2 = () => {      
        this.setState({ number2: 1 + this.state.number2 });
    }

    OnClick3 = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            this.setState({ color})
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>{this.state.number1}</h1>
                <button onClick={this.OnClick} className="btn btn-primary">Add #</button>
                <h1>{this.state.number2}</h1>
                <button onClick={this.OnClick2} className="btn btn-success">amnt to add to #1</button>   
                <button onClick={this.OnClick3} className="btn btn-danger">Change color</button>
            </div>
        );
    }
}


export default Buttons;