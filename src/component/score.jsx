import React from 'react'
 // eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line
import Firebase from 'firebase';
// eslint-disable-next-line
import Admin from 'firebase-admin';

const secret = require('../secret/code.json');


Admin.initializeApp({
    credential: Admin.credential.cert(secret),
    databaseURL: "https://fast-clicker.firebaseio.com"
}
);



class Score extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            high_score: localStorage.getItem('highscore')
        }
    }

    share_button() {
        console.log("Je wilt je score delen met de leaderbord")
        
    }

    render() {
        return (
            <div id="Scoren" className="d-flex justify-content-center">
                <div className="border border-primary"><p id="klik_seconde"><span id="kliks_seconde"></span> kliks per seconde </p>
                <p>High Score: <span id="score">{this.state.high_score}</span></p>
                </div>
            </div>
        );
    }
}


export default Score;