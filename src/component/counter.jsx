import React from 'react';
// eslint-disable-next-line
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
// eslint-disable-next-line
import Firebase from 'firebase';
import Bad from 'bad-words';

const slecht_woord = new Bad({placeHolder: "X"});

class Counter extends React.Component {
    constructor(props) {
        //Firebase initialiseren
        Firebase.initializeApp({
            apiKey: "AIzaSyBGcgqsaP9Cv1Nl5w6BXdi923a6r3b_naI",
            authDomain: "fast-clicker.firebaseapp.com",
            databaseURL: "https://fast-clicker.firebaseio.com",
            projectId: "fast-clicker",
            storageBucket: "fast-clicker.appspot.com",
            messagingSenderId: "422005583900",
            appId: "1:422005583900:web:85231ed2fb2396d964afd9" 
        });
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
        this.retry = this.retry.bind(this);
        this.share_button = this.share_button.bind(this)
    }

    button() {
            document.getElementById('delen').disabled = true;
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
        //document.getElementById('delen').disabled = true;
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
        document.getElementById('delen').disabled = false;
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

    retry() {
        window.location.href = "/"
    }

    share_button() {
        console.log("Je wilt je score delen met de leaderbord") 
        let gebruiksnaam = window.prompt('Type een gebruiksnaam'); 
        if (gebruiksnaam === "" || gebruiksnaam === null) {
            console.log("Voer een naam in");
        } else {
        //console.log(slecht_woord.clean(gebruiksnaam));
        //Sturen naar database
        let database = Firebase.database();
        let gebruiker = database.ref('gebruiker');
        gebruiker.push({
            Naam: slecht_woord.clean(gebruiksnaam),//gebruiksnaam,
            Score: document.getElementById('score').innerHTML
        });
    }
    }

    render() {
       return(
          <div className="col-sm-12 text-center">
            <p className="h1">{this.state.counter}</p>
            <button id="start" className="rounded-pill w-25 btn btn-primary active" onClick={this.button}>Start</button>
            <br/>
            <button id="delen" className="rounded-pill w-25 mt-3 btn btn-primary active" onClick={this.share_button}>High score delen</button>
            <br/>
            <button id="retry" className="rounded-pill w-25 mt-3 btn btn-primary active" onClick={this.retry}>Opnieuw</button>
            </div>
       );
    }

}


export default Counter;