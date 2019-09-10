import React from 'react';
// eslint-disable-next-line
import bootstrap from 'bootstrap/dist/css/bootstrap.css' 
import { finished } from 'stream';

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tijd: 5,
            counter: 0,
            start: false
        }
        this.button = this.button.bind(this);
        this.counting_down = this.counting_down.bind(this);
    }

    button() {

            this.setState((state) => ({
                counter: state.counter + 1,
                start: state.start = true
            }));
            if (!this.state.start === true) {
                console.log("start")
                document.getElementById("start").innerText = "blijf klikken"
                this.timer = setInterval(this.counting_down,1000);
            } 
    }
    
    counting_down() {
        this.setState((state) => ({
            tijd: state.tijd -= 1
        }));
        if (this.state.tijd === 0) {
            console.log("Hey we zijn klaar");
            clearInterval(this.timer);
            document.getElementById('tijd').innerText = "We zijn klaar"
        } else {
            document.getElementById('counting').innerText = this.state.tijd;
        } 
    } 
    
    render() {
       return(
          <div className="col-sm-12 text-center">
            <p className="h1">{this.state.counter}</p>
            <button id="start" className="btn btn-primary active" onClick={this.button}>Start</button>
            </div>
       );
    }

}


export default Counter;