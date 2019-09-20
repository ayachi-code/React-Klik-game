import React from 'react';
//eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Firebase from 'firebase';

class Leaderbord extends React.Component {

    constructor(props) {
        super(props);
        this.laden = this.laden.bind(this);
    }

    laden() {
        let Leaderbord_nasco;
        let gebruikers = {naam: [],Highscores: []}
        let gebruikers_per = {}
        console.log("Highscore en username halen uit database")
        let database = Firebase.database();
        let ref = database.ref('gebruiker');
        ref.on('value',(data) => {
            Object.keys(data.val()).forEach((gebruiker) => {
                gebruikers.naam.push(data.val()[gebruiker].Naam);
                gebruikers.Highscores.push(data.val()[gebruiker].Score);
                //Leaderbord_nasco = "Naam: " + data.val()[gebruiker].Naam + ", HighScore: " + data.val()[gebruiker].Score
            });
            for (let key in gebruikers.naam && gebruikers.Highscores) {
                console.log(gebruikers.naam[key] + " " + gebruikers.Highscores[key]);
                gebruikers_per[gebruikers.naam[key]] = gebruikers.Highscores[key]
            }
            console.log(gebruikers_per)
        });
    
    }

    render() {
        return(
            <div id="leaderbord" onLoad={this.laden()}>
                <table className="border border-primary">
                <thead className="border border-primary">
                    <tr>
                        <th>Naam</th>
                        <th>&nbsp; Highscore</th>
                    </tr>
                </thead>
                <tbody id="Scorens">
                    <tr>
                        <th>Bilal</th>
                        <th>&nbsp; 120</th>
                    </tr>    
                </tbody>
                    </table>
                </div>
        );
    }
}

export default Leaderbord;
