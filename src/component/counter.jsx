import React from 'react';
// eslint-disable-next-line
import bootstrap from 'bootstrap/dist/css/bootstrap.css' 
import Score from './score';


class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            aantal_tijd: 10,
            tijd: 10,
            counter: 0,
            start: false,
            kliks: 0,
            highscore: localStorage.getItem('highscore')
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
                document.getElementById('start').disabled = false;
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
            this.score()
        } else {
            document.getElementById('counting').innerText = this.state.tijd;
        } 
    } 

    score() {
        document.getElementById('start').disabled = true;
        this.setState((state) => ({
            kliks: this.state.counter/this.state.aantal_tijd
        }));
        document.getElementById('kliks_seconde').innerText = this.state.kliks;
        if (localStorage.getItem('highscore') < this.state.counter) {
            //Highscore
            console.log("Nieuwe highscore")
            localStorage.setItem('highscore',this.state.counter)
            document.getElementById('score').innerHTML = this.state.counter;
        }       
    }

    render() {
       return(
          <div className="col-sm-12 text-center">
            <p className="h1">{this.state.counter}</p>
            <button id="start" className="rounded-pill w-25 btn btn-primary active" onClick={this.button}>Start</button>
            <br/>
            <button id="delen" className="rounded-pill w-25 mt-3 btn btn-primary active">(nog niet klaar) High score delen</button>
            </div>
       );
    }

}


export default Counter;