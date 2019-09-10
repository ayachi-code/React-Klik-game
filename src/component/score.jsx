import React from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class Score extends React.Component {
    render() {
        return (
            <div id="Score" className="row" >
                <div className="col-sm-12"><p id="klik_seconde"><span id="kliks_seconde"></span> kliks per seconde </p></div>
            </div>
        );
    }
}


export default Score;