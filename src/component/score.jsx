import React from 'react'
 // eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class Score extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            high_score: localStorage.getItem('highscore')
        }
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