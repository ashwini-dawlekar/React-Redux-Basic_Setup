import React,{ Component } from 'react';

class About extends Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            inputText:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            inputText:event.target.value
        })
    }

    render() {
        return(

            <div>
                <input
                    type="text"
                    placeholder="Enter the text."
                    value={this.state.inputText}
                    onChange={this.handleChange}
                ></input>
                <h3>The text is:{this.state.inputText}</h3>
            </div>
        )
    }
}


export default About;